#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para extrair as 67 questões de questoes_sistemas_distribuidos.md,
associar explicações teóricas e diagramas SVG, validar consistência e gerar questoes.json.
"""

import json
import os
import re
import sys

from explanations import EXPLANATIONS
from diagrams import SVG_POSCOMP_2005_Q69, SVG_POSCOMP_2015_Q62


def clean_text_artifacts(text: str) -> str:
    """Remove artefatos de paginação de PDFs remanescentes no texto."""
    lines = text.splitlines()
    cleaned = []
    for line in lines:
        s = line.strip()
        # Artefatos comuns de cabeçalho/rodapé de provas
        if re.match(r"^\d+\s*/\s*\d+$", s):
            continue
        if re.match(r"^\d+_[A-Z0-9_]+_\d{1,2}/\d{1,2}/\d{4}", s):
            continue
        cleaned.append(line)
    return "\n".join(cleaned).strip()


def parse_markdown(md_path: str):
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Separa o corpo das questões do resumo final
    end_idx = content.find("## Resumo de gabaritos")
    if end_idx == -1:
        raise ValueError("Seção '## Resumo de gabaritos' não encontrada.")
    body_text = content[:end_idx]

    # Mapear temas: ## 1. Nome do Tema ...
    theme_matches = list(re.finditer(r"^## (\d+)\.\s+(.*)$", body_text, re.MULTILINE))

    def get_theme_for_pos(pos: int):
        cur_id = 0
        cur_name = ""
        for tm in theme_matches:
            if tm.start() <= pos:
                cur_id = int(tm.group(1))
                cur_name = f"{cur_id}. {tm.group(2).strip()}"
            else:
                break
        return cur_id, cur_name

    # Questões começam com ####
    q_matches = list(re.finditer(r"^#### (.*)$", body_text, re.MULTILINE))
    print(f"Total de questões encontradas no corpo: {len(q_matches)}")

    questions = []

    for i, m in enumerate(q_matches):
        q_id = i + 1
        start = m.start()
        end = q_matches[i + 1].start() if i + 1 < len(q_matches) else len(body_text)
        block = body_text[start:end].strip()

        header_line = m.group(1).strip()
        theme_id, theme_name = get_theme_for_pos(start)

        # Extração de exame e ano
        exame = "POSCOMP" if "POSCOMP" in header_line.upper() else ("ENADE" if "ENADE" in header_line.upper() else "OUTRO")
        ano_match = re.search(r"\b(20\d{2})\b", header_line)
        ano = int(ano_match.group(1)) if ano_match else None
        correlata = "_correlata_" in header_line.lower() or "correlata" in header_line.lower()

        # Gabarito oficial no bloco
        gab_match = re.search(r"\*\*Gabarito oficial:\*\*\s*(.*)", block)
        gab_raw = gab_match.group(1).strip() if gab_match else ""

        # Fonte no bloco
        fonte_match = re.search(r"\*\*Fonte:\*\*\s*(.*)", block)
        fonte = fonte_match.group(1).strip() if fonte_match else ""
        fonte = fonte.replace("`", "").strip()

        # Identificação de anulada ou discursiva
        anulada = "anulada" in gab_raw.lower() or "anulada" in header_line.lower()
        discursiva = "discursiva" in gab_raw.lower() or "discursiva" in header_line.lower()
        tipo = "discursiva" if discursiva else "multipla_escolha"

        gabarito = gab_raw
        if not anulada and not discursiva:
            m_let = re.search(r"([A-Ea-e])", gab_raw)
            if m_let:
                gabarito = m_let.group(1).upper()
        elif anulada:
            gabarito = "anulada"
        elif discursiva:
            gabarito = "discursiva"

        # Extração das alternativas e do enunciado
        lines = block.splitlines()

        # Localizar onde começam as alternativas (primeira linha começando com - (a), - a), - A), etc.)
        alt_start_idx = None
        for idx, line in enumerate(lines):
            if re.match(r"^\s*-\s*\(?[a-eA-E]\)\s+", line):
                alt_start_idx = idx
                break

        # Localizar onde começa o rodapé (**Fonte:)
        fonte_idx = None
        for idx, line in enumerate(lines):
            if line.strip().startswith("**Fonte:"):
                fonte_idx = idx
                break

        if discursiva:
            # Questão discursiva não possui alternativas
            enunciado_lines = lines[1:fonte_idx] if fonte_idx else lines[1:]
            alternativas = []
        else:
            if alt_start_idx is None:
                raise ValueError(f"Não encontrou início de alternativas para Q{q_id}: {header_line}")
            enunciado_lines = lines[1:alt_start_idx]
            alt_lines = lines[alt_start_idx:fonte_idx] if fonte_idx else lines[alt_start_idx:]

            # Parsing das alternativas
            alternativas_dict = {}
            for line in alt_lines:
                clean_l = clean_text_artifacts(line).strip()
                if not clean_l:
                    continue
                # Pode conter alternativas inline, ex: - a) ... b) ... c) ...
                parts = re.split(r"(?:^|\s+)-?\s*\(?([a-eA-E])\)\s*", clean_l)
                if len(parts) > 1:
                    for p_idx in range(1, len(parts), 2):
                        let = parts[p_idx].upper()
                        txt = parts[p_idx + 1].strip()
                        alternativas_dict[let] = txt
                else:
                    # Se for linha de continuação sem letra, anexa à última alternativa
                    if alternativas_dict:
                        last_let = list(alternativas_dict.keys())[-1]
                        alternativas_dict[last_let] += " " + clean_l

            alternativas = [
                {"letra": let, "texto": alternativas_dict.get(let, "")}
                for let in ["A", "B", "C", "D", "E"]
            ]

        enunciado = clean_text_artifacts("\n".join(enunciado_lines)).strip()

        # Diagrama SVG específico para Q33 e Q38
        svg_diagrama = None
        if q_id == 33:
            svg_diagrama = SVG_POSCOMP_2005_Q69
        elif q_id == 38:
            svg_diagrama = SVG_POSCOMP_2015_Q62

        explicacao = EXPLANATIONS.get(q_id, "")

        item = {
            "id": q_id,
            "tema_id": theme_id,
            "tema": theme_name,
            "titulo": header_line.replace("#### ", "").strip(),
            "exame": exame,
            "ano": ano,
            "correlata": correlata,
            "tipo": tipo,
            "anulada": anulada,
            "enunciado": enunciado,
            "svg_diagrama": svg_diagrama,
            "alternativas": alternativas,
            "gabarito": gabarito,
            "explicacao": explicacao,
            "fonte": fonte,
        }
        questions.append(item)

    return questions


def validate_questions(questions, md_path: str):
    """Valida as questões extraídas contra a tabela oficial de gabaritos."""
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()

    summary_start = content.find("## Resumo de gabaritos")
    summary_end = content.find("## Questões vistas e não incluídas")
    summary_lines = content[summary_start:summary_end].strip().splitlines()

    table_rows = []
    for line in summary_lines:
        if line.startswith("|") and not line.startswith("| Questão") and not line.startswith("|---"):
            parts = [p.strip() for p in line.split("|") if p.strip()]
            if len(parts) >= 2:
                table_rows.append((parts[0], parts[1]))

    assert len(questions) == 67, f"Esperado 67 questões, obtido {len(questions)}"
    assert len(table_rows) == 67, f"Esperado 67 linhas no resumo oficial, obtido {len(table_rows)}"

    for i, q in enumerate(questions):
        expected_q_name, expected_gab = table_rows[i]
        norm_expected = "anulada" if "anulada" in expected_gab.lower() else ("discursiva" if expected_gab == "—" else expected_gab.strip().upper())
        norm_actual = q["gabarito"].strip().lower() if q["anulada"] or q["tipo"] == "discursiva" else q["gabarito"].strip().upper()

        if norm_expected != norm_actual:
            raise AssertionError(f"Mismatch na Q{q['id']}: esperado {norm_expected}, obtido {norm_actual}")

        if q["tipo"] == "multipla_escolha":
            assert len(q["alternativas"]) == 5, f"Q{q['id']} deve ter 5 alternativas"
            for alt in q["alternativas"]:
                assert alt["texto"], f"Q{q['id']} alternativa {alt['letra']} vazia"

        assert q["explicacao"], f"Q{q['id']} deve ter explicação teórica"

    print("✔ Validação com o gabarito oficial concluída com 100% de sucesso!")


def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    md_file = os.path.join(root_dir, "questoes_sistemas_distribuidos.md")
    output_file = os.path.join(root_dir, "questoes.json")

    print(f"Lendo markdown em: {md_file}")
    questions = parse_markdown(md_file)
    validate_questions(questions, md_file)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    # Gera também questoes-data.js para garantir funcionamento offline em file:// sem erro de CORS
    js_data_file = os.path.join(root_dir, "questoes-data.js")
    prova_file = os.path.join(root_dir, "questoes_prova.json")
    prova_data = "[]"
    if os.path.exists(prova_file):
        with open(prova_file, "r", encoding="utf-8") as pf:
            prova_data = pf.read()

    with open(js_data_file, "w", encoding="utf-8") as f:
        f.write("window.QUESTOES_DATA = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("window.QUESTOES_PROVA_DATA = " + prova_data + ";\n")

    print(f"✔ Arquivo {output_file} salvo com sucesso com {len(questions)} questões!")
    print(f"✔ Arquivo {js_data_file} gerado para compatibilidade web offline!")


if __name__ == "__main__":
    main()
