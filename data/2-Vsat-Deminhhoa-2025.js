window.EXAM_DATA = {
    "title": "Đề Minh Họa V-Sat, Đại Học Cần Thơ, Năm 2025",
    "subject": "Toan",
    "grade": "12",
    "time": 90,
    "password": "858eabb9c6c80b4947777108ced59f12",
    "encrypted": true,
    "start": "2026-01-03T19:30",
    "end": "2026-01-05T21:00",
    "scores": {
        "mcq": 0.25,
        "tf": 1,
        "short": 0.5,
        "match": 1
    },
    "questions": [
        {
            "type": "tf",
            "q": "Bảng sau đây tóm tắt kết quả phân tích quá trình tự phân hủy (sự phá hủy tế bào sau khi tế bào chết do hoạt động của các enzym của chính tế bào) và sự thối rữa (sự phân hủy chất hữu cơ, đặc biệt là protein, bởi vi sinh vật dẫn đến tạo ra mùi hôi thối) của các con bọ cánh cứng chết:\n<br><br>\nChọn ngẫu nhiên một con bọ cánh cứng trong các mẫu phân tích trên.",
            "items": [
                {
                    "sub": "Xác suất để mẫu chọn ra có quá trình tự phân hủy cao là $\\dfrac{7}{50}$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Xác suất để mẫu chọn ra có quá trình tự phân hủy cao và độ thối rữa thấp là $\\dfrac{9}{50}$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Nếu quá trình tự phân hủy của một mẫu chọn ra là cao thì xác suất để thối rữa thấp là $\\dfrac{9}{16}$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Nếu độ thối rữa một mẫu chọn ra là cao thì xác suất để quá trình tự phân hủy cao bằng $\\dfrac{14}{73}$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                }
            ],
            "explain": "Tổng số mẫu quan sát là: $n(\\Omega) = 14 + 59 + 18 + 9 = 100$.<br>Gọi $A$ là biến cố \"Tự phân hủy cao\", $B$ là biến cố \"Thối rữa cao\".<br>Ta có số lượng mẫu tương ứng:<br>- Tự phân hủy cao: $14 + 18 = 32$.<br>- Thối rữa cao: $14 + 59 = 73$.<br>- Thối rữa thấp: $18 + 9 = 27$.<br>- Tự phân hủy cao và thối rữa thấp: $18$.<br>- Tự phân hủy cao và thối rữa cao: $14$.<br>- Xác suất tự phân hủy cao là: $P(A) = \\dfrac{32}{100} = \\dfrac{8}{25}$. Mệnh đề Sai.<br>- Xác suất tự phân hủy cao và thối rữa thấp là: $\\dfrac{18}{100} = \\dfrac{9}{50}$. Mệnh đề Đúng.<br>- Xác suất thối rữa thấp biết rằng tự phân hủy cao là: $\\dfrac{18}{32} = \\dfrac{9}{16}$. Mệnh đề Đúng.<br>- Xác suất tự phân hủy cao biết rằng thối rữa cao là: $\\dfrac{14}{73}$. Mệnh đề Đúng.",
            "id": 1767440931715.7627,
            "img": "https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q1-q-1767443165565.png"
        },
        {
            "type": "tf",
            "q": "Cho các mệnh đề sau.",
            "items": [
                {
                    "sub": "$\\displaystyle\\int 2x \\mathrm{\\,d}x = x^2 + C$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "$\\displaystyle\\int \\cos x \\mathrm{\\,d}x = \\sin x + C$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "$\\displaystyle\\int x\\sqrt{x} \\mathrm{\\,d}x = \\dfrac{2x^2\\sqrt{x}}{5} + C$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "$\\displaystyle\\int \\cot^2 x \\mathrm{\\,d}x = \\cot x - x + C$",
                    "ans": "800618943025315f869e4e1f09471012"
                }
            ],
            "explain": "- Ta có $(x^2+C)' = 2x$. Đúng.\n<br>- Ta có $(\\sin x + C)' = \\cos x$. Đúng.\n<br>- $\\displaystyle\\int x\\sqrt{x} \\mathrm{\\,d}x = \\displaystyle\\int x^{\\frac{3}{2}} \\mathrm{\\,d}x = \\dfrac{x^{\\frac{5}{2}}}{\\frac{5}{2}} + C = \\dfrac{2}{5}x^2\\sqrt{x} + C$. Đúng.\n<br>- $\\displaystyle\\int \\cot^2 x \\mathrm{\\,d}x = \\displaystyle\\int \\left(\\dfrac{1}{\\sin^2 x} - 1\\right) \\mathrm{\\,d}x = -\\cot x - x + C$. Mệnh đề sai vì thiếu dấu trừ.",
            "id": 1767440931715.9106
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$ cho mặt cầu $(S)\\colon x^2 + y^2 + z^2 - 4x + 10y - 2z + 14 = 0$ và hai điểm $A(3;-4;4)$, $B(5;-2;4)$.",
            "items": [
                {
                    "sub": "Mặt cầu $(S)$ có tâm là điểm $I(2;-5;1)$ và bán kính $R=4$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Điểm $A$ nằm ngoài mặt cầu $(S)$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Phương trình mặt cầu tâm $A$ và đi qua điểm $B$ là $(x-3)^2 + (y+4)^2 + (z-4)^2 = 4$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Phương trình mặt cầu đường kính $AB$ là $(x-4)^2 + (y+3)^2 + (z-4)^2 = 2$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                }
            ],
            "explain": "Mặt cầu $(S)$ có tâm $I(2;-5;1)$ và bán kính $R = \\sqrt{2^2 + (-5)^2 + 1^2 - 14} = \\sqrt{16} = 4$.\n<br>- Tâm $I(2;-5;1)$, bán kính $R=4$. Đúng.\n<br>- $IA = \\sqrt{11}$. Vì $IA = \\sqrt{11} < R=4$ nên $A$ nằm trong mặt cầu. Sai.\n<br>- Bán kính mặt cầu tâm $A$ đi qua $B$ là $r = AB= \\sqrt{8}$. Phương trình là $(x-3)^2 + (y+4)^2 + (z-4)^2 = 8$. Sai.\n<br>- Trung điểm $AB$ là $K(4;-3;4)$; $AB = \\sqrt{8} \\Rightarrow R' = \\dfrac{\\sqrt{8}}{2} = \\sqrt{2}$. Phương trình mặt cầu đường kính $AB$: $(x-4)^2 + (y+3)^2 + (z-4)^2 = 2$. Đúng.",
            "id": 1767440931715.3723
        },
        {
            "type": "tf",
            "q": "Nhiệt độ $T^\\circ\\text{C}$ của nước trong ấm đặt trên bếp được xác định theo công thức $T = 95 - 75\\mathrm{e}^{-t}$, $t \\ge 0$, trong đó $t$ (phút) là thời gian tính từ lúc bếp được bật lên. Khi nước trong ấm đạt $85^\\circ\\text{C}$ thì bếp được tắt đi và nhiệt độ $T^\\circ\\text{C}$ của nước trong ấm được xác định theo công thức $T = 15 + A\\mathrm{e}^{-\\frac{t}{20}}, t \\ge 0$, trong đó $A$ là hằng số và $t$ (phút) là thời gian tính từ lúc tắt bếp.",
            "items": [
                {
                    "sub": "Nhiệt độ ban đầu của nước trong ấm là $20^\\circ\\text{C}$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Ta có $A=85$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Sau khoảng $2$ phút (làm tròn đến hàng đơn vị) kể từ lúc bật bếp thì nước trong ấm đạt $85^\\circ\\text{C}$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Sau khoảng $21$ phút (làm tròn đến hàng đơn vị) kể từ lúc tắt bếp thì nhiệt độ của nước trong ấm giảm xuống tới $40^\\circ\\text{C}$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                }
            ],
            "explain": "- Tại thời điểm ban đầu $t=0$, \n$T = 95 - 75\\mathrm{e}^0 = 95 - 75 = 20^\\circ\\text{C}$. Đúng.<br>- Tại thời điểm tắt bếp ($t=0$ của giai đoạn 2), nhiệt độ là $85^\\circ\\text{C}$. Ta có $85 = 15 + A\\mathrm{e}^0 \\Rightarrow A = 70$. Sai.\n<br>- Xét giai đoạn đun: $85 = 95 - 75\\mathrm{e}^{-t} \\Leftrightarrow 75\\mathrm{e}^{-t} = 10 \\Leftrightarrow \\mathrm{e}^{-t} = \\dfrac{2}{15} \\Rightarrow t = -\\ln\\left(\\dfrac{2}{15}\\right) \\approx 2{,}01$ phút. Đúng.\n<br>- Xét giai đoạn tắt bếp (với $A=70$): $40 = 15 + 70\\mathrm{e}^{-\\frac{t}{20}} \\Leftrightarrow 25 = 70\\mathrm{e}^{-\\frac{t}{20}} \\Leftrightarrow \\mathrm{e}^{-\\frac{t}{20}} = \\dfrac{5}{14} \\Rightarrow -\\dfrac{t}{20} = \\ln\\left(\\dfrac{5}{14}\\right) \\Rightarrow t \\approx 20{,}59$ phút. Làm tròn là $21$ phút. Đúng.",
            "id": 1767440931715.0508
        },
        {
            "type": "tf",
            "q": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$, $B$, $SA$ vuông góc với mặt phẳng đáy và $SA=AB=BC=a$, $AD=2a$.",
            "items": [
                {
                    "sub": "Thể tích khối chóp $S.ABCD$ bằng $\\dfrac{3a^3}{2}$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Đường thẳng $SC$ tạo với mặt phẳng $(ABCD)$ một góc bằng $45^\\circ$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Khoảng cách từ điểm $A$ đến đường thẳng $CD$ bằng $\\sqrt{2}a$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Khoảng cách từ điểm $B$ đến mặt phẳng $(SCD)$ bằng $\\dfrac{\\sqrt{5}a}{5}$",
                    "ans": "800618943025315f869e4e1f09471012"
                }
            ],
            "explain": "<br><div style=\"text-align:center\"><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q5-e-1767443168081.png\" style=\"max-width:100%;border-radius:8px;margin:10px 0\"></div><br>\nDiện tích đáy $S_{ABCD} = \\dfrac{(BC+AD)AB}{2} = \\dfrac{(a+2a)a}{2} = \\dfrac{3a^2}{2}$.\n<br>- Thể tích $V = \\dfrac{1}{3} SA \\cdot S_{ABCD} = \\dfrac{1}{3} a \\cdot \\dfrac{3a^2}{2} = \\dfrac{a^3}{2}$. Mệnh đề Sai.<br>- Hình chiếu của $S$ lên $(ABCD)$ là $A$. Góc giữa $SC$ và đáy là $\\widehat{SCA}$.<br>Ta có $AC = \\sqrt{AB^2+BC^2} = a\\sqrt{2}$.<br>$\\tan \\widehat{SCA} = \\dfrac{SA}{AC} = \\dfrac{a}{a\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}} \\ne 1$. Góc không bằng $45^\\circ$. Mệnh đề Sai.\n<br>- Chọn hệ trục tọa độ $A(0;0;0)$, $B(a;0;0)$, $D(0;2a;0)$, $S(0;0;a)$. Suy ra $C(a;a;0)$.\n<br>Ta có diện tích tam giác $ACD$: $S_{ACD} = S_{ABCD} - S_{ABC} = \\dfrac{3a^2}{2} - \\dfrac{a^2}{2} = a^2$.\n<br>Cạnh $CD = a\\sqrt{2}$.\n<br>Khoảng cách $d(A, CD) = \\dfrac{2S_{ACD}}{CD} = \\dfrac{2a^2}{a\\sqrt{2}} = a\\sqrt{2}$. Mệnh đề Đúng.\n<br>- Ta có thể tích $V_{S.BCD} = V_{S.ABCD} - V_{S.ABD} = \\dfrac{a^3}{2} - \\dfrac{1}{3}a \\cdot \\dfrac{1}{2}a \\cdot 2a = \\dfrac{a^3}{2} - \\dfrac{a^3}{3} = \\dfrac{a^3}{6}$.\n<br>Tam giác $SCD$ có $SC=a\\sqrt{3}, SD=a\\sqrt{5}, CD=a\\sqrt{2}$. Vì $SC^2+CD^2 = 3a^2+2a^2 = 5a^2 = SD^2$ nên $\\Delta SCD$ vuông tại $C$.<br>$S_{SCD} = \\dfrac{1}{2} SC \\cdot CD = \\dfrac{1}{2} a\\sqrt{3} \\cdot a\\sqrt{2} = \\dfrac{a^2\\sqrt{6}}{2}$.\n<br>$d(B, (SCD)) = \\dfrac{3V_{S.BCD}}{S_{SCD}} = \\dfrac{a^3/2}{a^2\\sqrt{6}/2} = \\dfrac{a}{\\sqrt{6}}$. Mệnh đề Sai.",
            "id": 1767440931715.533
        },
        {
            "type": "tf",
            "q": "Trong đại dịch Covid-19 người ta thường dùng xét nghiệm RT-PCR để xác định người bị nhiễm virus. Biết rằng trong xét nghiệm RT-PCR tỉ lệ dương tính giả là $5\\%$ và tỉ lệ âm tính giả là $13\\%$ và tỉ lệ mắc bệnh của vùng dân cư là $5\\%$.",
            "items": [
                {
                    "sub": "Tỉ lệ dương tính thật bằng $95\\%$",
                    "ans": "800618943025315f869e4e1f09471012"
                },
                {
                    "sub": "Tỉ lệ xét nghiệm RT-PCR có kết quả dương tính là $9{,}1\\%$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Tỉ lệ người nhiễm virus trong những người có kết quả xét nghiệm RT-PCR dương tính khoảng $47{,}8\\%$",
                    "ans": "b9ece18c950afbfa6b0fdbfa4ff731d3"
                },
                {
                    "sub": "Tỉ lệ người không nhiễm virus trong những người có kết quả xét nghiệm RT-PCR âm tính khoảng $90{,}9\\%$",
                    "ans": "800618943025315f869e4e1f09471012"
                }
            ],
            "explain": "Gọi $D$ là biến cố nhiễm bệnh ($P(D)=0{,}05$), $H$ là không nhiễm ($P(H)=0{,}95$).\n<br>Gọi $+$ là kết quả dương tính, $-$ là kết quả âm tính.\n<br>Theo đề bài: Dương tính giả $P(+|H) = 0{,}05$; \nÂm tính giả $P(-|D) = 0{,}13$.\n<br>Suy ra: Dương tính thật $P(+|D) = 1 - 0{,}13 = 0{,}87$; \nÂm tính thật $P(-|H) = 1 - 0{,}05 = 0{,}95$.\n<br>- Tỉ lệ dương tính thật là $P(+|D) = 87\\%$. Mệnh đề Sai.\n<br>- Tỉ lệ kết quả dương tính: $P(+) = P(+|D)P(D) + P(+|H)P(H)= 0{,}091 = 9{,}1\\%$. Mệnh đề Đúng.\n<br>- Tỉ lệ nhiễm virus trong nhóm dương tính: $P(D|+) = \\dfrac{P(+|D)P(D)}{P(+)} \\approx 47{,}8\\%$. Mệnh đề Đúng.\n<br>- Tỉ lệ không nhiễm trong nhóm âm tính: $P(H|-) = \\dfrac{P(-|H)P(H)}{1 - P(+)} = \\dfrac{0{,}95 \\cdot 0{,}95}{1 - 0{,}091} = \\dfrac{0{,}9025}{0{,}909} \\approx 99{,}3\\%$. Mệnh đề Sai.",
            "id": 1767440931715.2585
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
            "ans": "cfcd208495d565ef66e7dff9f98764da",
            "explain": "Hàm số $a(t) = -0{,}8t + 4$ là hàm bậc nhất có hệ số góc âm nên nghịch biến trên $\\mathbb{R}$.<br>Trong khoảng $[1; 3]$, gia tốc lớn nhất tại $t=1$.<br>$a_{\\max} = a(1) = -0{,}8(1) + 4 = 3{,}2 \\ (\\text{m/s}^2)$.",
            "id": 1767440931715.7039
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
            "ans": "cfcd208495d565ef66e7dff9f98764da",
            "explain": "Vận tốc của vật là nguyên hàm của gia tốc. Với $v(0)=0$ (bắt đầu di chuyển từ $O$), ta có:\n<br>$v(t) = \\displaystyle\\int (-0{,}8t + 4) \\mathrm{\\,d}t = -0{,}4t^2 + 4t$.\n<br>Vật chuyển động theo chiều dương ($v > 0$) khi $-0{,}4t^2 + 4t > 0 \\Leftrightarrow 0 < t < 10$.\n<br>Tốc độ của vật giảm khi vật chuyển động chậm dần, tức là $a(t) \\cdot v(t) < 0$.\n<br>Trong khoảng thời gian $t \\in (0; 10)$, $v(t) > 0$, nên ta cần $a(t) < 0$.\n<br>$-0{,}8t + 4 < 0 \\Leftrightarrow t > 5$.\n<br>Vậy trong khoảng $(5; 10)$, tốc độ của vật giảm. Khoảng $[5; 6]$ thỏa mãn.",
            "id": 1767440931715.187
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
            "ans": "cfcd208495d565ef66e7dff9f98764da",
            "explain": "Vận tốc $v(t) = -0{,}4t^2 + 4t$.\n<br>Ta thấy $v(t) = 0$ khi $t=0$ hoặc $t=10$.\n<br>Trong khoảng $[5; 10]$, vật đi theo chiều dương ($v \\ge 0$).<br>Trong khoảng $[10; 11]$, vật đi theo chiều âm ($v \\le 0$).\n<br>Quãng đường đi được là:\n<br>$S = \\displaystyle\\int\\limits_{5}^{11} |v(t)| \\mathrm{\\,d}t = \\displaystyle\\int\\limits_{5}^{10} (-0{,}4t^2 + 4t) \\mathrm{\\,d}t + \\displaystyle\\int\\limits_{10}^{11} -(-0{,}4t^2 + 4t) \\mathrm{\\,d}t$.<br>Tính tích phân:\n<br>$\\displaystyle\\int\\limits_{5}^{10} (-0{,}4t^2 + 4t) \\mathrm{\\,d}t = \\left.\\left(-\\dfrac{0{,}4t^3}{3} + 2t^2\\right)\\right|_5^{10} = \\dfrac{200}{3} - \\dfrac{100}{3} = \\dfrac{100}{3}$.<br>$\\displaystyle\\int\\limits_{10}^{11} (0{,}4t^2 - 4t) \\mathrm{\\,d}t = \\left.\\left(\\dfrac{0{,}4t^3}{3} - 2t^2\\right)\\right|_{10}^{11} \\approx 2{,}133$.\n<br>Tổng quãng đường $S \\approx 33{,}333 + 2{,}133 = 35{,}466$.<br>Làm tròn đến hàng phần chục là $35{,}5$.",
            "id": 1767440931715.084
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây.\n<br><br>\nTính tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên (làm tròn kết quả đến hàng phần chục; đơn vị: phút).",
            "options": [
                "$11{,}4$",
                "$11{,}3$",
                "$11{,}2$",
                "$11{,}1$"
            ],
            "ans": "cfcd208495d565ef66e7dff9f98764da",
            "explain": "Tổng số học sinh là $n = 3 + 11 + 6 + 15 + 5 = 40$.\nVị trí của tứ phân vị thứ nhất là $\\dfrac{n}{4} = \\dfrac{40}{4} = 10$.\nTần số tích lũy của nhóm $[0; 5)$ là $3 < 10$.\nTần số tích lũy của nhóm $[5; 15)$ là $3 + 11 = 14 > 10$.\nDo đó, tứ phân vị thứ nhất thuộc nhóm $[5; 15)$.\nTa có: $u_m = 5$; $u_{m+1} = 15$; $n_m = 11$; $C_{m-1} = 3$.\nĐộ dài nhóm là $L = 15 - 5 = 10$.\nTứ phân vị thứ nhất là:$$Q_1 = u_m + \\dfrac{\\frac{n}{4} - C_{m-1}}{n_m} \\cdot L = 5 + \\dfrac{10 - 3}{11} \\cdot 10 = 5 + \\dfrac{70}{11} \\approx 11{,}36.$$\nLàm tròn đến hàng phần chục ta được $11{,}4$.",
            "id": 1767440931715.056,
            "img": "https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q10-q-1767443170087.png"
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây.<br><br>Chọn ngẫu nhiên một bạn học sinh trong nhóm trên. Tính xác suất để thời gian trung bình bạn đó sử dụng Chat GPT lớn hơn hoặc bằng $25$ phút một ngày (làm tròn kết quả đến hàng phần trăm).",
            "options": [
                "$0{,}50$",
                "$0{,}38$",
                "$0{,}37$",
                "$0{,}51$"
            ],
            "ans": "cfcd208495d565ef66e7dff9f98764da",
            "explain": "Tổng số học sinh là $n = 40$.\nSố học sinh sử dụng ChatGPT từ 25 phút trở lên thuộc các nhóm $[25; 30)$ và $[30; 35)$.\nSố lượng học sinh thỏa mãn là: $15 + 5 = 20$ (học sinh).\nXác suất cần tìm là: $P = \\dfrac{20}{40} = 0{,}5$.",
            "id": 1767440931715.52,
            "img": "https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q11-q-1767443171651.png"
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây.\n<br><br>\nDo sai sót trong quá trình nhập và xử lý số liệu, tất cả các mốc thời gian trong bảng trên đã bị ghi lùi 5 phút so với thực tế và người ta điều chỉnh lại bảng số liệu ban đầu cho đúng. Gọi $s_1$, $s_2$ lần lượt là độ lệch chuẩn của mẫu số liệu ghép nhóm trước và sau khi chỉnh sửa. Chọn khẳng định đúng nhất.",
            "options": [
                "$s_1 = s_2$",
                "$s_1 > s_2$",
                "$s_1 < s_2$",
                "$s_1 = s_2 - 5$"
            ],
            "ans": "cfcd208495d565ef66e7dff9f98764da",
            "explain": "Khi cộng thêm một hằng số $c$ (ở đây $c=5$) vào tất cả các giá trị của mẫu số liệu thì:\n<ul>\n<li>Số trung bình cộng tăng thêm $c$.</li>\n<li>Phương sai và độ lệch chuẩn không thay đổi.</li>\n</ul>\nDo đó độ lệch chuẩn trước và sau khi chỉnh sửa là bằng nhau, tức là $s_1 = s_2$.",
            "id": 1767440931715.6028,
            "img": "https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q12-q-1767443173573.png"
        },
        {
            "type": "match",
            "q": "Cho hàm số $y=f(x)$ xác định và có bảng biến thiên trên $[-2;4]$ như sau:<br><br>",
            "items": [
                "Hàm số $f(x)$ đạt cực đại tại điểm $x_{\\text{CĐ}}=$",
                "Hàm số $f(x)$ đạt cực tiểu tại điểm $x_{\\text{CT}}=$",
                "Giá trị cực đại của hàm số $f(x)$ là $y_{\\text{CĐ}}=$",
                "Giá trị cực tiểu của hàm số $f(x)$ là $y_{\\text{CT}}=$"
            ],
            "options": [
                "$3$",
                "$-26$",
                "$-1$",
                "$-2$",
                "$6$",
                "$-19$"
            ],
            "ans": [
                "0d61f8370cad1d412f80b84d143e1257",
                "7fc56270e7a70fa81a5935b72eacbe29",
                "3a3ea00cfc35332cedf6e5e9a32e94da",
                "9d5ed678fe57bcca610140957afab571"
            ],
            "explain": "Dựa vào bảng biến thiên ta thấy:<ul><li>Đạo hàm đổi dấu từ dương sang âm khi đi qua $x=-1$, nên hàm số đạt cực đại tại $x_{\\text{CĐ}} = -1$.</li><li>Đạo hàm đổi dấu từ âm sang dương khi đi qua $x=3$, nên hàm số đạt cực tiểu tại $x_{\\text{CT}} = 3$.</li><li>Giá trị cực đại của hàm số là $y_{\\text{CĐ}} = f(-1) = 6$.</li><li>Giá trị cực tiểu của hàm số là $y_{\\text{CT}} = f(3) = -26$.</li></ul>Vậy ta có kết quả ghép nối:<br>- Hàm số $f(x)$ đạt cực đại tại điểm $x_{\\text{CĐ}}=-1$. (Ghép với C)<br>- Hàm số $f(x)$ đạt cực tiểu tại điểm $x_{\\text{CT}}=3$. (Ghép với A)<br>- Giá trị cực đại của hàm số $f(x)$ là $y_{\\text{CĐ}}=6$. (Ghép với E)<br>- Giá trị cực tiểu của hàm số $f(x)$ là $y_{\\text{CT}}=-26$. (Ghép với B)",
            "id": 1767440931715.8206,
            "img": "https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q13-q-1767443175133.png"
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
                "3a3ea00cfc35332cedf6e5e9a32e94da",
                "f623e75af30e62bbd73d6df5b50bb7b5",
                "800618943025315f869e4e1f09471012",
                "9d5ed678fe57bcca610140957afab571"
            ],
            "explain": "<br><div style=\"text-align:center\"><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q14-e-1767443177243.png\" style=\"max-width:100%;border-radius:8px;margin:10px 0\"></div><br>\n- Ta có $CD \\parallel AB \\Rightarrow (CD,SB) = (AB,SB) = \\widehat{SBA}$.<br>Trong tam giác vuông $SAB$: $\\tan \\widehat{SBA} = \\dfrac{SA}{AB} = \\dfrac{2\\sqrt{3}a}{a} = 2\\sqrt{3}$.<br>- Hình chiếu của $S$ lên $(ABCD)$ là $A \\Rightarrow (SC,(ABCD)) = \\widehat{SCA}$.<br>$AC = \\sqrt{AB^2+AD^2} = \\sqrt{a^2+3a^2} = 2a$.<br>$\\tan \\widehat{SCA} = \\dfrac{SA}{AC} = \\dfrac{2\\sqrt{3}a}{2a} = \\sqrt{3}$.<br>- Ta có $\\left\\{\\begin{aligned}& CD \\perp AD \\\\& CD \\perp SA \\\\ \\end{aligned}\\right. \\Rightarrow CD \\perp (SAD)$.<br>Do đó góc nhị diện $[S,CD,A]$ chính là $\\widehat{SDA}$.<br>$\\tan \\widehat{SDA} = \\dfrac{SA}{AD} = \\dfrac{2\\sqrt{3}a}{\\sqrt{3}a} = 2$.<br>- Góc nhị diện $[C,SA,D]$: Vì $SA \\perp (ABCD)$ nên $(SAC) \\perp (ABCD)$ và $(SAD) \\perp (ABCD)$.<br>Giao tuyến của hai mặt phẳng $(SAC)$ và $(SAD)$ là $SA$. Góc phẳng nhị diện là góc giữa $AC$ và $AD$, tức là $\\widehat{CAD}$.<br>$\\tan \\widehat{CAD} = \\dfrac{CD}{AD} = \\dfrac{AB}{AD} = \\dfrac{a}{\\sqrt{3}a} = \\dfrac{\\sqrt{3}}{3}$.",
            "id": 1767440931715.0366
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
                "9d5ed678fe57bcca610140957afab571",
                "7fc56270e7a70fa81a5935b72eacbe29",
                "0d61f8370cad1d412f80b84d143e1257",
                "800618943025315f869e4e1f09471012"
            ],
            "explain": "- Vectơ pháp tuyến là $\\overrightarrow{BC} = (-1;2;-2)$.<br>Phương trình: $-1(x-1) + 2(y+1) - 2(z-0) = 0 \\Leftrightarrow -x+2y-2z+3=0 \\Leftrightarrow x-2y+2z-3=0$.<br>- Vectơ pháp tuyến là $\\vec{n}_P = (2;-1;1)$.<br>Phương trình: $2(x-1) - 1(y+1) + 1(z-0) = 0 \\Leftrightarrow 2x-y+z-3=0$.<br>- Ta có $\\overrightarrow{AB} = (1;1;1)$, $\\overrightarrow{AC} = (0;3;-1)$.<br>Vectơ pháp tuyến $\\vec{n} = [\\overrightarrow{AB}, \\overrightarrow{AC}] = (-4;1;3)$.<br>Phương trình: $-4(x-1) + 1(y+1) + 3(z-0) = 0 \\Leftrightarrow -4x+y+3z+5=0 \\Leftrightarrow 4x-y-3z-5=0$.<br>- Vectơ pháp tuyến $\\vec{n} = [\\overrightarrow{AB}, \\vec{n}_P] = \\left( \\begin{vmatrix} 1 & 1 \\\\ -1 & 1 \\end{vmatrix}; \\begin{vmatrix} 1 & 1 \\\\ 1 & 2 \\end{vmatrix}; \\begin{vmatrix} 1 & 1 \\\\ 2 & -1 \\end{vmatrix} \\right) = (2;1;-3)$.<br>Phương trình: $2(x-1) + 1(y+1) - 3(z-0) = 0 \\Leftrightarrow 2x+y-3z-1=0$.",
            "id": 1767440931715.39
        },
        {
            "type": "match",
            "q": "Trong không gian $Oxyz$, cho điểm $M(0;0;4)$ và hai đường thẳng $d_1\\colon \\left\\{\\begin{aligned}&x=2-t\\\\&y=3\\\\&z=-1+t\\\\\\end{aligned}\\right.$, $d_2\\colon \\left\\{\\begin{aligned}&x=3+t'\\\\&y=2-t'\\\\&z=-1\\\\\\end{aligned}\\right.$ cắt nhau tại $A$. Một đường thẳng $d_3$ đi qua $M$ cắt $d_1$ và $d_2$ lần lượt tại $B(a;b;c)$ và $C$ sao cho tam giác $ABC$ đều.",
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
                "7fc56270e7a70fa81a5935b72eacbe29",
                "9d5ed678fe57bcca610140957afab571",
                "0d61f8370cad1d412f80b84d143e1257",
                "f623e75af30e62bbd73d6df5b50bb7b5"
            ],
            "explain": "Xét hệ phương trình giao điểm của $d_1$ và $d_2$:<br>$\\left\\{\\begin{aligned}& 2-t = 3+t' \\\\& 3 = 2-t' \\\\& -1+t = -1 \\\\ \\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}& t=0 \\\\& t'=-1 \\\\ \\end{aligned}\\right.$.<br>Thay $t=0$ vào $d_1$ ta được tọa độ $A(2;3;-1)$.<br><br>Vì $B \\in d_1 \\Rightarrow B(2-m; 3; -1+m)$ và $C \\in d_2 \\Rightarrow C(3+n; 2-n; -1)$.<br>Ta có $M$, $B$, $C$ thẳng hàng và $\\triangle ABC$ đều (suy ra $AB=AC$).<br>Thử các đáp án từ cột phải để tìm tọa độ phù hợp:<br>Kiểm tra $B(0;3;1)$ (ứng với $m=2$) $\\in d_1$ và $C(0;5;-1)$ (ứng với $n=-3$) $\\in d_2$.<br>Khi đó:<br>$\\overrightarrow{MB} = (0;3;-3)$,<br> $\\overrightarrow{MC} = (0;5;-5)$.<br>Ta thấy $\\overrightarrow{MC} = \\dfrac{5}{3}\\overrightarrow{MB} \\Rightarrow M, B, C$ thẳng hàng.<br>Kiểm tra tam giác đều:<br>$AB= \\sqrt{8}$; $AC= \\sqrt{8}$;\t$BC= \\sqrt{8}$.<br>Vậy $AB=BC=CA$, tam giác $ABC$ đều.<br>- Tọa độ điểm $A(2;3;-1)$.<br>- Đường thẳng $d_3$ đi qua $B$, $C$ nên có VTCP $\\overrightarrow{u} = \\dfrac{1}{2}\\overrightarrow{BC} = \\dfrac{1}{2}(0;2;-2) = (0;1;-1)$.<br>- Tọa độ điểm $B(0;3;1)$.<br>- Tọa độ điểm $C(0;5;-1)$.",
            "id": 1767440931715.3396
        },
        {
            "type": "match",
            "q": "Cho hàm số $y=f(x)$, với $f(x)$ là đa thức bậc bốn, có đồ thị hàm số $y=f'(x)$ như hình vẽ. Đặt $g(x)=f(-x^2+3x-m)$.<br>[IMG]",
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
                "0d61f8370cad1d412f80b84d143e1257",
                "7fc56270e7a70fa81a5935b72eacbe29",
                "9d5ed678fe57bcca610140957afab571",
                "d41d8cd98f00b204e9800998ecf8427e"
            ],
            "explain": "Ta có $g'(x) = (-2x+3)f'(-x^2+3x-m)$.<br>$$g'(x)=0 \\Leftrightarrow \\left[\\begin{aligned}& -2x+3=0 \\Rightarrow x=\\dfrac{3}{2} \\\\ & f'(-x^2+3x-m)=0.\\\\ \\end{aligned}\\right.$$<br>Dựa vào đồ thị $f'(x)$, ta có $f'(u)=0 \\Leftrightarrow u \\in \\{-1; 1; 4\\}$.<br>Khi đó $g'(x)=0 \\Leftrightarrow \\left[\\begin{aligned}& x=1{,}5 \\\\ & -x^2+3x-m = -1 & (1) \\\\ & -x^2+3x-m = 1 & (2) \\\\ & -x^2+3x-m = 4. & (3)\\\\ \\end{aligned}\\right.$\n<br>Xét parabol $h(x) = -x^2+3x-m$. \nĐỉnh tại $x=1{,}5$, giá trị lớn nhất $h(1{,}5) = \\dfrac{9}{4}-m$.\n<br><div style=\"text-align:center\"><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q17-e-1767443179689.png\" style=\"max-width:100%;border-radius:8px;margin:10px 0\"></div><br>\n- Với $m=1$, ta có $h(1{,}5) = 1{,}25$.\n<br>PT (1) trở thành $-x^2+3x = 0 \\Rightarrow 2$ nghiệm.\n<br>PT (2) trở thành $-x^2+3x-2 = 0 \\Rightarrow 2$ nghiệm.\n<br>PT (3) trở thành $-x^2+3x-5 = 0$ (vô nghiệm vì đỉnh $1{,}25 < 4$).<br>Tổng số nghiệm bội lẻ là $1 + 2 + 2 = 5$. Vậy có 5 điểm cực trị.\n\n<br>- Để có đúng 3 cực trị: Cần 1 nghiệm $x=1{,}5$ và 2 nghiệm từ các PT trên.\n<br>Điều kiện: $-1 < \\max h(x) \\le 1 \\Leftrightarrow -1 < \\dfrac{9}{4}-m \\le 1 \\Leftrightarrow \\dfrac{5}{4} \\le m < \\dfrac{13}{4}$.\n<br>Do $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{2; 3\\}$. Có 2 giá trị.\n\n<br>- Để có đúng 5 cực trị: Điều kiện $1 < \\max h(x) \\le 4 \\Leftrightarrow 1 < \\dfrac{9}{4}-m \\le 4 \\Leftrightarrow -\\dfrac{7}{4} \\le m < \\dfrac{5}{4}$.\n<br>Do $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{-1; 0; 1\\}$. Có 3 giá trị.\n\n<br>- Để có đúng 7 cực trị: Điều kiện $\\max h(x) > 4 \\Leftrightarrow \\dfrac{9}{4}-m > 4 \\Leftrightarrow m < -\\dfrac{7}{4} = -1{,}75$.\n<br>Trong khoảng $(-2; 5)$, không có số nguyên nào nhỏ hơn $-1{,}75$. (Kết quả là $0$ giá trị, nhưng không có đáp án $0$ trong cột phải để ghép).",
            "id": 1767440931715.0452
        },
        {
            "type": "short",
            "q": "Cho $\\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x = -3$ và $\\displaystyle\\int\\limits_0^1 g(x)\\mathrm{\\,d}x = 2$. Tính $\\displaystyle\\int\\limits_0^1 [f(x)+2g(x)]\\mathrm{\\,d}x$.",
            "ans": "c4ca4238a0b923820dcc509a6f75849b",
            "explain": "Ta có: $\\displaystyle\\int\\limits_0^1 [f(x)+2g(x)]\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x + 2\\displaystyle\\int\\limits_0^1 g(x)\\mathrm{\\,d}x = -3 + 2(2) = 1$.",
            "id": 1767440931715.7732
        },
        {
            "type": "short",
            "q": "Cho các số thực dương $a$, $b$, $c$ thỏa mãn $\\log_a b = 3$ và $\\log_c a = -\\dfrac{1}{2}$. Tính giá trị của biểu thức $P = \\log_{ac}(a^2bc)$.",
            "ans": "b3149ecea4628efd23d2f86e5a723472",
            "explain": "Ta có $\\log_c a = -\\dfrac{1}{2} \\Rightarrow \\log_a c = -2$.\nChuyển sang cơ số $a$:$$P = \\dfrac{\\log_a (a^2bc)}{\\log_a (ac)} = \\dfrac{2 + \\log_a b + \\log_a c}{1 + \\log_a c}$$\nThay số:$$P = \\dfrac{2 + 3 + (-2)}{1 + (-2)} = \\dfrac{3}{-1} = -3.$$",
            "id": 1767440931715.5168
        },
        {
            "type": "short",
            "q": "Một người đàn ông đang ở vị trí điểm $A$ trên bờ một đoạn sông thẳng, rộng $300m$ và muốn đến điểm $B$, ở bờ đối diện, xuôi về phía hạ lưu $2km$ (xem hình vẽ). Biết người này có một chiếc thuyền, với vận tốc trung bình khi chèo thuyền trên đoạn sông này là $6km/h$. Nhưng nếu có thể lên bờ và chạy bộ thì vận tốc trung bình mà anh ta có thể đạt được là $8km/h$. Hãy tính thời gian nhanh nhất mà anh ta có thể đạt được để di chuyển từ $A$ đến $B$, theo đơn vị phút( làm tròn tới hàng phần trăm).<br><br>",
            "ans": "e570e5af5d163528a061ea3fde6bf866",
            "explain": "Đổi đơn vị: $300m = 0{,}3km$.\nGọi $C$ là điểm người đó cập bến ở bờ đối diện. Đặt khoảng cách từ hình chiếu của $A$ bên bờ đối diện đến $C$ là $x$ ($km$), điều kiện $0 \\le x \\le 2$.\nQuãng đường chèo thuyền: $S_1 = \\sqrt{0{,}3^2 + x^2} = \\sqrt{0{,}09 + x^2}$.\\\\Quãng đường chạy bộ: $S_2 = 2 - x$.\nTổng thời gian di chuyển: \n$T(x) = \\dfrac{\\sqrt{x^2+0{,}09}}{6} + \\dfrac{2-x}{8}$.\nTa có $T'(x) = \\dfrac{x}{6\\sqrt{x^2+0{,}09}} - \\dfrac{1}{8}$.\n$T'(x) = 0 \\Leftrightarrow \\dfrac{x}{\\sqrt{x^2+0{,}09}} = \\dfrac{3}{4} \\Leftrightarrow 16x^2 = 9(x^2+0{,}09)$\n$\\Leftrightarrow 7x^2 = 0{,}81 \\Leftrightarrow x = \\dfrac{0{,}9}{\\sqrt{7}}$.\nKhi đó thời gian ngắn nhất là:$$T_{\\min} = T\\left(\\dfrac{0{,}9}{\\sqrt{7}}\\right) = \\dfrac{1}{4} + \\dfrac{\\sqrt{7}}{80} \\text{ (giờ)}.$$\nĐổi ra phút:$$T_{\\text{phút}} = 60 \\cdot \\left(\\dfrac{1}{4} + \\dfrac{\\sqrt{7}}{80}\\right) = 15 + \\dfrac{3\\sqrt{7}}{4} \\approx 16{,}98 \\text{ (phút)}.$$",
            "id": 1767440931715.7256,
            "img": "https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/2-Vsat-Deminhhoa-2025-q20-q-1767443182237.png"
        },
        {
            "type": "short",
            "q": "Mỗi khi đi nghỉ mát anh An luôn dự định chạy bộ vào mỗi buổi sáng. Tuy nhiên, đôi khi anh ngủ suốt buổi sáng. Xác suất để anh An chạy bộ vào buổi sáng thứ nhất là $90\\%$. Sau đó, xác suất để anh ta chạy bộ ở mỗi buổi sáng còn lại là $70\\%$ nếu anh ta chạy bộ vào buổi sáng hôm liền trước và $80\\%$ nếu anh ta không chạy bộ vào buổi sáng hôm liền trước. Tính xác suất (đơn vị: %) để anh An chạy bộ vào buổi sáng ngày thứ hai của kì nghỉ mát.",
            "ans": "e2c420d928d4bf8ce0ff2ec19b371514",
            "explain": "Gọi $A_1$ là biến cố anh An chạy bộ sáng thứ nhất, $A_2$ là biến cố anh An chạy bộ sáng thứ hai.\nTheo đề bài: $\\mathrm{P}(A_1) = 0{,}9 \\Rightarrow \\mathrm{P}(\\overline{A_1}) = 0{,}1$.\nXác suất có điều kiện: $\\mathrm{P}(A_2 | A_1) = 0{,}7$ và $\\mathrm{P}(A_2 | \\overline{A_1}) = 0{,}8$ (vì nếu không chạy hôm trước thì xác suất chạy hôm sau là $80\\%$).\nÁp dụng công thức xác suất đầy đủ:$$\\mathrm{P}(A_2) = \\mathrm{P}(A_1)\\cdot\\mathrm{P}(A_2 | A_1) + \\mathrm{P}(\\overline{A_1})\\cdot\\mathrm{P}(A_2 | \\overline{A_1})$$\n$$\\mathrm{P}(A_2) = 0{,}9 \\cdot 0{,}7 + 0{,}1 \\cdot 0{,}8 = 0{,}63 + 0{,}08 = 0{,}71.$$\nVậy xác suất là $71\\%$.",
            "id": 1767440931715.1162
        },
        {
            "type": "short",
            "q": "Trong không gian $Oxyz$, cho khối đa diện $(H)$ là tập hợp tất cả các điểm $M(x;y;z)$ thỏa mãn $|x|+|y|+|z| \\le 6$ và $|x|+|y|+|z-2| \\le 6$. Tính thể tích khối đa diện $(H)$.( Kết quả làm tròn đến hàng đơn vị)",
            "ans": "5878a7ab84fb43402106c575658472fa",
            "explain": "Khối $(H)$ là phần chung của hai khối bát diện đều:\n$V_1\\colon |x|+|y|+|z| \\le 6$ (Tâm $O(0;0;0)$, trục đối xứng $Oz$).\n$V_2\\colon |x|+|y|+|z-2| \\le 6$ (Tâm $I(0;0;2)$, trục đối xứng $Oz$).\nGiao của hai khối này đối xứng qua mặt phẳng $z=1$ (trung điểm của đoạn nối hai tâm).\nTại mỗi cao độ $z$, thiết diện ngang là hình vuông có diện tích $S(z) = 2r^2(z)$, với $r(z)$ là bán kính thu hẹp.\nTa xét nửa dưới từ $z=-4$ đến $z=1$ (đối xứng với phần từ $z=1$ đến $z=6$).\nTại $z \\in [-4; 1]$, bán kính bị chặn bởi khối $V_2$: $r(z) = 6 - |z-2|$.\nVì $z \\le 1 < 2$ nên $|z-2|=2-z \\Rightarrow r(z) = 6-(2-z) = 4+z$.\nDiện tích thiết diện: $S(z) = 2(4+z)^2$.\nThể tích phần dưới: $\\displaystyle\\int\\limits_{-4}^1 2(4+z)^2 \\mathrm{\\,d}z$. Đặt $t=4+z \\Rightarrow \\displaystyle\\int\\limits_{0}^5 2t^2 \\mathrm{\\,d}t = \\dfrac{2t^3}{3}\\Big|_0^5 = \\dfrac{250}{3}$.\nDo tính đối xứng, thể tích phần trên bằng thể tích phần dưới.\nVậy $V_{(H)} = 2 \\cdot \\dfrac{250}{3} = \\dfrac{500}{3}\\approx 167$.",
            "id": 1767440931715.878
        }
    ]
};