---
pillar: Security Engineering
code: "08"
type: foundation
version: 1.0.0
---

# 08. Security Engineering

> Bảo mật từ đầu. Phòng thủ chủ động. Từ nhận biết lỗ hổng đến security culture. ⚠️ NGUY HIỂM NHẤT — P9: Secure by Default

## Lộ trình học · 9 giai đoạn

| #   | Giai đoạn                           | Nội dung & lý do quan trọng                                                                                      |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | **Security Basics**                 | XSS, SQL injection, CSRF, sensitive data — why secure development starts with basic threat awareness             |
| 2   | **Secure Coding Principles**        | Authn vs authz, HTTPS, CORS, secrets — why code that works can still be exploitable                              |
| 3   | **Secure Delivery Practices**       | Validation, output encoding, env vars, checklists — why security must be consistent before delivery              |
| 4   | **Auth & Application Security**     | JWT, sessions, RBAC, OWASP Top 10, encryption — why apps need strong controls around access and data             |
| 5   | **Security Architecture & Review**  | OAuth2, SSO, SAST/DAST, review gates — why systemic risk needs architecture and discipline                       |
| 6   | **Project Security Architecture**   | Security posture, pentest, defenses, standards — why projects need shared protection patterns                    |
| 7   | **Cross-Project Security Strategy** | Security testing, tool choices, architecture review — why scale increases attack surface and coordination needs  |
| 8   | **Security Governance & Standards** | Governance, security-first culture, emerging threats — why organizations need durable standards                  |
| 9   | **Enterprise Security Vision**      | Security frameworks, AI-safe development, automated scanning — why security becomes an organizational capability |

## Ma trận năng lực · 9 cấp độ

### Junior 1

**Bloom:** REMEMBER · Ghi nhớ

**Kỹ năng**

Nhận biết XSS, SQL Injection, CSRF. Secure coding rules. Nhận biết sensitive data.

**AI Fluency:** Nhận biết AI code có security issues: hardcoded secrets, missing validation. MINIMUM BAR. (P9)

### Junior 2

**Bloom:** UNDERSTAND · Hiểu, giải thích

**Kỹ năng**

Hiểu cơ chế tấn công, authn vs authz, HTTPS, CORS, không hardcode secrets.

**AI Fluency:** Hiểu tại sao AI code có thể bị exploit dù "chạy đúng". (P9, V5)

### Junior 3

**Bloom:** UNDERSTAND→APPLY · Bắt đầu áp dụng

**Kỹ năng**

Secure coding nhất quán. Env vars. Input validation, output encoding. Security checklist trước delivery.

**AI Fluency:** Security review MỌI AI code trước commit. Checklist bắt buộc. (P9, DoD)

### Middle 1

**Bloom:** APPLY · Áp dụng thành thạo

**Kỹ năng**

Auth flows (JWT, session, RBAC). OWASP Top 10. Security code review. Encryption at rest & in transit.

**AI Fluency:** Own security kể cả AI code. AI hay tạo: weak auth, missing rate limiting, IDOR. (P9, V5)

### Middle 2 (Dual Track)

**Bloom:** APPLY→ANALYZE · Áp dụng + phân tích

**Kỹ năng**

- **[Mgmt]** Security risks across features. Team tuân thủ checklist. Review implications
- **[Expert]** Security architecture (OAuth2, SSO). SAST/DAST. Fix vulnerabilities system level

**AI Fluency:** Mandatory security review gates cho AI output. (V5)

### Middle 3

**Bloom:** ANALYZE · Phân tích hệ thống

**Kỹ năng**

- **[Mgmt]** Security posture toàn project. Define standards. Zero exception cho AI code
- **[Expert]** Pentest. Attack vectors. Defense strategies. Promote security across teams

**AI Fluency:** AI code pass CÙNG security standards — zero tolerance. (P9)

### Senior 1

**Bloom:** ANALYZE→EVALUATE · Phân tích + đánh giá

**Kỹ năng**

- **[Mgmt]** Security across projects. Approve architectures. Drive awareness
- **[Expert]** Security testing. Evaluate tools. Define review process

**AI Fluency:** AI tăng velocity → tăng attack surface nếu thiếu review. (V5)

### Senior 2

**Bloom:** EVALUATE · Đánh giá, thiết lập chuẩn

**Kỹ năng**

- **[Mgmt]** Security standards department. Security-first culture
- **[Expert]** Best practices. Emerging threats. Coordinate Security team

**AI Fluency:** Mandatory security review standards cho AI code at dept level.

### Senior 3

**Bloom:** EVALUATE→CREATE · Sáng tạo hệ thống mới

**Kỹ năng**

- **[Mgmt]** Security strategy tổ chức. Security governance framework
- **[Expert]** Sáng tạo security frameworks. Industry practices

**AI Fluency:** Kiến tạo AI-safe development practices. Automated scanning at scale.
