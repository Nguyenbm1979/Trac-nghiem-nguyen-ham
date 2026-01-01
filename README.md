# Bài Tập Trắc Nghiệm: Nguyên Hàm (CT GDPT 2018)

Bài kiểm tra bao gồm 22 câu hỏi, bám sát chương trình mới, tập trung vào định nghĩa, tính chất và các bài toán ứng dụng thực tế.

---

## Phần 1: Trắc nghiệm 4 phương án lựa chọn (12 câu)

**Câu 1:** Hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$ nếu:
A. $F'(x) = -f(x), \forall x \in K$.
B. $f'(x) = F(x), \forall x \in K$.
C. $F'(x) = f(x), \forall x \in K$.
D. $F'(x) = f'(x), \forall x \in K$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: C</b><br>
Theo định nghĩa: $F(x)$ là nguyên hàm của $f(x)$ thì đạo hàm của $F(x)$ chính là $f(x)$.
</blockquote>
</details>

---

**Câu 2:** Họ tất cả các nguyên hàm của hàm số $f(x) = x^3$ là:
A. $3x^2 + C$.
B. $\frac{x^4}{4} + C$.
C. $x^4 + C$.
D. $\frac{x^3}{3} + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: B</b><br>
Áp dụng công thức $\int x^\alpha dx = \frac{x^{\alpha+1}}{\alpha+1} + C$. Với $\alpha = 3$, ta có $\int x^3 dx = \frac{x^4}{4} + C$.
</blockquote>
</details>

---

**Câu 3:** Tìm nguyên hàm của hàm số $f(x) = e^x + 1$.
A. $e^x + x + C$.
B. $e^x + C$.
C. $e^x - x + C$.
D. $x e^x + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: A</b><br>
Ta có $\int (e^x + 1) dx = \int e^x dx + \int 1 dx = e^x + x + C$.
</blockquote>
</details>

---

**Câu 4:** Hàm số nào dưới đây là một nguyên hàm của hàm số $y = \sin x$?
A. $y = \cos x$.
B. $y = -\cos x$.
C. $y = \sin x$.
D. $y = -\sin x$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: B</b><br>
Vì $(-\cos x)' = -(-\sin x) = \sin x$ nên $-\cos x$ là một nguyên hàm của $\sin x$.
</blockquote>
</details>

---

**Câu 5:** Họ nguyên hàm của hàm số $f(x) = 3^x$ là:
A. $3^x \ln 3 + C$.
B. $\frac{3^x}{\ln 3} + C$.
C. $3^{x+1} + C$.
D. $\frac{3^{x+1}}{x+1} + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: B</b><br>
Áp dụng công thức cơ bản: $\int a^x dx = \frac{a^x}{\ln a} + C$ (với $0 < a \neq 1$).
</blockquote>
</details>

---

**Câu 6:** Tìm nguyên hàm của hàm số $f(x) = \frac{1}{x}$ trên khoảng $(0; +\infty)$.
A. $\ln x + C$.
B. $-\frac{1}{x^2} + C$.
C. $\ln |x| + C$.
D. $\ln(-x) + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: A</b><br>
Trên khoảng $(0; +\infty)$, ta có $x > 0$ nên $|x| = x$. Vậy $\int \frac{1}{x} dx = \ln x + C$. (Đáp án C cũng đúng tổng quát, nhưng A chính xác và gọn nhất cho khoảng đã cho).
</blockquote>
</details>

---

**Câu 7:** Cho $\int f(x) dx = F(x) + C$. Khẳng định nào sau đây đúng?
A. $\int 2f(x) dx = 2F(x) + C$.
B. $\int 2f(x) dx = F(x) + C$.
C. $\int 2f(x) dx = F(2x) + C$.
D. $\int 2f(x) dx = \frac{1}{2}F(x) + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: A</b><br>
Tính chất cơ bản: $\int k f(x) dx = k \int f(x) dx = kF(x) + C$.
</blockquote>
</details>

---

**Câu 8:** Biết một nguyên hàm của hàm số $f(x) = 2x$ là $F(x)$ thoả mãn $F(1) = 3$. Khi đó $F(x)$ là:
A. $x^2 + 3$.
B. $x^2 + 2$.
C. $2x^2 + 1$.
D. $x^2 - 1$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: B</b><br>
Ta có $\int 2x dx = x^2 + C$.<br>
Theo đề: $F(1) = 3 \Rightarrow 1^2 + C = 3 \Rightarrow C = 2$.<br>
Vậy $F(x) = x^2 + 2$.
</blockquote>
</details>

