# Conflict Resolution Log — Election Saathi Knowledge Base
> **Resolution Date:** May 2026  
> **Version:** Final — controls over Start-research.md and deep-research-report.md  
> **Status:** Locked — do not modify before build

> **Purpose:** Audit of factual conflicts between File 1 (Start-research.md — statute-anchored primary knowledge base) and File 2 (deep-research-report.md — cross-verified analytical report). Each conflict is resolved with a trust rationale before the final knowledge base is built.

---

## Conflict 1 — Form 8A Status (Active vs Discontinued)

| Source | Claim |
|--------|-------|
| **File 1** | Form 8A has been **officially discontinued** per the Registration of Electors (Amendment) Rules, 2022. Its functions (transposition within the same constituency) are subsumed into Form 8. |
| **File 2** | Treats Form 8A as **still active** — describes it for "shifting a voter's entry from one part of the constituency to another" and references it in solutions (e.g., "use Form 8A if shifting address within the same district"). |

**Resolution: File 1 wins.**  
File 1 cites the 2022 Registration Rules Amendment explicitly. Now externally verified with a direct quote from ECI Secretary Pawan Diwan's official training document: "Form 8A for Transposition of Entry in Electoral Roll has been discontinued." Form 8A is marked as **deprecated** in the knowledge base under `deprecated_forms`. Form 8A will never appear as an active form.

---

## Conflict 2 — Portal URL (nvsp.in vs voters.eci.gov.in)

| Source | Claim |
|--------|-------|
| **File 1** | Uses `voters.eci.gov.in` exclusively as the current unified portal. |
| **File 2** | References `nvsp.in`, `voterportal.eci.gov.in`, and `nrivoter.eci.gov.in` alongside the current portal. |

**Resolution: File 1 wins.**  
NVSP has officially migrated to `voters.eci.gov.in`. All portal references in the knowledge base will use `voters.eci.gov.in` exclusively. Legacy URLs like `nvsp.in` redirect there and will not be cited.

---

## Conflict 3 — Form Processing Time

| Source | Claim |
|--------|-------|
| **File 1** | States a strict **15 to 30-day** statutory processing window for Forms 6, 6A, 7, and 8. |
| **File 2** | Says processing time "varies (often 2-3 months before roll revision)" and is "state-dependent." |

**Resolution: File 1 wins.**  
File 1 anchors the 15–30 day window to the Registration of Electors Rules and ERO processing obligations. File 2's "2-3 months" reflects worst-case real-world delays, not the statutory requirement. The knowledge base uses the statutory window (15–30 days) as the authoritative processing time.

---

## Conflict 4 — 2025 EVM Burnt-Memory SOP

| Source | Claim |
|--------|-------|
| **File 1** | Does not mention the 2025 Supreme Court-ordered burnt-memory verification SOP. |
| **File 2** | Documents the 2025 SOP in detail: losing candidates can apply for burnt-memory checks, up to 20 Ballot Units and 10 Control Units checked, video-recorded, with signed certificates of authenticity. |

**Resolution: File 2 wins.**  
This is a new Supreme Court order absent from File 1's research window. The 2025 SOP is included in the `evm_vvpat_security` section with explicit `"source": "2025_sc_sop"` attribution under `burnt_memory_verification_sop_2025`.

---

## Conflict 5 — NOTA Mechanics

| Source | Claim |
|--------|-------|
| **File 1** | "Even if NOTA secures the highest number of votes in a constituency, the human candidate securing the second-highest number of valid votes is legally declared the winner." |
| **File 2** | "Even if NOTA receives the most votes, the candidate with the next highest (among actual candidates) is declared elected." |

**Resolution: Merge both — both agree.**  
Both files state the same legal position. The knowledge base uses File 1's clearer phrasing and adds the PUCL v. Union of India (2013) citation.

---

## Conflict 6 — FLC Process Description

| Source | Claim |
|--------|-------|
| **File 1** | FLC is conducted "months before the election" at district headquarters by BEL/ECIL engineers, with a mock poll of **1,000 votes on a 5% random sample** of EVMs, in mandatory presence of political party representatives. |
| **File 2** | States FLC is done "each day, before polling" by the Returning Officer — a significantly different description that conflates FLC with the daily mock poll. |

