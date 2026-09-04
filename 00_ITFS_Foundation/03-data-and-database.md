---
pillar: Data & Database
code: "03"
type: foundation
version: 1.0.0
---

# 03. Data & Database

> Mô hình hóa dữ liệu. Tối ưu truy vấn. Từ query cơ bản đến thiết kế data platform.

## Lộ trình học · 9 giai đoạn

| #   | Giai đoạn                               | Nội dung & lý do quan trọng                                                                                                         |
| --- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Query Basics**                        | CRUD, data types, schema, ORM — why correct data access starts with correct queries                                                 |
| 2   | **Data Modeling Fundamentals**          | Normalization, relationships, constraints, SQL vs NoSQL — why structure controls consistency                                        |
| 3   | **Schema & Query Optimization**         | Indexing, profiling, migrations, Redis basics — why performance must be measured, not guessed                                       |
| 4   | **Advanced Data Modeling**              | Complex models, integrity, composite indexes, rollback — why growth needs reliability and safety                                    |
| 5   | **Data Systems & Caching**              | RDBMS, document, key-value, caching, aggregation — why workloads need different storage strategies                                  |
| 6   | **Project Data Architecture**           | Data conventions, scaling, search, polyglot persistence — why projects need shared data patterns                                    |
| 7   | **Database Platform Selection**         | RDBMS, document, key-value, search, time-series — why platform fit determines consistency, latency, and scale                       |
| 8   | **Migration, Performance & Governance** | Platform migration, hard query tuning, standards, review gates — why risky change needs measurement, safety, and control            |
| 9   | **Enterprise Data Architecture**        | Reference architectures, multi-platform strategy, large-scale optimization — why data becomes a long-term organizational capability |

## Ma trận năng lực · 9 cấp độ

### Junior 1

**Bloom:** REMEMBER · Ghi nhớ

**Kỹ năng**

Viết query cơ bản (CRUD). Nhận biết kiểu dữ liệu và schema. Sử dụng ORM theo hướng dẫn.

**AI Fluency:** Dùng AI sinh queries. Nhận biết khi AI query trả kết quả sai. (P1)

### Junior 2

**Bloom:** UNDERSTAND · Hiểu, giải thích

**Kỹ năng**

Hiểu RDBMS (normalization, relationships, constraints). Giải thích indexing, SQL vs NoSQL, data flow.

**AI Fluency:** Phát hiện AI viết query không tối ưu (N+1, missing index). (P3)

### Junior 3

**Bloom:** UNDERSTAND→APPLY · Bắt đầu áp dụng

**Kỹ năng**

Thiết kế schema features đơn giản. Optimize queries bằng indexing + profiler. Viết migrations. Bắt đầu Redis caching.

**AI Fluency:** Validate bằng profiler trên data thực — AI không biết data distribution. (P8)

### Middle 1

**Bloom:** APPLY · Áp dụng thành thạo

**Kỹ năng**

Data model module phức tạp, integrity & performance. RDBMS + ≥1 NoSQL. Caching Redis. Composite indexes. Migration có rollback.

**AI Fluency:** AI generate schema drafts, engineer validate against business rules + production patterns. (P8, V4)

### Middle 2 (Dual Track)

**Bloom:** APPLY→ANALYZE · Áp dụng + phân tích

**Kỹ năng**

- **[Mgmt]** Review data model decisions. Phân tích data bottlenecks across features
- **[Expert]** RDBMS vs Document vs Key-Value. Redis chuyên sâu. MongoDB aggregation. Cache invalidation

**AI Fluency:** Phân tích AI data solutions against production constraints.

### Middle 3

**Bloom:** ANALYZE · Phân tích hệ thống

**Kỹ năng**

- **[Mgmt]** Data architecture toàn project. Drive data conventions. Plan data scaling
- **[Expert]** ElasticSearch custom Tokenizer. Polyglot persistence. High-traffic data model

**AI Fluency:** Define guidelines: scenarios AI suggestions nguy hiểm (data loss, inconsistency).

### Senior 1

**Bloom:** ANALYZE→EVALUATE · Phân tích + đánh giá

**Kỹ năng**

- **[Mgmt]** Đánh giá data architecture across projects. Approve database choices. Drive data governance
- **[Expert]** HA, Replication, Clustering. CDC. Data architecture phân tán

**AI Fluency:** AI không đánh giá CAP trade-offs trong context cụ thể.

### Senior 2

**Bloom:** EVALUATE · Đánh giá, thiết lập chuẩn

**Kỹ năng**

- **[Mgmt]** Data standards & governance department. Evaluate data infrastructure investments
- **[Expert]** Reference data architectures. Data platforms (lake, warehouse, mart)

**AI Fluency:** Review gates cho AI schemas/queries trước production.

### Senior 3

**Bloom:** EVALUATE→CREATE · Sáng tạo hệ thống mới

**Kỹ năng**

- **[Mgmt]** Data strategy tổ chức. Data governance at scale
- **[Expert]** Sáng tạo data platform architecture. Enterprise data systems

**AI Fluency:** Kiến tạo AI-augmented data engineering workflows.
