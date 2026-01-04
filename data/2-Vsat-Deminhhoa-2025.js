window.EXAM_DATA = {
    "title": "Đề Minh Họa V-Sat, Đại Học Cần Thơ, Năm 2025",
    "time": 45,
    "password": "858eabb9c6c80b4947777108ced59f12",
    "encrypted": false,
    "start": "2026-01-04T20:53",
    "end": "2026-01-05T21:51",
    "price": 0,
    "bank": {
        "id": "",
        "acc": ""
    },
    "scores": {
        "mcq": 0.25,
        "tf": 1,
        "short": 0.5,
        "match": 1
    },
    "questions": [
        {
            "type": "tf",
            "q": "Cho dãy số $(u_n)$ biết $u_n=2n+3, \\forall n \\in \\mathbb{N}^*$.",
            "items": [
                {
                    "sub": "Dãy số $(u_n)$ là cấp số cộng",
                    "ans": "T"
                },
                {
                    "sub": "Dãy số $(u_n)$ là dãy tăng",
                    "ans": "T"
                },
                {
                    "sub": "Dãy số $(u_n)$ bị chặn dưới",
                    "ans": "T"
                },
                {
                    "sub": "Dãy số $(u_n)$ bị chặn trên",
                    "ans": "F"
                }
            ],
            "explain": "Ta có $u_{n+1}-u_n = [2(n+1)+3] - (2n+3) = 2$ là hằng số.<br><ul><li>Dãy số là cấp số cộng với công sai $d=2$.</li><li>Vì $d=2>0$ nên dãy số là dãy tăng.</li><li>Với mọi $n \\in \\mathbb{N}^*$, ta có $n \\ge 1 \\Rightarrow u_n = 2n+3 \\ge 5$. Dãy số bị chặn dưới bởi $5$.</li><li>Vì $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$ nên dãy số không bị chặn trên.</li></ul>"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $y=\\dfrac{2x-1}{x+1}$ có đồ thị là $(C)$.",
            "items": [
                {
                    "sub": "Đường thẳng $x=1$ là tiệm cận đứng của $(C)$",
                    "ans": "F"
                },
                {
                    "sub": "Đường thẳng $y=2$ là tiệm cận ngang của $(C)$",
                    "ans": "T"
                },
                {
                    "sub": "$(C)$ chứa ít nhất một điểm có tung độ bằng $-1$",
                    "ans": "T"
                },
                {
                    "sub": "$(C)$ không chứa điểm nào có tung độ bằng $0$",
                    "ans": "F"
                }
            ],
            "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br><ul><li>Tiệm cận đứng của đồ thị hàm số là đường thẳng $x=-1$.</li><li>Vì $\\lim\\limits_{x \\to \\pm\\infty} y = 2$ nên tiệm cận ngang là đường thẳng $y=2$.</li><li>Xét phương trình $\\dfrac{2x-1}{x+1} = -1 \\Rightarrow 2x-1 = -x-1 \\Leftrightarrow 3x=0 \\Leftrightarrow x=0$ (thỏa mãn). Vậy $(C)$ chứa điểm $(0;-1)$.</li><li>Xét phương trình $\\dfrac{2x-1}{x+1} = 0 \\Rightarrow 2x-1=0 \\Leftrightarrow x=\\dfrac{1}{2}$ (thỏa mãn). Vậy $(C)$ chứa điểm $\\left(\\dfrac{1}{2};0\\right)$.</li></ul>"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$ cho đường thẳng $(d):\\left\\{\\begin{aligned}x&=1-2t\\\\y&=3+t\\\\z&=2\\end{aligned}\\right.$.",
            "items": [
                {
                    "sub": "Một vec-tơ chỉ phương của đường thẳng $(d)$ là $\\overrightarrow{u}(-2;1;2)$",
                    "ans": "F"
                },
                {
                    "sub": "Điểm $M(1;3;2)$ nằm trên đường thẳng $(d)$",
                    "ans": "T"
                },
                {
                    "sub": "Đường thẳng $(d)$ vuông góc với trục $Oz$",
                    "ans": "T"
                },
                {
                    "sub": "Gọi $\\alpha$ là góc giữa đường thẳng $(d)$ và trục $Oy$, khi đó ta có $\\cos \\alpha = \\dfrac{1}{\\sqrt{5}}$",
                    "ans": "T"
                }
            ],
            "explain": "Đường thẳng $(d)$ đi qua điểm $M_0(1;3;2)$ và có một vec-tơ chỉ phương $\\overrightarrow{u_d}=(-2;1;0)$.<br><ul><li>Vec-tơ chỉ phương là $(-2;1;0)$, khác với $(-2;1;2)$.</li><li>Ứng với $t=0$, ta có điểm $(1;3;2) \\in (d)$.</li><li>Trục $Oz$ có vec-tơ đơn vị $\\overrightarrow{k}=(0;0;1)$. Ta có $\\overrightarrow{u_d} \\cdot \\overrightarrow{k} = -2\\cdot0 + 1\\cdot0 + 0\\cdot1 = 0 \\Rightarrow (d) \\perp Oz$.</li><li>Trục $Oy$ có vec-tơ đơn vị $\\overrightarrow{j}=(0;1;0)$.<br>$\\cos \\alpha = \\dfrac{|\\overrightarrow{u_d} \\cdot \\overrightarrow{j}|}{|\\overrightarrow{u_d}| \\cdot |\\overrightarrow{j}|} = \\dfrac{|-2\\cdot0 + 1\\cdot1 + 0\\cdot0|}{\\sqrt{(-2)^2+1^2+0^2} \\cdot 1} = \\dfrac{1}{\\sqrt{5}}$.</li></ul>"
        },
        {
            "type": "tf",
            "q": "Bảng sau đây tóm tắt kết quả phân tích quá trình tự phân hủy (sự phá hủy tế bào sau khi tế bào chết do hoạt động của các enzym của chính tế bào) và sự thối rữa (sự phân hủy chất hữu cơ, đặc biệt là protein, bởi vi sinh vật dẫn đến tạo ra mùi hôi thối) của các con bọ cánh cứng chết:<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767534543638_753.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"><br>Chọn ngẫu nhiên một con bọ cánh cứng trong các mẫu phân tích trên.",
            "items": [
                {
                    "sub": "Xác suất để mẫu chọn ra có quá trình tự phân hủy cao là $\\dfrac{7}{50}$",
                    "ans": "F"
                },
                {
                    "sub": "Xác suất để mẫu chọn ra có quá trình tự phân hủy cao và độ thối rữa thấp là $\\dfrac{9}{50}$",
                    "ans": "T"
                },
                {
                    "sub": "Nếu quá trình tự phân hủy của một mẫu chọn ra là cao thì xác suất để thối rữa thấp là $\\dfrac{9}{16}$",
                    "ans": "T"
                },
                {
                    "sub": "Nếu độ thối rữa một mẫu chọn ra là cao thì xác suất để quá trình tự phân hủy cao bằng $\\dfrac{14}{73}$",
                    "ans": "T"
                }
            ],
            "explain": "Tổng số mẫu phân tích là $n(\\Omega) = 14 + 59 + 18 + 9 = 100$.<br>Gọi $A$ là biến cố \"Mẫu có quá trình tự phân hủy cao\". Ta có $n(A) = 14 + 18 = 32$.<br>Gọi $B$ là biến cố \"Mẫu có độ thối rữa cao\". Ta có $n(B) = 14 + 59 = 73$.<br>Suy ra biến cố mẫu có độ thối rữa thấp là $\\overline{B}$ và $n(\\overline{B}) = 18 + 9 = 27$.<br><ul><li>Xác suất để mẫu chọn ra có quá trình tự phân hủy cao là $\\mathrm{P}(A) = \\dfrac{32}{100} = \\dfrac{8}{25} \\ne \\dfrac{7}{50}$.</li><li>Biến cố \"Tự phân hủy cao và độ thối rữa thấp\" là $A \\cap \\overline{B}$. Ta có $n(A \\cap \\overline{B}) = 18$.<br>Xác suất cần tìm là $\\dfrac{18}{100} = \\dfrac{9}{50}$.</li><li>Xác suất để thối rữa thấp biết rằng tự phân hủy cao là xác suất có điều kiện:<br>$$\\mathrm{P}(\\overline{B}|A) = \\dfrac{n(A \\cap \\overline{B})}{n(A)} = \\dfrac{18}{32} = \\dfrac{9}{16}.$$</li><li>Xác suất để tự phân hủy cao biết rằng thối rữa cao là:<br>$$\\mathrm{P}(A|B) = \\dfrac{n(A \\cap B)}{n(B)} = \\dfrac{14}{73}.$$</li></ul>"
        },
        {
            "type": "tf",
            "q": "Cho các mệnh đề sau.",
            "items": [
                {
                    "sub": "$\\displaystyle\\int 2x \\mathrm{\\,d}x = x^2 + C$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\cos x \\mathrm{\\,d}x = \\sin x + C$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int x\\sqrt{x} \\mathrm{\\,d}x = \\dfrac{2x^2\\sqrt{x}}{5} + C$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\cot^2 x \\mathrm{\\,d}x = \\cot x - x + C$",
                    "ans": "F"
                }
            ],
            "explain": "<ul><li>Ta có $(x^2+C)' = 2x$ nên $\\displaystyle\\int 2x \\mathrm{\\,d}x = x^2 + C$.</li><li>Ta có $(\\sin x + C)' = \\cos x$ nên $\\displaystyle\\int \\cos x \\mathrm{\\,d}x = \\sin x + C$.</li><li>Ta có $\\displaystyle\\int x\\sqrt{x} \\mathrm{\\,d}x = \\displaystyle\\int x^{\\frac{3}{2}} \\mathrm{\\,d}x = \\dfrac{x^{\\frac{3}{2}+1}}{\\frac{3}{2}+1} + C = \\dfrac{2}{5}x^{\\frac{5}{2}} + C = \\dfrac{2x^2\\sqrt{x}}{5} + C$.</li><li>Ta có $\\displaystyle\\int \\cot^2 x \\mathrm{\\,d}x = \\displaystyle\\int \\left(\\dfrac{1}{\\sin^2 x} - 1\\right) \\mathrm{\\,d}x = -\\cot x - x + C$. Mệnh đề sai vì thiếu dấu trừ.</li></ul>"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$ cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 10y - 2z + 14 = 0$ và hai điểm $A(3;-4;4)$, $B(5;-2;4)$.",
            "items": [
                {
                    "sub": "Mặt cầu $(S)$ có tâm là điểm $I(2;-5;1)$ và bán kính $R=4$",
                    "ans": "T"
                },
                {
                    "sub": "Điểm $A$ nằm ngoài mặt cầu $(S)$",
                    "ans": "F"
                },
                {
                    "sub": "Phương trình mặt cầu tâm $A$ và đi qua điểm $B$ là $(x-3)^2 + (y+4)^2 + (z-4)^2 = 4$",
                    "ans": "F"
                },
                {
                    "sub": "Phương trình mặt cầu đường kính $AB$ là $(x-4)^2 + (y+3)^2 + (z-4)^2 = 2$",
                    "ans": "T"
                }
            ],
            "explain": "Phương trình mặt cầu $(S)$ xác định $a=2, b=-5, c=1, d=14$.<br><ul><li>Tâm $I(2;-5;1)$. Bán kính $R = \\sqrt{2^2 + (-5)^2 + 1^2 - 14} = \\sqrt{16} = 4$.</li><li>Ta có $\\overrightarrow{IA} = (1;1;3) \\Rightarrow IA = \\sqrt{1^2+1^2+3^2} = \\sqrt{11}$.<br>Vì $IA = \\sqrt{11} < R=4$ nên điểm $A$ nằm trong mặt cầu $(S)$.</li><li>Mặt cầu tâm $A(3;-4;4)$ đi qua $B$ có bán kính $r = AB = \\sqrt{(5-3)^2 + (-2-(-4))^2 + (4-4)^2} = \\sqrt{2^2+2^2} = \\sqrt{8}$.<br>Phương trình là $(x-3)^2 + (y+4)^2 + (z-4)^2 = 8$. Mệnh đề sai vì vế phải bằng $4$.</li><li>Gọi $K$ là trung điểm $AB$, suy ra $K(4;-3;4)$.<br>Bán kính mặt cầu đường kính $AB$ là $R' = \\dfrac{AB}{2} = \\dfrac{\\sqrt{8}}{2} = \\sqrt{2}$.<br>Phương trình mặt cầu đường kính $AB$ là $(x-4)^2 + (y+3)^2 + (z-4)^2 = (\\sqrt{2})^2 = 2$.</li></ul>"
        },
        {
            "type": "mcq",
            "q": "Một vật di chuyển trên một đường thẳng. Tại thời điểm $t$ giây sau khi bắt đầu di chuyển từ điểm $O$ trên đường thẳng, vật có gia tốc $a(t) = -0{,}8t + 4 \\ (\\text{m/s}^2)$. Tìm gia tốc cực đại, đơn vị $\\text{m/s}^2$, của vật trong khoảng thời gian từ $1$ tới $3$ giây.",
            "options": [
                "$3{,}2$",
                "$2{,}6$",
                "$4{,}8$",
                "$6{,}4$"
            ],
            "ans": 0,
            "explain": "Hàm số $a(t) = -0{,}8t + 4$ là hàm bậc nhất có hệ số góc âm nên nghịch biến trên $\\mathbb{R}$.<br>Trong khoảng $[1; 3]$, gia tốc lớn nhất tại $t=1$.<br>$a_{\\max} = a(1) = -0{,}8(1) + 4 = 3{,}2 \\ (\\text{m/s}^2)$."
        },
        {
            "type": "mcq",
            "q": "Một vật di chuyển trên một đường thẳng. Tại thời điểm $t$ giây sau khi bắt đầu di chuyển từ điểm $O$ trên đường thẳng, vật có gia tốc $a(t) = -0{,}8t + 4 \\ (\\text{m/s}^2)$. Tốc độ của vật giảm trong khoảng thời gian nào dưới đây?",
            "options": [
                "$[5; 6]$",
                "$[2; 4]$",
                "$[4; 5]$",
                "$[1; 3]$"
            ],
            "ans": 0,
            "explain": "Vận tốc của vật là nguyên hàm của gia tốc. Với $v(0)=0$ (bắt đầu di chuyển từ $O$), ta có:<br>$v(t) = \\displaystyle\\int (-0{,}8t + 4) \\mathrm{\\,d}t = -0{,}4t^2 + 4t$.<br>Vật chuyển động theo chiều dương ($v > 0$) khi $-0{,}4t^2 + 4t > 0 \\Leftrightarrow 0 < t < 10$.<br>Tốc độ của vật giảm khi vật chuyển động chậm dần, tức là $a(t) \\cdot v(t) < 0$.<br>Trong khoảng thời gian $t \\in (0; 10)$, $v(t) > 0$, nên ta cần $a(t) < 0$.<br>$-0{,}8t + 4 < 0 \\Leftrightarrow t > 5$.<br>Vậy trong khoảng $(5; 10)$, tốc độ của vật giảm. Khoảng $[5; 6]$ thỏa mãn."
        },
        {
            "type": "mcq",
            "q": "Một vật di chuyển trên một đường thẳng. Tại thời điểm $t$ giây sau khi bắt đầu di chuyển từ điểm $O$ trên đường thẳng, vật có gia tốc $a(t) = -0{,}8t + 4 \\ (\\text{m/s}^2)$. Tính độ dài quãng đường, đơn vị $m$, mà vật di chuyển được trong khoảng thời gian từ $5$ giây tới $11$ giây (làm tròn kết quả đến hàng phần chục).",
            "options": [
                "$35{,}5$",
                "$31{,}2$",
                "$33{,}3$",
                "$37{,}4$"
            ],
            "ans": 0,
            "explain": "Vận tốc $v(t) = -0{,}4t^2 + 4t$.<br>Ta thấy $v(t) = 0$ khi $t=0$ hoặc $t=10$.<br>Trong khoảng $[5; 10]$, vật đi theo chiều dương ($v \\ge 0$).<br>Trong khoảng $[10; 11]$, vật đi theo chiều âm ($v \\le 0$).<br>Quãng đường đi được là:<br>$S = \\displaystyle\\int\\limits_{5}^{11} |v(t)| \\mathrm{\\,d}t = \\displaystyle\\int\\limits_{5}^{10} (-0{,}4t^2 + 4t) \\mathrm{\\,d}t + \\displaystyle\\int\\limits_{10}^{11} -(-0{,}4t^2 + 4t) \\mathrm{\\,d}t$.<br>Tính tích phân:<br>$\\displaystyle\\int\\limits_{5}^{10} (-0{,}4t^2 + 4t) \\mathrm{\\,d}t = \\left.\\left(-\\dfrac{0{,}4t^3}{3} + 2t^2\\right)\\right|_5^{10} = \\dfrac{200}{3} - \\dfrac{100}{3} = \\dfrac{100}{3}$.<br>$\\displaystyle\\int\\limits_{10}^{11} (0{,}4t^2 - 4t) \\mathrm{\\,d}t = \\left.\\left(\\dfrac{0{,}4t^3}{3} - 2t^2\\right)\\right|_{10}^{11} \\approx 2{,}133$.<br>Tổng quãng đường $S \\approx 33{,}333 + 2{,}133 = 35{,}466$.<br>Làm tròn đến hàng phần chục là $35{,}5$."
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767534566459_19.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"><br>Tính tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên (làm tròn kết quả đến hàng phần chục; đơn vị: phút).",
            "options": [
                "$11{,}4$",
                "$11{,}3$",
                "$11{,}2$",
                "$11{,}1$"
            ],
            "ans": 0,
            "explain": "Tổng số học sinh là $n = 3 + 11 + 6 + 15 + 5 = 40$.<br>Vị trí của tứ phân vị thứ nhất là $\\dfrac{n}{4} = \\dfrac{40}{4} = 10$.<br>Tần số tích lũy của nhóm $[0; 5)$ là $3 < 10$.<br>Tần số tích lũy của nhóm $[5; 15)$ là $3 + 11 = 14 > 10$.<br>Do đó, tứ phân vị thứ nhất thuộc nhóm $[5; 15)$.<br>Ta có: $u_m = 5$; $u_{m+1} = 15$; $n_m = 11$; $C_{m-1} = 3$.<br>Độ dài nhóm là $L = 15 - 5 = 10$.<br>Tứ phân vị thứ nhất là:<br>$$Q_1 = u_m + \\dfrac{\\frac{n}{4} - C_{m-1}}{n_m} \\cdot L = 5 + \\dfrac{10 - 3}{11} \\cdot 10 = 5 + \\dfrac{70}{11} \\approx 11{,}36.$$<br>Làm tròn đến hàng phần chục ta được $11{,}4$."
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767534574776_421.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"><br>Chọn ngẫu nhiên một bạn học sinh trong nhóm trên. Tính xác suất để thời gian trung bình bạn đó sử dụng Chat GPT lớn hơn hoặc bằng $25$ phút một ngày (làm tròn kết quả đến hàng phần trăm).",
            "options": [
                "$0{,}50$",
                "$0{,}38$",
                "$0{,}37$",
                "$0{,}51$"
            ],
            "ans": 0,
            "explain": "Tổng số học sinh là $n = 40$.<br>Số học sinh sử dụng ChatGPT từ 25 phút trở lên thuộc các nhóm $[25; 30)$ và $[30; 35)$.<br>Số lượng học sinh thỏa mãn là: $15 + 5 = 20$ (học sinh).<br>Xác suất cần tìm là: $P = \\dfrac{20}{40} = 0{,}5$."
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767534584659_329.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"><br>Do sai sót trong quá trình nhập và xử lý số liệu, tất cả các mốc thời gian trong bảng trên đã bị ghi lùi 5 phút so với thực tế và người ta điều chỉnh lại bảng số liệu ban đầu cho đúng. Gọi $s_1$, $s_2$ lần lượt là độ lệch chuẩn của mẫu số liệu ghép nhóm trước và sau khi chỉnh sửa. Chọn khẳng định đúng nhất.",
            "options": [
                "$s_1 = s_2$",
                "$s_1 > s_2$",
                "$s_1 < s_2$",
                "$s_1 = s_2 - 5$"
            ],
            "ans": 0,
            "explain": "Khi cộng thêm một hằng số $c$ (ở đây $c=5$) vào tất cả các giá trị của mẫu số liệu thì:<ul><li>Số trung bình cộng tăng thêm $c$.</li><li>Phương sai và độ lệch chuẩn không thay đổi.</li></ul>Do đó độ lệch chuẩn trước và sau khi chỉnh sửa là bằng nhau, tức là $s_1 = s_2$."
        },
        {
            "type": "match",
            "q": "Cho hàm số $y = f(x)$, với $f(x)$ là đa thức bậc bốn, có đồ thị hàm số $y = f'(x)$ như hình vẽ:<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767534597022_446.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"><br>Đặt $g(x)=f(-x^2+3x-m)$.",
            "items": [
                "Khi $m=1$, số điểm cực trị của hàm số $g(x)$ là",
                "Số giá trị nguyên của tham số $m$ để hàm số $g(x)$ có đúng $3$ điểm cực trị là",
                "Số giá trị nguyên của tham số $m$ để hàm số $g(x)$ có đúng $5$ điểm cực trị là",
                "Số giá trị nguyên của tham số $m$ để hàm số $g(x)$ có đúng $7$ điểm cực trị thuộc $(-2;5)$ là"
            ],
            "options": [
                "$2$",
                "$3$",
                "$5$",
                "$7$",
                "$12$",
                "$13$"
            ],
            "ans": [
                "C",
                "A",
                "B",
                ""
            ],
            "explain": "Ta có $g'(x) = (-2x+3)f'(-x^2+3x-m)$.<br>$$g'(x)=0 \\Leftrightarrow \\left[\\begin{aligned}& -2x+3=0 \\Rightarrow x=\\dfrac{3}{2} \\\\ & f'(-x^2+3x-m)=0.\\end{aligned}\\right.$$<br>Dựa vào đồ thị $f'(x)$, ta có $f'(u)=0 \\Leftrightarrow u \\in \\{-1; 1; 4\\}$.<br>Khi đó $g'(x)=0 \\Leftrightarrow \\left[\\begin{aligned}& x=1{,}5 \\\\ & -x^2+3x-m = -1 & (1) \\\\ & -x^2+3x-m = 1 & (2) \\\\ & -x^2+3x-m = 4. & (3)\\end{aligned}\\right.$<br>Xét parabol $h(x) = -x^2+3x-m$. Đỉnh tại $x=1{,}5$, giá trị lớn nhất $h(1{,}5) = \\dfrac{9}{4}-m$.<br><ul><li>Với $m=1$, ta có $h(1{,}5) = 1{,}25$.<br>PT (1) trở thành $-x^2+3x = 0 \\Rightarrow 2$ nghiệm.<br>PT (2) trở thành $-x^2+3x-2 = 0 \\Rightarrow 2$ nghiệm.<br>PT (3) trở thành $-x^2+3x-5 = 0$ (vô nghiệm vì đỉnh $1{,}25 < 4$).<br>Tổng số nghiệm bội lẻ là $1 + 2 + 2 = 5$. Vậy có 5 điểm cực trị.</li><li>Để có đúng 3 cực trị: Cần 1 nghiệm $x=1{,}5$ và 2 nghiệm từ các PT trên.<br>Điều kiện: $-1 < \\max h(x) \\le 1 \\Leftrightarrow -1 < \\dfrac{9}{4}-m \\le 1 \\Leftrightarrow \\dfrac{5}{4} \\le m < \\dfrac{13}{4}$.<br>Do $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{2; 3\\}$. Có 2 giá trị.</li><li>Để có đúng 5 cực trị: Điều kiện $1 < \\max h(x) \\le 4 \\Leftrightarrow 1 < \\dfrac{9}{4}-m \\le 4 \\Leftrightarrow -\\dfrac{7}{4} \\le m < \\dfrac{5}{4}$.<br>Do $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{-1; 0; 1\\}$. Có 3 giá trị.</li><li>Để có đúng 7 cực trị: Điều kiện $\\max h(x) > 4 \\Leftrightarrow \\dfrac{9}{4}-m > 4 \\Leftrightarrow m < -\\dfrac{7}{4} = -1{,}75$.<br>Trong khoảng $(-2; 5)$, không có số nguyên nào nhỏ hơn $-1{,}75$.</li></ul>"
        },
        {
            "type": "match",
            "q": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $AB=a$, $AD=\\sqrt{3}a$. Biết $SA$ vuông góc với mặt phẳng đáy và $SA=2\\sqrt{3}a$.",
            "items": [
                "Tang của góc giữa $CD$ và $SB$ bằng",
                "Tang của góc giữa $SC$ và $(ABCD)$ bằng",
                "Tang của góc nhị diện $[S,CD,A]$ bằng",
                "Tang của góc nhị diện $[C,SA,D]$ bằng"
            ],
            "options": [
                "$\\dfrac{1}{2}$",
                "$\\dfrac{\\sqrt{3}}{3}$",
                "1",
                "$\\sqrt{3}$",
                "$2\\sqrt{3}$",
                "$2$"
            ],
            "ans": [
                "E",
                "D",
                "F",
                "B"
            ],
            "explain": "[IMG]<br><ul><li>Ta có $CD \\parallel AB \\Rightarrow (CD,SB) = (AB,SB) = \\widehat{SBA}$.<br>Trong tam giác vuông $SAB$: $\\tan \\widehat{SBA} = \\dfrac{SA}{AB} = \\dfrac{2\\sqrt{3}a}{a} = 2\\sqrt{3}$.</li><li>Hình chiếu của $S$ lên $(ABCD)$ là $A \\Rightarrow (SC,(ABCD)) = \\widehat{SCA}$.<br>$AC = \\sqrt{AB^2+AD^2} = \\sqrt{a^2+3a^2} = 2a$.<br>$\\tan \\widehat{SCA} = \\dfrac{SA}{AC} = \\dfrac{2\\sqrt{3}a}{2a} = \\sqrt{3}$.</li><li>Ta có $\\left\\{\\begin{aligned}& CD \\perp AD \\\\& CD \\perp SA\\end{aligned}\\right. \\Rightarrow CD \\perp (SAD)$.<br>Do đó góc nhị diện $[S,CD,A]$ chính là $\\widehat{SDA}$.<br>$\\tan \\widehat{SDA} = \\dfrac{SA}{AD} = \\dfrac{2\\sqrt{3}a}{\\sqrt{3}a} = 2$.</li><li>Góc nhị diện $[C,SA,D]$: Vì $SA \\perp (ABCD)$ nên $(SAC) \\perp (ABCD)$ và $(SAD) \\perp (ABCD)$.<br>Giao tuyến của hai mặt phẳng $(SAC)$ và $(SAD)$ là $SA$. Góc phẳng nhị diện là góc giữa $AC$ và $AD$, tức là $\\widehat{CAD}$.<br>$\\tan \\widehat{CAD} = \\dfrac{CD}{AD} = \\dfrac{AB}{AD} = \\dfrac{a}{\\sqrt{3}a} = \\dfrac{\\sqrt{3}}{3}$.</li></ul>"
        },
        {
            "type": "match",
            "q": "Trong không gian $Oxyz$ cho mặt phẳng $(P)\\colon 2x-y+z-2=0$ và ba điểm $A(1;-1;0)$, $B(2;0;1)$, $C(1;2;-1)$.",
            "items": [
                "Phương trình mặt phẳng đi qua điểm $A$ và vuông góc với đường thẳng $BC$ là",
                "Phương trình mặt phẳng đi qua điểm $A$ và song song với mặt phẳng $(P)$ là",
                "Phương trình mặt phẳng đi qua ba điểm $A$, $B$, $C$ là",
                "Phương trình mặt phẳng đi qua hai điểm $A$, $B$ và vuông góc với mặt phẳng $(P)$ là"
            ],
            "options": [
                "$2x-y+z-3=0$",
                "$x-2y+2z-3=0$",
                "$4x-y-3z-5=0$",
                "$2x-y+3z-3=0$",
                "$x+y+z=0$",
                "$2x+y-3z-1=0$"
            ],
            "ans": [
                "B",
                "A",
                "C",
                "F"
            ],
            "explain": "<ul><li>Vectơ pháp tuyến là $\\overrightarrow{BC} = (-1;2;-2)$.<br>Phương trình: $-1(x-1) + 2(y+1) - 2(z-0) = 0 \\Leftrightarrow -x+2y-2z+3=0 \\Leftrightarrow x-2y+2z-3=0$.</li><li>Vectơ pháp tuyến là $\\vec{n}_P = (2;-1;1)$.<br>Phương trình: $2(x-1) - 1(y+1) + 1(z-0) = 0 \\Leftrightarrow 2x-y+z-3=0$.</li><li>Ta có $\\overrightarrow{AB} = (1;1;1)$, $\\overrightarrow{AC} = (0;3;-1)$.<br>Vectơ pháp tuyến $\\vec{n} = [\\overrightarrow{AB}, \\overrightarrow{AC}] = (-4;1;3)$.<br>Phương trình: $-4(x-1) + 1(y+1) + 3(z-0) = 0 \\Leftrightarrow -4x+y+3z+5=0 \\Leftrightarrow 4x-y-3z-5=0$.</li><li>Vectơ pháp tuyến $\\vec{n} = [\\overrightarrow{AB}, \\vec{n}_P] = \\left( \\begin{vmatrix} 1 & 1 \\\\ -1 & 1 \\end{vmatrix}; \\begin{vmatrix} 1 & 1 \\\\ 1 & 2 \\end{vmatrix}; \\begin{vmatrix} 1 & 1 \\\\ 2 & -1 \\end{vmatrix} \\right) = (2;1;-3)$.<br>Phương trình: $2(x-1) + 1(y+1) - 3(z-0) = 0 \\Leftrightarrow 2x+y-3z-1=0$.</li></ul>"
        },
        {
            "type": "match",
            "q": "Trong không gian $Oxyz$, cho điểm $M(0;0;4)$ và hai đường thẳng $d_1\\colon \\left\\{\\begin{aligned}&x=2-t\\\\&y=3\\\\&z=-1+t\\end{aligned}\\right.$, $d_2\\colon \\left\\{\\begin{aligned}&x=3+t'\\\\&y=2-t'\\\\&z=-1\\end{aligned}\\right.$ cắt nhau tại $A$. Một đường thẳng $d_3$ đi qua $M$ cắt $d_1$ và $d_2$ lần lượt tại $B(a;b;c)$ và $C$ sao cho tam giác $ABC$ đều.",
            "items": [
                "Toạ độ điểm $A$ là",
                "Vec-tơ chỉ phương của đường thẳng $d_3$ là",
                "Toạ độ điểm $B$ là",
                "Toạ độ điểm $C$ là"
            ],
            "options": [
                "$(2;3;-1)$",
                "$(0;1;-1)$",
                "$(0;3;1)$",
                "$(0;5;-1)$",
                "$(2;-1;-1)$",
                "$(4;3;-3)$"
            ],
            "ans": [
                "A",
                "B",
                "C",
                "D"
            ],
            "explain": "Xét hệ phương trình giao điểm của $d_1$ và $d_2$:<br>$\\left\\{\\begin{aligned}& 2-t = 3+t' \\\\& 3 = 2-t' \\\\& -1+t = -1\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}& t=0 \\\\& t'=-1\\end{aligned}\\right.$.<br>Thay $t=0$ vào $d_1$ ta được tọa độ $A(2;3;-1)$.<br><br>Vì $B \\in d_1 \\Rightarrow B(2-m; 3; -1+m)$ và $C \\in d_2 \\Rightarrow C(3+n; 2-n; -1)$.<br>Ta có $M$, $B$, $C$ thẳng hàng và $\\triangle ABC$ đều (suy ra $AB=AC$).<br>Thử các đáp án từ cột phải để tìm tọa độ phù hợp:<br>Kiểm tra $B(0;3;1)$ (ứng với $m=2$) $\\in d_1$ và $C(0;5;-1)$ (ứng với $n=-3$) $\\in d_2$.<br>Khi đó:<br>$\\overrightarrow{MB} = (0;3;-3)$,<br> $\\overrightarrow{MC} = (0;5;-5)$.<br>Ta thấy $\\overrightarrow{MC} = \\dfrac{5}{3}\\overrightarrow{MB} \\Rightarrow M, B, C$ thẳng hàng.<br>Kiểm tra tam giác đều:<br>$AB= \\sqrt{8}$; $AC= \\sqrt{8}$;\t$BC= \\sqrt{8}$.<br>Vậy $AB=BC=CA$, tam giác $ABC$ đều.<br><ul><li>Tọa độ điểm $A(2;3;-1)$.</li><li>Đường thẳng $d_3$ đi qua $B$, $C$ nên có VTCP $\\overrightarrow{u} = \\dfrac{1}{2}\\overrightarrow{BC} = \\dfrac{1}{2}(0;2;-2) = (0;1;-1)$.</li><li>Tọa độ điểm $B(0;3;1)$.</li><li>Tọa độ điểm $C(0;5;-1)$.</li></ul>"
        },
        {
            "type": "short",
            "q": "Cho $\\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x = -3$ và $\\displaystyle\\int\\limits_0^1 g(x)\\mathrm{\\,d}x = 2$. Tính $\\displaystyle\\int\\limits_0^1 [f(x)+2g(x)]\\mathrm{\\,d}x$.",
            "ans": "1",
            "explain": "Ta có: $\\displaystyle\\int\\limits_0^1 [f(x)+2g(x)]\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x + 2\\displaystyle\\int\\limits_0^1 g(x)\\mathrm{\\,d}x = -3 + 2(2) = 1$."
        },
        {
            "type": "short",
            "q": "Cho các số thực dương $a$, $b$, $c$ thỏa mãn $\\log_a b = 3$ và $\\log_c a = -\\dfrac{1}{2}$. Tính giá trị của biểu thức $P = \\log_{ac}(a^2bc)$.",
            "ans": "-3",
            "explain": "Ta có $\\log_c a = -\\dfrac{1}{2} \\Rightarrow \\log_a c = -2$.\\br>Chuyển sang cơ số $a$:<br>$$P = \\dfrac{\\log_a (a^2bc)}{\\log_a (ac)} = \\dfrac{2 + \\log_a b + \\log_a c}{1 + \\log_a c}$$<br>Thay số:<br>$$P = \\dfrac{2 + 3 + (-2)}{1 + (-2)} = \\dfrac{3}{-1} = -3.$$"
        },
        {
            "type": "short",
            "q": "Một người đàn ông đang ở vị trí điểm $A$ trên bờ một đoạn sông thẳng, rộng $300m$ và muốn đến điểm $B$, ở bờ đối diện, xuôi về phía hạ lưu $2km$ (xem hình vẽ). Biết người này có một chiếc thuyền, với vận tốc trung bình khi chèo thuyền trên đoạn sông này là $6km/h$. Nhưng nếu có thể lên bờ và chạy bộ thì vận tốc trung bình mà anh ta có thể đạt được là $8km/h$. Hãy tính thời gian nhanh nhất mà anh ta có thể đạt được để di chuyển từ $A$ đến $B$, theo đơn vị phút.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767534643324_569.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "ans": "17",
            "explain": "Đổi đơn vị: $300m = 0{,}3km$.<br>Gọi $C$ là điểm người đó cập bến ở bờ đối diện. Đặt khoảng cách từ hình chiếu của $A$ bên bờ đối diện đến $C$ là $x$ ($km$), điều kiện $0 \\le x \\le 2$.<br>Quãng đường chèo thuyền: $S_1 = \\sqrt{0{,}3^2 + x^2} = \\sqrt{0{,}09 + x^2}$.<br>Quãng đường chạy bộ: $S_2 = 2 - x$.<br>Tổng thời gian di chuyển: $T(x) = \\dfrac{\\sqrt{x^2+0{,}09}}{6} + \\dfrac{2-x}{8}$.<br>Ta có $T'(x) = \\dfrac{x}{6\\sqrt{x^2+0{,}09}} - \\dfrac{1}{8}$.<br>$T'(x) = 0 \\Leftrightarrow \\dfrac{x}{\\sqrt{x^2+0{,}09}} = \\dfrac{3}{4} \\Leftrightarrow 16x^2 = 9(x^2+0{,}09) \\Leftrightarrow 7x^2 = 0{,}81 \\Leftrightarrow x = \\dfrac{0{,}9}{\\sqrt{7}}$.<br>Khi đó thời gian ngắn nhất là:<br>$$T_{\\min} = T\\left(\\dfrac{0{,}9}{\\sqrt{7}}\\right) = \\dfrac{1}{4} + \\dfrac{\\sqrt{7}}{80} \\text{ (giờ)}.$$<br>Đổi ra phút:<br>$$T_{\\text{phút}} = 60 \\cdot \\left(\\dfrac{1}{4} + \\dfrac{\\sqrt{7}}{80}\\right) = 15 + \\dfrac{3\\sqrt{7}}{4} \\approx 16{,}98 \\text{ (phút)}.$$"
        },
        {
            "type": "short",
            "q": "Mỗi khi đi nghỉ mát anh An luôn dự định chạy bộ vào mỗi buổi sáng. Tuy nhiên, đôi khi anh ngủ suốt buổi sáng. Xác suất để anh An chạy bộ vào buổi sáng thứ nhất là $90\\%$. Sau đó, xác suất để anh ta chạy bộ ở mỗi buổi sáng còn lại là $70\\%$ nếu anh ta chạy bộ vào buổi sáng hôm liền trước và $80\\%$ nếu anh ta không chạy bộ vào buổi sáng hôm liền trước. Tính xác suất (đơn vị: %) để anh An chạy bộ vào buổi sáng ngày thứ hai của kì nghỉ mát.",
            "ans": "71",
            "explain": "Gọi $A_1$ là biến cố anh An chạy bộ sáng thứ nhất, $A_2$ là biến cố anh An chạy bộ sáng thứ hai.<br>Theo đề bài: $\\mathrm{P}(A_1) = 0{,}9 \\Rightarrow \\mathrm{P}(\\overline{A_1}) = 0{,}1$.<br>Xác suất có điều kiện: $\\mathrm{P}(A_2 | A_1) = 0{,}7$ và $\\mathrm{P}(A_2 | \\overline{A_1}) = 0{,}8$ (vì nếu không chạy hôm trước thì xác suất chạy hôm sau là $80\\%$).<br>Áp dụng công thức xác suất đầy đủ:<br>$$\\mathrm{P}(A_2) = \\mathrm{P}(A_1)\\cdot\\mathrm{P}(A_2 | A_1) + \\mathrm{P}(\\overline{A_1})\\cdot\\mathrm{P}(A_2 | \\overline{A_1})$$<br>$$\\mathrm{P}(A_2) = 0{,}9 \\cdot 0{,}7 + 0{,}1 \\cdot 0{,}8 = 0{,}63 + 0{,}08 = 0{,}71.$$<br>Vậy xác suất là $71\\%$."
        },
        {
            "type": "short",
            "q": "Trong không gian $Oxyz$, cho khối đa diện $(H)$ là tập hợp tất cả các điểm $M(x;y;z)$ thỏa mãn $|x|+|y|+|z| \\le 6$ và $|x|+|y|+|z-2| \\le 6$. Tính thể tích khối đa diện $(H)$.",
            "ans": "167",
            "explain": "Khối $(H)$ là phần chung của hai khối bát diện đều:<br>$V_1: |x|+|y|+|z| \\le 6$ (Tâm $O(0;0;0)$, trục đối xứng $Oz$).<br>$V_2: |x|+|y|+|z-2| \\le 6$ (Tâm $I(0;0;2)$, trục đối xứng $Oz$).<br>Giao của hai khối này đối xứng qua mặt phẳng $z=1$ (trung điểm của đoạn nối hai tâm).<br>Tại mỗi cao độ $z$, thiết diện ngang là hình vuông có diện tích $S(z) = 2r^2(z)$, với $r(z)$ là bán kính thu hẹp.<br>Ta xét nửa dưới từ $z=-4$ đến $z=1$ (đối xứng với phần từ $z=1$ đến $z=6$).<br>Tại $z \\in [-4; 1]$, bán kính bị chặn bởi khối $V_2$: $r(z) = 6 - |z-2|$.<br>Vì $z \\le 1 < 2$ nên $|z-2|=2-z \\Rightarrow r(z) = 6-(2-z) = 4+z$.<br>Diện tích thiết diện: $S(z) = 2(4+z)^2$.<br>Thể tích phần dưới: $\\displaystyle\\int\\limits_{-4}^1 2(4+z)^2 \\mathrm{\\,d}z$. Đặt $t=4+z \\Rightarrow \\displaystyle\\int\\limits_{0}^5 2t^2 \\mathrm{\\,d}t = \\dfrac{2t^3}{3}\\Big|_0^5 = \\dfrac{250}{3}$.<br>Do tính đối xứng, thể tích phần trên bằng thể tích phần dưới.<br>Vậy $V_{(H)} = 2 \\cdot \\dfrac{250}{3} = \\dfrac{500}{3}$."
        }
    ]
};