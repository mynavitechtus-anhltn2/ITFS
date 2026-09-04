---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# AI Fluency · Consumer (P3) — đọc & giải thích AI code, hiểu hallucination

SoT: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md) · Matrix: [AI Fluency](../../../00_ITFS_Foundation/00_matrix_overview.md)

---

## 1. Vì sao phải đọc được cấu trúc, không chỉ đọc được cú pháp?

Trước hết cần bắt lỗi _bề mặt_: thiếu `label`, thiếu `alt`, `div` giả nút. Lỗi này lộ ngay khi Tab/nhìn DOM.

Bước tiếp theo khó hơn một tầng: AI sinh ra **component chạy được, cú pháp sạch, style đẹp** — nhưng _kiến trúc bên trong_ sai. Không ai Tab ra được lỗi "props drilling vô nghĩa" hay "component gánh 5 trách nhiệm" bằng mắt thường trên UI — phải **đọc code** mới thấy.

**Bản chất:** P3 nghĩa là bạn đọc AI code như đọc code của một dev khác trong team — hỏi _"tại sao nó viết vậy"_, không chỉ hỏi _"nó chạy chưa"_.

---

## 2. Hành vi cần nhớ

| Kỳ vọng                                       | Ý ngắn                                                             |
| --------------------------------------------- | ------------------------------------------------------------------ |
| Hiểu hallucination                            | AI có thể tự "bịa" API/hook/prop nghe rất thật nhưng không tồn tại |
| Đọc, giải thích AI code                       | Nói lại được luồng data & trách nhiệm từng phần — không chỉ copy   |
| Phát hiện AI component structure không hợp lý | God component, props drilling giả, đặt tên mơ hồ do AI tạo ra      |

SoT skill: _Phát hiện AI component structure không hợp lý. (P3)_

---

## 3. Hallucination trong code — không chỉ là "AI trả lời sai kiến thức"

Nhiều người chỉ nghĩ hallucination là AI bịa **thông tin** (ngày tháng, số liệu). Trong code, hallucination có 2 dạng nguy hiểm hơn vì **khó thấy bằng mắt**:

| Dạng                            | Biểu hiện                                                                                                                                   | Vì sao nguy hiểm                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Hallucination "ồn"** (loud)   | Gọi hook/API/import không tồn tại (`useSyncedProfile()`, `import { z } from "not-a-lib"`)                                                   | Build/runtime báo lỗi ngay — dễ bắt nếu bạn **chạy thử**, không chỉ đọc mắt                     |
| **Hallucination "im"** (silent) | Prop được khai báo/truyền xuống nhưng **không ai dùng**; hook đúng tên nhưng dùng sai hợp đồng (vd `useEffect` thiếu dependency quan trọng) | Chạy vẫn được, UI vẫn "trông đúng" — chỉ lộ khi đổi data/thêm case, hoặc khi đọc kỹ luồng props |

**Nuance dễ nhầm:** "Compile được / chạy được" chỉ loại được hallucination _ồn_. Hallucination _im_ — thứ nguy hiểm hơn — chỉ bắt được bằng cách **đọc và giải thích lại luồng dữ liệu**, đúng như mục tiêu P3.

---

## 4. Checklist đọc cấu trúc AI sinh (tối thiểu ≥3 finding)

Khi review 1 component/PR do AI viết, tự hỏi theo thứ tự:

1. **Trách nhiệm:** Component này kể được _một câu_ nó làm gì không, hay đang gánh cả fetch + render + tính toán + modal?
2. **Props có "chuyển hộ" không:** Có prop nào đi qua ≥2 tầng mà tầng giữa không dùng, chỉ "bắn tiếp"?
3. **Hook/API có thật không:** Grep tên hook/import — có tồn tại trong codebase/thư viện đang dùng, hay AI tự đặt tên nghe hợp lý?
4. **Naming có nói lên bản chất không:** `data`, `obj`, `handleStuff`, `Wrapper2` là dấu hiệu AI đặt tên tạm — cần đổi tên đúng nghĩa UI.
5. **Có component "rỗng" không:** File chỉ `return children` hoặc bọc 1 `div` không lý do — confetti do AI tách quá tay.