**Resolution: File 1 wins.**  
File 2 incorrectly conflates FLC (a pre-election diagnostic done months in advance) with the election-morning mock poll (50 votes, 90 minutes before polling). File 1's description is technically precise. Both processes are documented separately in the knowledge base.

---

## Conflict 7 — MCC Legal Backing

| Source | Claim |
|--------|-------|
| **File 1** | States MCC "lacks direct, standalone statutory backing" but is enforced through Article 324 authority and overlapping criminal statutes (RPA 1951, BNS). Penalties include censures, gag orders, and FIRs. |
| **File 2** | States MCC "is not a law but a voluntary code" and "violations do not trigger criminal penalties under law." Claims ECI "has no judicial arm" and "cannot impose fines." |

**Resolution: Nuanced 3-part formulation.**  
Neither file was fully right. The MCC itself is not a standalone statute, but the ECI has real enforcement teeth via its constitutional mandate under Article 324 AND overlapping criminal law (bribery under IPC/BNS, hate speech under RPA 1951), and violations absolutely can and do result in FIRs and criminal prosecution.

---

## Conflict 8 — BLO Description

| Source | Claim |
|--------|-------|
| **File 1** | BLO is "often a local teacher or clerk" — a neutral, factual description. |
| **File 2** | Contains the phrase "usually a BJP worker or a local official under ERO" — a partisan characterization. |

**Resolution: File 1 wins.**  
File 2's characterization is factually incorrect and violates non-partisan principles. BLOs are government employees (typically teachers, clerks, or panchayat staff) deputed by the ERO. No party affiliation is relevant. File 1's description is used.

---

## Conflict 9 — Voter Helpline Number Format

| Source | Claim |
|--------|-------|
| **File 1** | Uses **1950** as the National Voter Helpline number. |
| **File 2** | Uses both **1800-11-1950** (toll-free) and **1950** (with STD code). |

**Resolution: Merge both.**  
1950 is the short-code. 1800-11-1950 is the toll-free long format. The knowledge base references both, with 1950 as primary and the toll-free number as supplementary.

---

## Conflict 10 — Number of Approved Polling Day IDs

| Source | Claim |
|--------|-------|
| **File 1** | Lists exactly **12** approved identity documents. |
| **File 2** | Also says **12** but lists slightly different items and adds EPIC as one of them (making it 13 if EPIC is counted separately). |

**Resolution: File 1 wins.**  
Confirmed back to exactly 12 alternative IDs (not 13). The "Certificate of Authority" suggestion in previous analysis was the same as item 11 (MP/MLA/MLC identity cards) — verified using ECI training documents. The knowledge base lists all 12 alternatives explicitly and notes EPIC as the standard primary ID.

---

## Summary Table

| # | Conflict | Winner | Rationale |
|---|----------|--------|-----------|
| 1 | Form 8A status | File 1 | Cites 2022 Registration Rules Amendment & ECI Secretary document |
| 2 | Portal URL | File 1 | NVSP officially migrated to voters.eci.gov.in |
| 3 | Processing time | File 1 | Cites statutory 15–30 day ERO windows |
| 4 | 2025 burnt-memory SOP | File 2 | New SC order absent from File 1 |
| 5 | NOTA mechanics | Merge | Both files agree on legal position |
| 6 | FLC process | File 1 | File 2 conflates FLC with daily mock poll |
| 7 | MCC legal backing | Merge | MCC is not a statute, but ECI uses Article 324 & overlapping criminal law |
| 8 | BLO description | File 1 | File 2 contains partisan characterization |
| 9 | Helpline number | Merge | Both formats are valid |
| 10 | Approved IDs count | File 1 | Precise 12-alternative list verified per ECI training documents |

## Conflict 11 — Form 7 BLO Visit Requirement

| Source | Claim |
|--------|-------|
| **KB Draft v1** | Form 7 has `blo_visit_required: True` |
| **Correct Process** | Form 7 is a legal objection filed by a citizen 
against another person's inclusion. No BLO home visit is required. 
BLO visits are only for Form 6 (new registration verification). |

**Resolution: Correct Process wins.**  
Form 7 `blo_visit_required` must be set to `False`. 
The BLO receives the application and notifies the objected 
individual, but does not conduct a field visit to the filer's home.