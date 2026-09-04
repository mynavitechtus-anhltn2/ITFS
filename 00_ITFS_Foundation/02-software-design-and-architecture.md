---
pillar: Software Design & Architecture
code: "02"
type: foundation
version: 1.0.0
---

# 02. Software Design & Architecture

> Thiết kế đúng. Kiến trúc vững. Từ sử dụng pattern đến định hình hệ thống. ⚡ Impact Analysis + Trade-off Analysis core

## Lộ trình học · 9 giai đoạn

| #   | Giai đoạn                       | Nội dung & lý do quan trọng                                                                                           |
| --- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | **Clean Code**                  | Naming, structure, readability — why clarity reduces bugs and makes code easier to change                             |
| 2   | **Programming Paradigms**       | Structured, object-oriented, functional — why different paradigms shape how problems are solved                       |
| 3   | **Object-Oriented Programming** | Abstraction, encapsulation, inheritance, polymorphism — why behavior and responsibility need clear models             |
| 4   | **Design Principles**           | SOLID, DRY, YAGNI, composition — why good principles keep code flexible and maintainable                              |
| 5   | **Design Patterns**             | Observer, Strategy, Factory — why reusable solutions help with recurring design problems                              |
| 6   | **Architectural Principles**    | Coupling, cohesion, boundaries, policy vs details — why dependencies must be controlled                               |
| 7   | **Architectural Styles**        | Layered, client-server, monolithic, component-based — why system shape affects change and scale                       |
| 8   | **Architectural Patterns**      | MVC, domain-driven design — why patterns organize applications at a higher level                                      |
| 9   | **Enterprise Patterns**         | DTOs, repositories, mappers, value objects, transaction scripts — why large systems need consistency and coordination |

## Ma trận năng lực · 9 cấp độ

### Junior 1

**Bloom:** REMEMBER · Ghi nhớ

**Kỹ năng**

Nhận biết MVC/MVVM, OOP cơ bản. Nhận biết code thuộc layer nào.

**AI Fluency:** Nhận biết khi AI đặt code sai layer. (P1)

### Junior 2

**Bloom:** UNDERSTAND · Hiểu, giải thích

**Kỹ năng**

Giải thích tại sao tách layers, dependency giữa modules. Hiểu patterns cơ bản (Singleton, Factory) và SOLID. Nhận biết thay đổi ở module mình ảnh hưởng module khác.

**AI Fluency:** Phát hiện AI suggest pattern không phù hợp context. (P3)

### Junior 3

**Bloom:** UNDERSTAND→APPLY · Bắt đầu áp dụng

**Kỹ năng**

Áp dụng patterns cơ bản (Singleton, Factory, DI). Thiết kế module tuân thủ SOLID. Refactor tách concerns. Vẽ component diagrams. Kiểm tra impact cơ bản trước khi thay đổi structure.

**AI Fluency:** Dùng AI suggest patterns nhưng tự quyết định. Refactor AI output tuân thủ architecture. (P4)

### Middle 1

**Bloom:** APPLY · Áp dụng thành thạo

**Kỹ năng**

Thiết kế feature/module architecture end-to-end. Patterns phức tạp (Observer, Strategy, Decorator). Phân tích impact lên modules liên quan trước khi code. Trình bày ≥2 design options với pros/cons.

**AI Fluency:** Tạo Implement Plan trước khi AI generate. Validate AI output fit overall design. (P2, P4)

### Middle 2 (Dual Track)

**Bloom:** APPLY→ANALYZE · Áp dụng + phân tích

**Kỹ năng**

- **[Mgmt]** Phân tích design decisions, identify over/under-engineering. Review architecture proposals
- **[Expert]** System patterns (Event-Driven, CQRS, Pub/Sub). Monolith vs Microservice. Đánh giá dependencies cross-module và side effects trước khi code

**AI Fluency:** AI có bias toward complexity — engineer filter. (V4)

### Middle 3

**Bloom:** ANALYZE · Phân tích hệ thống

**Kỹ năng**

- **[Mgmt]** Technical debt, prioritize refactoring. Drive ADRs. Align architecture với business goals. Trình bày options với ưu nhược cho stakeholders
- **[Expert]** Architecture toàn project — scalability, durability, failover. Trade-off: cân bằng chi phí, thời gian, chất lượng

**AI Fluency:** AI không thể align với business goals — engineer phải.

### Senior 1

**Bloom:** ANALYZE→EVALUATE · Phân tích + đánh giá

**Kỹ năng**

- **[Mgmt]** Đánh giá architecture across projects. Drive standardization. Evaluate tech debt impact
- **[Expert]** System design phức tạp (HA, scalability). Define architecture review process

**AI Fluency:** Evaluate AI architectures against real-world constraints.

### Senior 2

**Bloom:** EVALUATE · Đánh giá, thiết lập chuẩn

**Kỹ năng**

- **[Mgmt]** Architecture standards & governance. Build architecture review board
- **[Expert]** Reference architectures. Evaluate emerging patterns. Approve high-stakes decisions

**AI Fluency:** Standards cho AI-assisted architecture work at department level.

### Senior 3

**Bloom:** EVALUATE→CREATE · Sáng tạo hệ thống mới

**Kỹ năng**

- **[Mgmt]** Architecture governance framework. Strategy aligned company vision
- **[Expert]** Novel architectural approaches. Platform/ecosystem architecture

**AI Fluency:** Kiến tạo AI-augmented architecture design processes.