**≥3 finding thật** (không phải lỗi bề mặt semantics đã biết về semantics/a11y) là bằng chứng review cấu trúc đủ chặt.

---

## 5. Nuances dễ nhầm

### "AI viết dài, có comment giải thích" ≠ "kiến trúc đúng"

AI rất giỏi viết comment nghe thuyết phục cho quyết định sai (vd: comment "tách riêng cho dễ tái sử dụng" trên một component chỉ dùng 1 lần, rỗng). Đọc **code thật**, không đọc comment làm bằng chứng.

### Lỗi cú pháp dễ bắt hơn lỗi kiến trúc

Cú pháp sai → editor/build la ngay. Kiến trúc sai (props drilling giả, boundary lệch) → vẫn xanh, vẫn chạy — chỉ bạn (người đọc hiểu UNDERSTAND) mới thấy.

### Tự chạy thử trước khi kết luận "hallucination"

Nghi ngờ một hook/API lạ → đừng đoán, hãy **chạy** để xác nhận (build lỗi = hallucination _ồn_, thật). Nếu chạy được nhưng logic không dùng tới → hallucination _im_, ghi lại vì sao.

### Không phải mọi props truyền nhiều tầng đều là lỗi

Truyền có chủ đích qua layout lồng nhau là bình thường. Chỉ tính là finding khi prop **không liên quan** tới tầng giữa, chỉ đi ngang qua.

---

## 6. Use case — review "Dashboard" do AI sinh

**Bài toán:** AI được prompt "tách Dashboard thành component" — trả về `Dashboard` gọi `useSyncedProfile()` (hook không tồn tại trong project), truyền `theme` qua `Sidebar` → `SidebarItem` → `SidebarIcon` mà không ai dùng, và một `SidebarWrapper` chỉ `return children`.

| Finding                            | Loại               | Vì sao là lỗi cấu trúc                                 |
| ---------------------------------- | ------------------ | ------------------------------------------------------ |
| `useSyncedProfile()` không tồn tại | Hallucination ồn   | Build lỗi ngay — grep không thấy định nghĩa/import nào |
| `theme` truyền 3 tầng không dùng   | Props drilling giả | Middle component không đọc `theme`, chỉ "chuyển hộ"    |
| `SidebarWrapper` rỗng              | Component confetti | Tách thêm 1 file chỉ để `return children`, không lý do |

**Reflection:** Nhìn UI demo (nếu AI code còn phần không lỗi) vẫn "chạy tốt" trên happy path — sếp/buddy review lướt dễ approve. Chỉ khi grep hook lạ và vẽ lại luồng props mới lộ 3 vấn đề — đây chính là giá trị của P3 so với chỉ "test bằng tay" bằng checklist bề mặt.

---

## 7. Requirement Thinking gắn với AI structure review

Trước khi merge PR do AI viết, tự hỏi (nối Clarify chủ động):

1. Component/hook lạ này **có thật trong stack đang dùng** không — hay AI tự đặt tên?
2. Prop này **ai đọc**, ai không đọc — vẽ được luồng cha→con không?
3. Nếu xóa component này, ai bị ảnh hưởng — hay nó chỉ đang "chuyển hộ" giữa 2 nơi?

Không tự trả lời được → đừng approve chỉ vì "code chạy" — hỏi người viết (hoặc tự đọc kỹ lại) trước.

---

## 8. Tóm tắt

- P3 = đọc cấu trúc AI sinh như đọc code đồng nghiệp — hỏi _vì sao_, không chỉ _có chạy không_.
- Hallucination có 2 dạng: **ồn** (hook/API bịa, build lỗi ngay) và **im** (props/hook thừa, vẫn chạy nhưng vô nghĩa) — dạng im nguy hiểm hơn vì khó bắt.
- Checklist tối thiểu: trách nhiệm 1 câu, props có "chuyển hộ" không, hook/import có thật không, naming có nghĩa không, có component rỗng không.
- "Chạy được + comment nghe hợp lý" không phải bằng chứng kiến trúc đúng — luôn đọc code thật.

## 9. Exercise

- [AI structure review](../exercises/j2-06-ai-structure-review/)