---

**Câu 9:** Họ nguyên hàm của hàm số $f(x) = x^2 - 3x + \frac{1}{x^2}$ là:
A. $\frac{x^3}{3} - \frac{3x^2}{2} - \frac{1}{x} + C$.
B. $\frac{x^3}{3} - \frac{3x^2}{2} + \frac{1}{x} + C$.
C. $2x - 3 - \frac{2}{x^3} + C$.
D. $\frac{x^3}{3} - \frac{3x^2}{2} + \ln|x| + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: A</b><br>
$\int (x^2 - 3x + x^{-2}) dx = \frac{x^3}{3} - 3\frac{x^2}{2} + \frac{x^{-1}}{-1} + C = \frac{x^3}{3} - \frac{3x^2}{2} - \frac{1}{x} + C$.
</blockquote>
</details>

---

**Câu 10:** Hàm số $F(x) = 5x^3 + 4x^2 - 7$ là một nguyên hàm của hàm số nào sau đây?
A. $f(x) = \frac{5}{4}x^4 + \frac{4}{3}x^3 - 7x$.
B. $f(x) = 15x^2 + 8x$.
C. $f(x) = 15x^2 + 8x - 7$.
D. $f(x) = 5x^2 + 4x$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: B</b><br>
Lấy đạo hàm của $F(x)$: $F'(x) = (5x^3)' + (4x^2)' - (7)' = 15x^2 + 8x$.
</blockquote>
</details>

---

**Câu 11:** Trong các khẳng định sau, khẳng định nào **sai**?
A. $\int 0 dx = C$.
B. $\int dx = x + C$.
C. $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ với mọi $n \in \mathbb{R}$.
D. $\int k dx = kx + C$ ($k$ là hằng số).

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: C</b><br>
Công thức $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ chỉ đúng khi $n \neq -1$. Khi $n = -1$, nguyên hàm là $\ln|x|$.
</blockquote>
</details>

---

**Câu 12:** Tìm họ nguyên hàm của hàm số $f(x) = \frac{1}{\cos^2 x}$.
A. $\tan x + C$.
B. $-\tan x + C$.
C. $\cot x + C$.
D. $-\cot x + C$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: A</b><br>
Đây là công thức cơ bản: Đạo hàm của $\tan x$ là $\frac{1}{\cos^2 x}$.
</blockquote>
</details>

---

## Phần 2: Trắc nghiệm Đúng/Sai (4 câu)

**Câu 13:** Cho hàm số $f(x) = 4x^3 - 2x + 1$. Xét tính đúng sai của các khẳng định sau:

* **a)** Hàm số $F(x) = x^4 - x^2 + x$ là một nguyên hàm của $f(x)$.
* **b)** Hàm số $G(x) = x^4 - x^2 + x + 2024$ cũng là một nguyên hàm của $f(x)$.
* **c)** Mọi nguyên hàm của $f(x)$ đều có dạng $x^4 - x^2 + x + C$.
* **d)** Tồn tại một nguyên hàm $H(x)$ của $f(x)$ sao cho $H(1) = 5$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>a) Đúng.</b> Vì $(x^4 - x^2 + x)' = 4x^3 - 2x + 1 = f(x)$.<br>
<b>b) Đúng.</b> Hai nguyên hàm chỉ khác nhau hằng số $C$.<br>
<b>c) Đúng.</b> Đây là định lý về họ nguyên hàm.<br>
<b>d) Sai.</b> Xét $H(x) = x^4 - x^2 + x + C$. $H(1) = 1 - 1 + 1 + C = 1 + C$. Để $H(1)=5 \Rightarrow C=4$. Vậy tồn tại $H(x)$ thoả mãn. (Xin lỗi, đáp án là <b>Đúng</b>, câu hỏi "tồn tại" là đúng. Bạn hãy check lại đề bài, nếu đề nói "mọi nguyên hàm đều thoả H(1)=5" mới là sai. Ở đây tồn tại C=4 là được). <br>
<i>Đính chính đáp án ý d:</i> <b>Đúng</b>.
</blockquote>
</details>

---

**Câu 14 (Ứng dụng Vật lí):** Một vật chuyển động với vận tốc $v(t) = 6t - 4$ (m/s), với $t$ là thời gian tính bằng giây. Gọi $s(t)$ là quãng đường vật đi được.

* **a)** Gia tốc của vật là $a(t) = 6$ (m/s²).
* **b)** Quãng đường $s(t)$ là nguyên hàm của vận tốc $v(t)$.
* **c)** Công thức quãng đường là $s(t) = 3t^2 - 4t$.
* **d)** Nếu tại thời điểm $t=0$, vật đang ở vị trí $s(0) = 10m$, thì tại $t=2s$, vật ở vị trí $s(2) = 14m$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>a) Đúng.</b> $a(t) = v'(t) = (6t-4)' = 6$.<br>
<b>b) Đúng.</b> Đạo hàm quãng đường là vận tốc, nên quãng đường là nguyên hàm vận tốc.<br>
<b>c) Sai.</b> Thiếu hằng số $C$. Công thức đúng: $s(t) = 3t^2 - 4t + C$.<br>
<b>d) Đúng.</b> $s(t) = 3t^2 - 4t + C$. $s(0)=10 \Rightarrow C=10$. Vậy $s(t) = 3t^2 - 4t + 10$. Tại $t=2: s(2) = 3(4) - 4(2) + 10 = 12 - 8 + 10 = 14m$.
</blockquote>
</details>

---

**Câu 15:** Cho hai hàm số $f(x) = e^x$ và $g(x) = x^2$.

* **a)** $\int [f(x) + g(x)] dx = e^x + \frac{x^3}{3} + C$.
* **b)** $\int f(x).g(x) dx = \left( \int f(x) dx \right) . \left( \int g(x) dx \right)$.
* **c)** Một nguyên hàm của hàm số $h(x) = 2f(x)$ là $2e^x$.
* **d)** $\int \frac{g(x)}{x} dx = \frac{x^2}{2} + C$ (với $x \neq 0$).

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>a) Đúng.</b> Tính chất tổng nguyên hàm.<br>
<b>b) Sai.</b> Nguyên hàm của tích không bằng tích các nguyên hàm.<br>
<b>c) Đúng.</b> $\int 2e^x dx = 2e^x + C$. $2e^x$ là một nguyên hàm (ứng với $C=0$).<br>
<b>d) Đúng.</b> $\int \frac{x^2}{x} dx = \int x dx = \frac{x^2}{2} + C$.
</blockquote>
</details>

---

**Câu 16:** Xét hàm số $f(x) = \frac{1}{\sin^2 x}$.

* **a)** Hàm số xác định với mọi $x \in \mathbb{R}$.
* **b)** Nguyên hàm của $f(x)$ là $-\cot x + C$.
* **c)** Đạo hàm của hàm số $y = \cot x$ bằng $f(x)$.
* **d)** Giá trị của nguyên hàm $F(x) = -\cot x + 2$ tại $x = \frac{\pi}{4}$ là 1.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>a) Sai.</b> Hàm số không xác định tại $x = k\pi$.<br>
<b>b) Đúng.</b> Công thức cơ bản.<br>
<b>c) Sai.</b> $(\cot x)' = -\frac{1}{\sin^2 x} = -f(x)$. Đạo hàm phải bằng $-f(x)$ mới đúng.<br>
<b>d) Đúng.</b> $F(\frac{\pi}{4}) = -\cot(\frac{\pi}{4}) + 2 = -1 + 2 = 1$.
</blockquote>
</details>

---

## Phần 3: Trắc nghiệm trả lời ngắn (6 câu)

**Câu 17:** Tìm nguyên hàm $F(x)$ của hàm số $f(x) = 4x^3 + 1$, biết đồ thị hàm số $y = F(x)$ đi qua điểm $M(1; 5)$.
(Nhập kết quả cuối cùng của hằng số $C$)

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: 3</b><br>
Giải thích: $F(x) = \int (4x^3 + 1) dx = x^4 + x + C$.<br>
Vì đi qua $M(1; 5)$ nên $F(1) = 5 \Leftrightarrow 1^4 + 1 + C = 5 \Leftrightarrow 2 + C = 5 \Leftrightarrow C = 3$.<br>
Vậy $F(x) = x^4 + x + 3$.
</blockquote>
</details>

---

**Câu 18 (Ứng dụng Kinh tế):** Một doanh nghiệp xác định chi phí cận biên (Marginal Cost) tại mức sản lượng $x$ là $MC(x) = 6x + 50$ (đơn vị: USD/sản phẩm). Tìm hàm chi phí $C(x)$, biết chi phí cố định (khi không sản xuất sản phẩm nào) là $1000$ USD. Tính chi phí để sản xuất 10 sản phẩm.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: 1800</b><br>
Giải thích:<br>
Hàm chi phí $C(x)$ là nguyên hàm của chi phí cận biên $MC(x)$.<br>
$C(x) = \int (6x + 50) dx = 3x^2 + 50x + K$.<br>
Chi phí cố định là $C(0) = 1000 \Rightarrow 3(0)^2 + 50(0) + K = 1000 \Rightarrow K = 1000$.<br>
Vậy hàm chi phí là $C(x) = 3x^2 + 50x + 1000$.<br>
Tại $x = 10$: $C(10) = 3(100) + 50(10) + 1000 = 300 + 500 + 1000 = 1800$.
</blockquote>
</details>

---

**Câu 19 (Ứng dụng Sinh học):** Tốc độ tăng trưởng của một quần thể vi khuẩn tại thời điểm $t$ (phút) được cho bởi công thức $N'(t) = 100e^t$. Biết ban đầu ($t=0$) số lượng vi khuẩn là 200 con. Hỏi sau bao nhiêu phút thì số lượng vi khuẩn đạt 1300 con? (Làm tròn đến hàng đơn vị).

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: 2</b> (hoặc 2.4)<br>
Giải thích:<br>
$N(t) = \int 100e^t dt = 100e^t + C$.<br>
Tại $t=0, N(0) = 200 \Rightarrow 100e^0 + C = 200 \Rightarrow 100 + C = 200 \Rightarrow C = 100$.<br>
Vậy $N(t) = 100e^t + 100$.<br>
Để $N(t) = 1300 \Leftrightarrow 100e^t + 100 = 1300 \Leftrightarrow 100e^t = 1200 \Leftrightarrow e^t = 12 \Leftrightarrow t = \ln 12 \approx 2.48$.
</blockquote>
</details>

---

**Câu 20:** Cho hàm số $f(x)$ thoả mãn $f'(x) = 3 - 5\sin x$ và $f(0) = 10$. Tính giá trị của $f(\pi)$.

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: 9.42</b> (hoặc $3\pi$)<br>
Giải thích:<br>
$f(x) = \int (3 - 5\sin x) dx = 3x - 5(-\cos x) + C = 3x + 5\cos x + C$.<br>
$f(0) = 10 \Rightarrow 3(0) + 5\cos 0 + C = 10 \Rightarrow 5 + C = 10 \Rightarrow C = 5$.<br>
Vậy $f(x) = 3x + 5\cos x + 5$.<br>
$f(\pi) = 3\pi + 5\cos \pi + 5 = 3\pi + 5(-1) + 5 = 3\pi \approx 9.42$.
</blockquote>
</details>

---

**Câu 21 (Vận dụng):** Một viên đạn được bắn thẳng đứng lên cao từ mặt đất với vận tốc ban đầu $v_0 = 98 m/s$. Bỏ qua sức cản không khí, gia tốc trọng trường là $g = -9.8 m/s^2$. Hỏi sau bao nhiêu giây viên đạn đạt độ cao cực đại?

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: 10</b><br>
Giải thích:<br>
Gia tốc $a(t) = -9.8$.<br>
Vận tốc $v(t) = \int -9.8 dt = -9.8t + C$.<br>
Tại $t=0, v(0) = 98 \Rightarrow C = 98$. Vậy $v(t) = -9.8t + 98$.<br>
Viên đạn đạt độ cao cực đại khi vận tốc bằng 0.<br>
$v(t) = 0 \Leftrightarrow -9.8t + 98 = 0 \Leftrightarrow t = 10$ (giây).
</blockquote>
</details>

---

**Câu 22:** Biết $F(x)$ là nguyên hàm của $f(x) = \frac{1}{x-1}$ trên khoảng $(1; +\infty)$ và $F(2) = 1$. Giá trị của $F(e+1)$ bằng bao nhiêu?

<details>
<summary><b>Xem đáp án</b></summary>
<blockquote>
<b>Đáp án: 2</b><br>
Giải thích:<br>
Trên $(1; +\infty)$, $\int \frac{1}{x-1} dx = \ln|x-1| + C = \ln(x-1) + C$ (do $x>1$).<br>
$F(2) = 1 \Rightarrow \ln(2-1) + C = 1 \Rightarrow \ln 1 + C = 1 \Rightarrow 0 + C = 1 \Rightarrow C = 1$.<br>
Vậy $F(x) = \ln(x-1) + 1$.<br>
$F(e+1) = \ln(e+1-1) + 1 = \ln e + 1 = 1 + 1 = 2$.
</blockquote>
</details>
