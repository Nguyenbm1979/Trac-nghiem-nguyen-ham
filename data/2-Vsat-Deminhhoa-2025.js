window.EXAM_DATA = {
    "title": "Đề Thi Minh Họa VSAT, Năm 2025, Full",
    "subject": "Toan",
    "grade": "12",
    "time": 90,
    "password": "2afba7e5bf6e676c5798e444f8b1b261",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": true,
    "music": true,
    "allowPrint": false,
    "minTime": 50,
    "start": "2026-01-05T21:15",
    "end": "2026-01-25T21:15",
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
            "q": "Cho dãy số $(u_n)$ biết $u_n = 2n+3, \\forall n \\in \\mathbb{N}^*$.",
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
            "explain": "<ul><li><b>Đúng.</b> Ta có $u_{n+1}-u_n = [2(n+1)+3] - (2n+3) = 2$ (hằng số) nên dãy số là cấp số cộng với công sai $d=2$.</li><li><b>Đúng.</b> Vì $d=2 > 0$ nên dãy số là dãy tăng.</li><li><b>Đúng.</b> Với mọi $n \\in \\mathbb{N}^*$ (tức $n \\ge 1$), ta có $u_n = 2n+3 \\ge 2(1)+3 = 5$. Vậy dãy bị chặn dưới bởi $5$.</li><li><b>Sai.</b> Vì $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$ nên dãy số không bị chặn trên.</li></ul>",
            "point": "1"
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
            "explain": "Tập xác định: $\\mathscr{D} = \\mathbb{R} \\setminus \\{-1\\}$.<ul><li><b>Sai.</b> Vì $\\lim\\limits_{x \\to -1^+} y = -\\infty$ nên tiệm cận đứng là đường thẳng $x=-1$.</li><li><b>Đúng.</b> Vì $\\lim\\limits_{x \\to \\pm\\infty} y = 2$ nên tiệm cận ngang là đường thẳng $y=2$.</li><li><b>Đúng.</b> Xét phương trình $y=-1 \\Leftrightarrow \\dfrac{2x-1}{x+1} = -1  \\Leftrightarrow x=0$ (thỏa mãn ĐK). Vậy điểm $(0;-1)$ thuộc $(C)$.</li><li><b>Sai.</b> Xét phương trình $y=0 \\Leftrightarrow \\dfrac{2x-1}{x+1} = 0  \\Leftrightarrow x=\\dfrac{1}{2}$ (thỏa mãn ĐK). Vậy $(C)$ có điểm có tung độ bằng $0$.</li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$ cho đường thẳng $(d): \\left\\{\\begin{aligned}&x=1-2t\\\\&y=3+t\\\\&z=2\\\\\\end{aligned}\\right.$.",
            "items": [
                {
                    "sub": "Một véc-tơ chỉ phương của đường thẳng $(d)$ là $\\vec{u}(-2;1;2)$",
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
            "explain": "Đường thẳng $(d)$ đi qua điểm $M_0(1;3;2)$ và có véc-tơ chỉ phương $\\overrightarrow{u}_d = (-2;1;0)$.<ul><li><b>Sai.</b> Véc-tơ chỉ phương là $\\overrightarrow{u}_d = (-2;1;0) \\neq (-2;1;2)$.</li><li><b>Đúng.</b> Thay $t=0$ vào phương trình tham số ta được tọa độ $(1;3;2)$, trùng với điểm $M$.</li><li><b>Đúng.</b> Trục $Oz$ có véc-tơ đơn vị $\\overrightarrow{k}=(0;0;1)$. Ta có $\\overrightarrow{u}_d \\cdot \\overrightarrow{k} = -2 \\cdot 0 + 1 \\cdot 0 + 0 \\cdot 1 = 0$. Suy ra $(d) \\perp Oz$.</li><li><b>Đúng.</b> Trục $Oy$ có véc-tơ đơn vị $\\overrightarrow{j}=(0;1;0)$.<br>Ta có $\\cos \\alpha = \\dfrac{|\\overrightarrow{u}_d \\cdot \\overrightarrow{j}|}{|\\overrightarrow{u}_d| \\cdot |\\overrightarrow{j}|}= \\dfrac{1}{\\sqrt{5}}$.</li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Bảng sau đây tóm tắt kết quả phân tích quá trình tự phân hủy (sự phá hủy tế bào sau khi tế bào chết do hoạt động của các enzym của chính tế bào) và sự thối rữa (sự phân hủy chất hữu cơ, đặc biệt là protein, bởi vi sinh vật dẫn đến tạo ra mùi hôi thối) của các con bọ cánh cứng chết:<br>Chọn ngẫu nhiên một con bọ cánh cứng trong các mẫu phân tích trên.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765122662_769.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 80%;\"><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765122662_769.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
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
            "explain": "Tổng số mẫu: $n(\\Omega) = 14 + 59 + 18 + 9 = 100$.<br>Gọi biến cố $A$: \"Tự phân hủy cao\", $B$: \"Thối rữa cao\".<br>Ta có bảng số liệu:<ul><li>$n(A) = 14 + 18 = 32$.</li><li>$n(B) = 14 + 59 = 73$.</li><li>$n(\\overline{B})$ (Thối rữa thấp) $= 18 + 9 = 27$.</li><li>$n(A \\cap \\overline{B})$ (Tự phân hủy cao và Thối rữa thấp) $= 18$.</li><li>$n(A \\cap B)$ (Tự phân hủy cao và Thối rữa cao) $= 14$.</li></ul><ul><li><b>Sai.</b> $P(A) = \\dfrac{32}{100} = \\dfrac{8}{25}$. (Đề bài ghi $\\dfrac{7}{50}$).</li><li><b>Đúng.</b> $P(A \\cap \\overline{B}) = \\dfrac{18}{100} = \\dfrac{9}{50}$.</li><li><b>Đúng.</b> Xác suất cần tính là xác suất có điều kiện: $P(\\overline{B} | A) = \\dfrac{n(A \\cap \\overline{B})}{n(A)} = \\dfrac{18}{32} = \\dfrac{9}{16}$.</li><li><b>Đúng.</b> Xác suất cần tính là xác suất có điều kiện: $P(A | B) = \\dfrac{n(A \\cap B)}{n(B)} = \\dfrac{14}{73}$.</li></ul>",
            "point": "1"
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
            "explain": "<ul><li><b>Đúng.</b> Vì $(x^2)' = 2x$.</li><li><b>Đúng.</b> Vì $(\\sin x)' = \\cos x$.</li><li><b>Đúng.</b> Ta có $\\displaystyle\\int x\\sqrt{x} \\mathrm{\\,d}x = \\displaystyle\\int x \\cdot x^{\\frac{1}{2}} \\mathrm{\\,d}x = \\displaystyle\\int x^{\\frac{3}{2}} \\mathrm{\\,d}x$<br>$= \\dfrac{x^{\\frac{3}{2}+1}}{\\frac{3}{2}+1} + C = \\dfrac{2}{5}x^{\\frac{5}{2}} + C = \\dfrac{2}{5}\\sqrt{x^5} + C = \\dfrac{2x^2\\sqrt{x}}{5} + C$.</li><li><b>Sai.</b> Ta có $\\displaystyle\\int \\cot^2 x \\mathrm{\\,d}x = \\displaystyle\\int \\left(\\dfrac{1}{\\sin^2 x} - 1\\right) \\mathrm{\\,d}x = -\\cot x - x + C$. (Đề bài thiếu dấu trừ trước $\\cot x$).</li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$ cho mặt cầu $(S): x^2+y^2+z^2-4x+10y-2z+14=0$ và hai điểm $A(3;-4;4)$, $B(5;-2;4)$.",
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
                    "sub": "Phương trình mặt cầu tâm $A$ và đi qua điểm $B$ là $(x-3)^2+(y+4)^2+(z-4)^2=4$",
                    "ans": "F"
                },
                {
                    "sub": "Phương trình mặt cầu đường kính $AB$ là $(x-4)^2+(y+3)^2+(z-4)^2=2$",
                    "ans": "T"
                }
            ],
            "explain": "Phương trình mặt cầu $(S)$ có dạng $x^2+y^2+z^2-2ax-2by-2cz+d=0$ với $a=2, b=-5, c=1, d=14$.<ul><li><b>Đúng.</b> Tâm $I(2;-5;1)$. Bán kính $R = \\sqrt{a^2+b^2+c^2-d} =  = 4$.</li><li><b>Sai.</b> Ta tính độ dài $IA = \\sqrt{11}$.<br>Vì $IA = \\sqrt{11} < R = 4$ nên điểm $A$ nằm trong mặt cầu $(S)$.</li><li><b>Sai.</b> Mặt cầu tâm $A$ đi qua $B$ có bán kính $R' = AB =  \\sqrt{8}$.<br>Phương trình là: $(x-3)^2+(y+4)^2+(z-4)^2 = 8$.</li><li><b>Đúng.</b> Gọi $J$ là trung điểm $AB$, ta có $J(4;-3;4)$.<br>Bán kính $R'' = \\dfrac{AB}{2} = \\sqrt{2}$.<br>Phương trình mặt cầu đường kính $AB$ là: $(x-4)^2+(y+3)^2+(z-4)^2 = 2$.</li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Nhiệt độ $T\\,^\\circ\\text{C}$ của nước trong ấm đặt trên bếp được xác định theo công thức $T=95-75\\mathrm{e}^{-t},\\ t \\ge 0$, trong đó $t$ (phút) là thời gian tính từ lúc bếp được bật lên. Khi nước trong ấm đạt $85^\\circ\\text{C}$ thì bếp được tắt đi và nhiệt độ $T\\,^\\circ\\text{C}$ của nước trong ấm được xác định theo công thức $T=15+A\\mathrm{e}^{-\\frac{t}{20}},\\ t \\ge 0$, trong đó $A$ là hằng số và $t$ (phút) là thời gian tính từ lúc tắt bếp.",
            "items": [
                {
                    "sub": "Nhiệt độ ban đầu của nước trong ấm là $20^\\circ\\text{C}$",
                    "ans": "T"
                },
                {
                    "sub": "Ta có $A = 85$",
                    "ans": "F"
                },
                {
                    "sub": "Sau khoảng $2$ phút (làm tròn đến hàng đơn vị) kể từ lúc bật bếp thì nước trong ấm đạt $85^\\circ\\text{C}$",
                    "ans": "T"
                },
                {
                    "sub": "Sau khoảng $21$ phút (làm tròn đến hàng đơn vị) kể từ lúc bật bếp thì nhiệt độ của nước trong ấm giảm xuống tới $40^\\circ\\text{C}$",
                    "ans": "F"
                }
            ],
            "explain": "<ul><li><b>Đúng.</b> Nhiệt độ ban đầu ứng với $t=0$. Thay $t=0$ vào công thức giai đoạn đun nước:<br>$T = 95 - 75\\mathrm{e}^0 = 95 - 75 = 20^\\circ\\text{C}$.</li><li><b>Sai.</b> Khi tắt bếp, nước đạt $85^\\circ\\text{C}$. Đây là thời điểm bắt đầu của giai đoạn tắt bếp ($t=0$ của công thức thứ hai).<br>Thay $t=0$ và $T=85$ vào công thức thứ hai:<br>$85 = 15 + A\\mathrm{e}^0 \\Leftrightarrow A = 70$.</li><li><b>Đúng.</b> Để nước đạt $85^\\circ\\text{C}$ trong giai đoạn bật bếp:<br>$95 - 75\\mathrm{e}^{-t} = 85  \\Rightarrow t = -\\ln\\left(\\dfrac{2}{15}\\right) \\approx 2{,}01$ (phút).<br>Làm tròn đến hàng đơn vị là $2$ phút.</li><li><b>Sai.</b> <br>Với $A=70$, công thức giai đoạn tắt bếp là: $T = 15 + 70\\mathrm{e}^{-\\frac{t}{20}}$.<br>Khi nhiệt độ giảm xuống $40^\\circ\\text{C}$:<br>$40 = 15 + 70\\mathrm{e}^{-\\frac{t}{20}} \\Leftrightarrow -\\dfrac{t}{20} = \\ln\\left(\\dfrac{5}{14}\\right) \\Rightarrow t \\approx 20{,}59$ (phút).<br>Thời gian này tính từ lúc tắt bếp.<br>Tổng thời gian kể từ lúc bật bếp là: $t_{\\text{tổng}} = t_{\\text{đun}} + t_{\\text{nguội}} \\approx= 22{,}6$ (phút).<br>Làm tròn đến hàng đơn vị là $23$ phút (không phải $21$ phút).</li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang vuông tại $A$, $B$, $SA$ vuông góc với mặt phẳng đáy và $SA=AB=BC=a$, $AD=2a$.",
            "items": [
                {
                    "sub": "Thể tích khối chóp $S.ABCD$ bằng $\\dfrac{3a^3}{2}$",
                    "ans": "F"
                },
                {
                    "sub": "Đường thẳng $SC$ tạo với mặt phẳng $(ABCD)$ một góc bằng $45^\\circ$",
                    "ans": "F"
                },
                {
                    "sub": "Khoảng cách từ điểm $A$ đến đường thẳng $CD$ bằng $\\sqrt{2}a$",
                    "ans": "T"
                },
                {
                    "sub": "Khoảng cách từ điểm $B$ đến mặt phẳng $(SCD)$ bằng $\\dfrac{\\sqrt{5}a}{5}$",
                    "ans": "F"
                }
            ],
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765154288_154.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 80%;\">\n<ul><li><b>Sai.</b> Diện tích đáy $S_{ABCD} = \\dfrac{(BC+AD)AB}{2} = \\dfrac{(a+2a)a}{2} = \\dfrac{3a^2}{2}$.<br>Thể tích $V = \\dfrac{1}{3} \\cdot SA \\cdot S_{ABCD} = \\dfrac{1}{3} \\cdot a \\cdot \\dfrac{3a^2}{2} = \\dfrac{a^3}{2}$.</li><li><b>Sai.</b> Hình chiếu của $S$ lên $(ABCD)$ là $A$. Góc giữa $SC$ và đáy là $\\widehat{SCA}$.<br>$AC = \\sqrt{AB^2+BC^2} = a\\sqrt{2}$. $\\tan \\widehat{SCA} = \\dfrac{SA}{AC} = \\dfrac{a}{a\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}} \\neq 1 \\Rightarrow \\widehat{SCA} \\neq 45^\\circ$.</li><li><b>Đúng.</b> Gọi $H$ là hình chiếu của $C$ lên $AD$. Vì $ABCD$ là hình thang vuông nên $ABCH$ là hình vuông cạnh $a \\Rightarrow HD= a$.<br>Tam giác $CHD$ vuông cân tại $H$ ($CH=HD=a$) nên $\\widehat{CDH} = 45^\\circ$.<br>Trong mặt phẳng đáy, $\\mathrm{d}(A, CD) = AC$ (do $\\triangle ADC$ có $ AC \\perp CD$).<br>Vậy $\\mathrm{d}(A, CD) = AC = a\\sqrt{2}$.</li><li><b>Sai.</b> Ta có $V_{S.BCD} = \\dfrac{1}{3} \\cdot SA \\cdot S_{BCD} = \\dfrac{1}{3} \\cdot a \\cdot \\dfrac{1}{2}a^2 = \\dfrac{a^3}{6}$.<br>Ta có $CD \\perp AC$ và $CD \\perp SA \\Rightarrow CD \\perp (SAC) \\Rightarrow CD \\perp SC$.<br>Tam giác $SCD$ vuông tại $C$: $S_{SCD} = \\dfrac{1}{2} SC \\cdot CD = \\dfrac{1}{2} \\cdot a\\sqrt{3} \\cdot a\\sqrt{2} = \\dfrac{a^2\\sqrt{6}}{2}$.<br>vậy $\\mathrm{d}(B, (SCD)) = \\dfrac{3V_{S.BCD}}{S_{SCD}} =\\dfrac{a}{\\sqrt{6}}$.</li></ul><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765154288_154.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\">",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Trong đại dịch Covid-19 người ta thường dùng xét nghiệm RT-PCR để xác định người bị nhiễm virus. Biết rằng trong xét nghiệm RT-PCR tỉ lệ dương tính giả là $5\\%$ và tỉ lệ âm tính giả là $13\\%$ và tỉ lệ mắc bệnh của vùng dân cư là $5\\%$.",
            "items": [
                {
                    "sub": "Tỉ lệ dương tính thật bằng $95\\%$",
                    "ans": "F"
                },
                {
                    "sub": "Tỉ lệ xét nghiệm RT-PCR có kết quả dương tính là $9,1\\%$",
                    "ans": "T"
                },
                {
                    "sub": "Tỉ lệ người nhiễm virus trong những người có kết quả xét nghiệm RT-PCR dương tính khoảng $47,8\\%$",
                    "ans": "T"
                },
                {
                    "sub": "Tỉ lệ người không nhiễm virus trong những người có kết quả xét nghiệm RT-PCR âm tính khoảng $90,9\\%$",
                    "ans": "F"
                }
            ],
            "explain": "Gọi $D$ là biến cố mắc bệnh ($P(D)=0{,}05$), $H$ là không mắc bệnh ($P(H)=0{,}95$).<br>Gọi $+$ là kết quả dương tính, $-$ là kết quả âm tính.<br>Theo đề: Dương tính giả $P(+\\mid H) = 0{,}05$; Âm tính giả $P(-\\mid D) = 0{,}13$.<br>Suy ra $P(+\\mid D) = 1 - 0{,}13 = 0{,}87$ (Độ nhạy).<ul><li><b>Sai.</b> Tỉ lệ dương tính thật (Sensitivity) là $P(+\\mid D) = 87\\%$.</li><li><b>Đúng.</b> $P(+) = P(+\\mid D)P(D) + P(+\\mid H)P(H) = 0{,}87 \\cdot 0{,}05 + 0{,}05 \\cdot 0{,}95 = 0{,}0435 + 0{,}0475 = 0{,}091 = 9{,}1\\%$.</li><li><b>Đúng.</b> Giá trị dự đoán dương (PPV): $P(D\\mid +) = \\dfrac{P(+\\mid D)P(D)}{P(+)} = \\dfrac{0{,}0435}{0{,}091} \\approx 0{,}478 = 47{,}8\\%$.</li><li><b>Sai.</b> Giá trị dự đoán âm (NPV): $P(H\\mid -) = \\dfrac{P(-\\mid H)P(H)}{P(-)}$.<br>Ta có $P(-\\mid H) = 1 - P(+\\mid H) = 0{,}95$. $P(-) = 1 - P(+) = 1 - 0{,}091 = 0{,}909$.<br>Vậy $P(H\\mid -) = \\dfrac{0{,}95 \\cdot 0{,}95}{0{,}909} = \\dfrac{0{,}9025}{0{,}909} \\approx 0{,}9928 = 99{,}28\\%$.</li></ul>",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Một vật di chuyển trên một đường thẳng. Tại thời điểm $t$ giây sau khi bắt đầu di chuyển từ điểm $O$ trên đường thẳng, vật có gia tốc $a(t) = -0{,}8t + 4$ ($m/s^2$). Tìm gia tốc cực đại, đơn vị $m/s^2$, của vật trong khoảng thời gian từ $1$ tới $3$ giây.",
            "options": [
                "$3{,}2$",
                "$2{,}6$",
                "$4{,}8$",
                "$6{,}4$"
            ],
            "ans": 0,
            "explain": "Hàm $a(t) = -0{,}8t + 4$ là hàm bậc nhất có hệ số góc âm nên nghịch biến trên $\\mathbb{R}$.<br>Do đó, trên đoạn $[1; 3]$, gia tốc đạt giá trị cực đại tại đầu mút trái $t=1$.<br>$a_{\\max} = a(1) = -0{,}8(1) + 4 = 3{,}2$ ($m/s^2$).",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Một vật di chuyển trên một đường thẳng. Tại thời điểm $t$ giây sau khi bắt đầu di chuyển từ điểm $O$ trên đường thẳng, vật có gia tốc $a(t) = -0{,}8t + 4$, ($m/s^2$). Tốc độ của vật giảm trong khoảng thời gian nào dưới đây?",
            "options": [
                "$[5; 6]$",
                "$[2; 4]$",
                "$[4; 5]$",
                "$[1; 3]$"
            ],
            "ans": 0,
            "explain": "Vận tốc của vật là $v(t) = \\displaystyle\\int a(t) \\mathrm{\\,d}t = \\displaystyle\\int (-0{,}8t+4) \\mathrm{\\,d}t = -0{,}4t^2 + 4t + C$.<br>Do vật bắt đầu di chuyển từ $O$ (giả sử vận tốc đầu $v(0)=0$), ta có $v(t) = -0{,}4t^2+4t$.<br>Vật chuyển động chậm dần (tốc độ giảm) khi tích $a(t) \\cdot v(t) < 0$.<br>Xét dấu:<ul><li>$v(t) = -0{,}4t(t-10)$. $v(t) > 0$ khi $t \\in (0; 10)$ và $v(t) < 0$ khi $t > 10$.</li><li>$a(t) = -0{,}8t+4$. $a(t) > 0$ khi $t < 5$ và $a(t) < 0$ khi $t > 5$.</li></ul>Xét các khoảng:<ul><li>Trong khoảng $(0; 5)$: $v>0, a>0 \\Rightarrow$ Tăng tốc.</li><li>Trong khoảng $(5; 10)$: $v>0, a<0 \\Rightarrow$ Giảm tốc.</li></ul>Vậy trong khoảng $[5; 6]$ tốc độ của vật giảm.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Một vật di chuyển trên một đường thẳng. Tại thời điểm $t$ giây sau khi bắt đầu di chuyển từ điểm $O$ trên đường thẳng, vật có gia tốc $a(t) = -0{,}8t + 4$, ($m/s^2$). Tính độ dài quãng đường, đơn vị $m$, mà vật di chuyển được trong khoảng thời gian từ $5$ giây tới $11$ giây (làm tròn kết quả đến hàng phần chục).",
            "options": [
                "$35{,}5$",
                "$31{,}2$",
                "$33{,}3$",
                "$37{,}4$"
            ],
            "ans": 0,
            "explain": "Quãng đường vật đi được từ $t=5$ đến $t=11$ là $S = \\displaystyle\\int\\limits_{5}^{11} |v(t)| \\mathrm{\\,d}t = \\displaystyle\\int\\limits_{5}^{11} |-0{,}4t^2+4t| \\mathrm{\\,d}t$.<br>Ta thấy $v(t) \\ge 0$ trên $[5; 10]$ và $v(t) \\le 0$ trên $[10; 11]$.<br>$S = \\displaystyle\\int\\limits_{5}^{10} (-0{,}4t^2+4t) \\mathrm{\\,d}t + \\displaystyle\\int\\limits_{10}^{11} -(-0{,}4t^2+4t) \\mathrm{\\,d}t$.<br>Tính tích phân:<ul><li>$I_1 = \\left[ -\\dfrac{0{,}4t^3}{3} + 2t^2 \\right]_5^{10} = \\left(-\\dfrac{400}{3} + 200\\right) - \\left(-\\dfrac{50}{3} + 50\\right) = \\dfrac{200}{3} - \\dfrac{100}{3} = \\dfrac{100}{3} \\approx 33{,}33$.</li><li>$I_2 = \\left[ \\dfrac{0{,}4t^3}{3} - 2t^2 \\right]_{10}^{11} = \\left(\\dfrac{532{,}4}{3} - 242\\right) - \\left(\\dfrac{400}{3} - 200\\right) \\approx 2{,}13$.</li></ul>Tổng quãng đường $S \\approx 33{,}33 + 2{,}13 = 35{,}46$.<br>Làm tròn đến hàng phần chục là $35{,}5$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây:<br>Tính tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên (làm tròn kết quả đến hàng phần chục; đơn vị: phút).\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765184686_60.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 70%;\"><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765184686_60.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$11{,}4$",
                "$11{,}3$",
                "$11{,}2$",
                "$11{,}1$"
            ],
            "ans": 0,
            "explain": "Cỡ mẫu là $n = 3 + 11 + 6 + 15 + 5 = 40$.<br>Gọi $x_1, x_2, \\dots, x_{40}$ là mẫu số liệu được xếp theo thứ tự không giảm.<br>Tứ phân vị thứ nhất của mẫu số liệu là $\\dfrac{x_{10} + x_{11}}{2}$, thuộc nhóm $[5; 15)$.<br>Ta có $n=40$, $C=10$, $a_p=5$, $m_p=3$, $m_q=11$, $L=15-5=10$.<br>Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là<br>$$Q_1 = a_p + \\dfrac{\\dfrac{n}{4} - m_p}{m_q} \\cdot L = 5 + \\dfrac{\\dfrac{40}{4} - 3}{11} \\cdot 10 = 5 + \\dfrac{70}{11} \\approx 11{,}36.$$<br>Làm tròn đến hàng phần chục ta được $11{,}4$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây:<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765184686_60.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 70%;\">\n<br>Chọn ngẫu nhiên một bạn học sinh trong nhóm trên. Tính xác suất để thời gian trung bình bạn đó sử dụng Chat GPT lớn hơn hoặc bằng $25$ phút một ngày (làm tròn kết quả đến hàng phần trăm).<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765184686_60.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$0{,}50$",
                "$0{,}38$",
                "$0{,}37$",
                "$0{,}51$"
            ],
            "ans": 0,
            "explain": "Tổng số học sinh là $n=40$.<br>Số học sinh sử dụng Chat GPT lớn hơn hoặc bằng $25$ phút một ngày là số học sinh thuộc các nhóm $[25; 30)$ và $[30; 35)$.<br>Số lượng là: $15 + 5 = 20$ (học sinh).<br>Xác suất cần tính là $P = \\dfrac{20}{40} = 0{,}50$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Thời gian trung bình sử dụng ChatGPT trên một ngày của một nhóm học sinh được ghi lại trong bảng dưới đây:<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765184686_60.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 70%;\"><br>Do sai sót trong quá trình nhập và xử lý số liệu, tất cả các mốc thời gian trong bảng trên đã bị ghi lùi $5$ phút so với thực tế và người ta điều chỉnh lại bảng số liệu ban đầu cho đúng. Gọi $s_1, s_2$ lần lượt là độ lệch chuẩn của mẫu số liệu ghép nhóm trước và sau khi chỉnh sửa. Chọn khẳng định đúng nhất.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765184686_60.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$s_1 = s_2$",
                "$s_1 > s_2$",
                "$s_1 < s_2$",
                "$s_1 = s_2 - 5$"
            ],
            "ans": 0,
            "explain": "Khi cộng thêm cùng một hằng số $c$ (ở đây $c=5$) vào tất cả các giá trị của mẫu số liệu thì phương sai và độ lệch chuẩn của mẫu số liệu không thay đổi.<br>Do đó $s_1 = s_2$.",
            "point": "0.25"
        },
        {
            "type": "match",
            "q": "Cho hàm số $y=f(x)$ xác định và có bảng biến thiên trên $[-2;4]$ như sau:\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765222539_405.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 80%;\"><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765222539_405.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
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
                "C",
                "A",
                "E",
                "B"
            ],
            "explain": "Dựa vào bảng biến thiên ta có:<ul><li>Đạo hàm đổi dấu từ dương sang âm tại $x=-1$ nên hàm số đạt cực đại tại $x_{\\text{CĐ}} = -1$.</li><li>Đạo hàm đổi dấu từ âm sang dương tại $x=3$ nên hàm số đạt cực tiểu tại $x_{\\text{CT}} = 3$.</li><li>Giá trị cực đại của hàm số là $y_{\\text{CĐ}} = f(-1) = 6$.</li><li>Giá trị cực tiểu của hàm số là $y_{\\text{CT}} = f(3) = -26$.</li></ul><ul><li>Hàm số $f(x)$ đạt cực đại tại điểm $x_{\\text{CĐ}}=$ ghép với $-1$.</li><li>Hàm số $f(x)$ đạt cực tiểu tại điểm $x_{\\text{CT}}=$ ghép với $3$.</li><li>Giá trị cực đại của hàm số $f(x)$ là $y_{\\text{CĐ}}=$ ghép với $6$.</li><li>Giá trị cực tiểu của hàm số $f(x)$ là $y_{\\text{CT}}=$ ghép với $-26$.</li></ul>",
            "point": "1"
        },
        {
            "type": "match",
            "q": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $AB=a, AD=\\sqrt{3}a$. Biết $SA$ vuông góc với mặt phẳng đáy và $SA=2\\sqrt{3}a$.",
            "items": [
                "Tang của góc giữa $CD$ và $SB$ bằng",
                "Tang của góc giữa $SC$ và $(ABCD)$ bằng",
                "Tang của góc nhị diện $[S,CD,A]$ bằng",
                "Tang của góc nhị diện $[C,SA,D]$ bằng"
            ],
            "options": [
                "$\\dfrac{1}{2}$",
                "$\\dfrac{\\sqrt{3}}{3}$",
                "$1$",
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
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765236788_14.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 80%;\">\n<ul><li>Vì $CD \\parallel AB$ nên $(CD, SB) = (AB, SB) = \\widehat{SBA}$ (do $\\triangle SAB$ vuông tại $A$).<br>$\\tan \\widehat{SBA} = \\dfrac{SA}{AB} = \\dfrac{2\\sqrt{3}a}{a} = 2\\sqrt{3}$.</li><li>Hình chiếu của $S$ lên $(ABCD)$ là $A$, nên $(SC, (ABCD)) = (SC, AC) = \\widehat{SCA}$.<br>$AC = \\sqrt{AB^2+AD^2} = \\sqrt{a^2 + 3a^2} = 2a$.<br>$\\tan \\widehat{SCA} = \\dfrac{SA}{AC} = \\dfrac{2\\sqrt{3}a}{2a} = \\sqrt{3}$.</li><li>Ta có $\\left\\{\\begin{aligned}&CD \\perp AD \\\\ &CD \\perp SA\\end{aligned}\\right. \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp SD$. <br>Vậy góc nhị diện $[S, CD, A]$ là góc $\\widehat{SDA}$.<br>$\\tan \\widehat{SDA} = \\dfrac{SA}{AD} = \\dfrac{2\\sqrt{3}a}{\\sqrt{3}a} = 2$.</li><li>Vì $SA \\perp (ABCD)$ nên $SA \\perp AC$ và $SA \\perp AD$. Góc nhị diện $[C, SA, D]$ chính là góc $\\widehat{CAD}$.<br>$\\tan \\widehat{CAD} = \\dfrac{CD}{AD} = \\dfrac{AB}{AD} = \\dfrac{a}{\\sqrt{3}a} = \\dfrac{\\sqrt{3}}{3}$.</li></ul><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765236788_14.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\">",
            "point": "1"
        },
        {
            "type": "match",
            "q": "Trong không gian $Oxyz$ cho mặt phẳng $(P)\\colon 2x-y+z-2=0$ và ba điểm $A(1;-1;0)$, $B(2;0;1)$, $C(1;2;-1)$.",
            "items": [
                "Phương trình mặt phẳng đi qua điểm $A$ và vuông góc với đường thẳng $BC$ là",
                "Phương trình mặt phẳng đi qua điểm $A$ và song song với mặt phẳng $(P)$ là",
                "Phương trình mặt phẳng đi qua ba điểm $A, B, C$ là",
                "Phương trình mặt phẳng đi qua hai điểm $A, B$ và vuông góc với mặt phẳng $(P)$ là"
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
            "explain": "Ta có $\\overrightarrow{AB}=(1;1;1)$, $\\overrightarrow{AC}=(0;3;-1)$, $\\overrightarrow{BC}=(-1;2;-2)$.<ul><li>Mặt phẳng đi qua $A$ và vuông góc với $BC$ nhận $\\overrightarrow{n} = -\\overrightarrow{BC} = (1;-2;2)$ làm VTPT.<br>Phương trình: $1(x-1) - 2(y+1) + 2(z-0) = 0 \\Leftrightarrow x-2y+2z-3=0$. </li><li>Mặt phẳng đi qua $A$ và song song với $(P)$ có VTPT $\\overrightarrow{n} = (2;-1;1)$.<br>Phương trình: $2(x-1) - 1(y+1) + 1(z-0) = 0 \\Leftrightarrow 2x-y+z-3=0$.</li><li>Mặt phẳng $(ABC)$ có VTPT $\\overrightarrow{n} = [\\overrightarrow{AB}, \\overrightarrow{AC}] = (-4;1;3)$.<br>Phương trình: $-4(x-1) + 1(y+1) + 3z = 0 \\Leftrightarrow -4x+y+3z+5=0 \\Leftrightarrow 4x-y-3z-5=0$.</li><li>Mặt phẳng đi qua $A, B$ và vuông góc $(P)$ có VTPT $\\overrightarrow{n} = [\\overrightarrow{AB}, \\overrightarrow{n}_P] =(2;1;-3)$.<br>Phương trình: $2(x-1)+1(y+1)-3z=0 \\Leftrightarrow 2x+y-3z-1=0$.</li></ul>",
            "point": "1"
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
                "A",
                "B",
                "C",
                "D"
            ],
            "explain": "Tìm giao điểm $A$: Giải hệ $\\left\\{\\begin{aligned}&2-t=3+t'\\\\&3=2-t'\\\\&-1+t=-1\\end{aligned}\\right. \\Rightarrow \\left\\{\\begin{aligned}&t=0\\\\&t'=-1\\end{aligned}\\right.$. Suy ra $A(2;3;-1)$.<br>Vì $B \\in d_1 \\Rightarrow B(2-b; 3; -1+b)$; $C \\in d_2 \\Rightarrow C(3+c; 2-c; -1)$.<br>$M, B, C$ thẳng hàng $\\Rightarrow \\overrightarrow{MB} = k\\overrightarrow{MC}$.<br>$\\overrightarrow{MB} = (2-b; 3; b-5)$; $\\overrightarrow{MC} = (3+c; 2-c; -5)$.<br>Ta có hệ thức: $\\dfrac{2-b}{3+c} = \\dfrac{3}{2-c} = \\dfrac{b-5}{-5}$.<br>Từ $\\dfrac{3}{2-c} = \\dfrac{b-5}{-5} \\Rightarrow -15 = (2-c)(b-5) \\Rightarrow b = \\dfrac{5c+5}{c-2}$, (*) (với $c \\ne 2$).<br>Tam giác $ABC$ đều $\\Rightarrow AB^2 = AC^2$. (Với $A(2;3;-1)$).<br>$AB^2 = 2b^2$; $AC^2= 2(c+1)^2$.<br>$AB^2=AC^2 \\Leftrightarrow 2b^2 = 2(c+1)^2 \\Leftrightarrow \\left[\\begin{aligned}&b=c+1 \\quad (1)\\\\&b=-(c+1) \\quad (2)\\end{aligned}\\right.$.<ul><li>Thay (1) vào biểu thức (*): $c+1 = \\dfrac{5(c+1)}{c-2}$<br> $\\Leftrightarrow \\left[\\begin{aligned}&c=-1 \\Rightarrow b=0 \\Rightarrow B \\equiv A \\text{ (loại)}\\\\&c-2=5 \\Rightarrow c=7 \\Rightarrow b=8\\end{aligned}\\right.$.<br>Với $c=7$, $b=8$: $B(-6;3;7)$, $C(10;-5;-1)$. Khi đó $BC^2= 384 \\ne AB^2=128$. (Loại).</li><li>Thay (2) vào biểu thức (*): $-(c+1) = \\dfrac{5(c+1)}{c-2} \\Leftrightarrow \\left[\\begin{aligned}&c=-1 \\text{ (loại)}\\\\&-1 = \\dfrac{5}{c-2} \\Rightarrow c=-3\\end{aligned}\\right.$.<br> \tVới $c=-3 \\Rightarrow b=2$. Khi đó $B(0;3;1)$ và $C(0;5;-1)$.</li></ul>Kiểm tra: $AB^2=8$; $AC^2=8$; $BC^2=8$ tam giác đều (thỏa mãn).<ul><li>Toạ độ điểm $A$ là $(2;3;-1)$.</li><li>VTCP của $d_3$ là $\\overrightarrow{BC}=(0;2;-2)$, cùng phương với $\\vec{u}=(0;1;-1)$.</li><li>Toạ độ điểm $B$ là $(0;3;1)$.</li><li>Toạ độ điểm $C$ là $(0;5;-1)$.</li></ul>",
            "point": "1"
        },
        {
            "type": "match",
            "q": "Cho hàm số $y=f(x)$, với $f(x)$ là đa thức bậc bốn, có đồ thị hàm số $y=f'(x)$ như hình vẽ.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765254897_874.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 80%;\">\n<br>Đặt $g(x)=f\\left(-x^2+3x-m\\right)$.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765254897_874.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
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
                "D"
            ],
            "explain": "Ta có $g'(x)=(-2x+3)f'\\left(-x^2+3x-m\\right)$.<br>$g'(x)=0 \\Leftrightarrow \\left[\\begin{aligned}& -2x+3=0 \\\\ & f'\\left(-x^2+3x-m\\right)=0\\end{aligned}\\right.$<br>$\\Leftrightarrow \\left[\\begin{aligned}& x=1{,}5 \\\\ & -x^2+3x-m = -1 \\quad (1) \\\\ & -x^2+3x-m = 1 \\quad \\quad (2) \\\\ & -x^2+3x-m = 4. \\quad \\quad (3)\\end{aligned}\\right.$<br>Xét hàm số $h(x)=-x^2+3x$ có đỉnh tại $x=1{,}5$, giá trị lớn nhất là $h(1{,}5)=2{,}25$.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765264571_737.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 80%;\">\n<br>Phương trình $h(x)=k$ có $2$ nghiệm phân biệt khác $1{,}5$ khi $k < 2{,}25$ và vô nghiệm khi $k > 2{,}25$.<br>Biến đổi các phương trình $(1)$, $(2)$, $(3)$ về dạng $h(x)=m-1$, $h(x)=m+1$, $h(x)=m+4$.<br>Ta luôn có thứ tự $m-1 < m+1 < m+4$.<br>Số điểm cực trị của $g(x)$ bằng $1$ (nghiệm $x=1{,}5$) cộng với số nghiệm đơn khác $1{,}5$ của ba phương trình trên.<ul><li><b>Ghép với C.</b><br>Khi $m=1$, các đường thẳng là $y=0$, $y=2$, $y=5$.<br>Vì $0 < 2{,}25$ (2 nghiệm); $2 < 2{,}25$ (2 nghiệm); $5 > 2{,}25$ (0 nghiệm).<br>Tổng số điểm cực trị là $1+2+2=5$.</li><li><b>Ghép với A.</b><br>Để có đúng $3$ cực trị, cần đúng $1$ phương trình có $2$ nghiệm (hai phương trình kia vô nghiệm).<br>Điều kiện: $\\left\\{\\begin{aligned}& m-1 < 2{,}25 \\\\ & m+1 > 2{,}25\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}& m < 3{,}25 \\\\ & m > 1{,}25.\\end{aligned}\\right.$<br>Vì $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{2; 3\\}$. Có $2$ giá trị.</li><li><b>Ghép với B.</b><br>Để có đúng $5$ cực trị, cần đúng $2$ phương trình có $2$ nghiệm (phương trình lớn nhất vô nghiệm).<br>Điều kiện: $\\left\\{\\begin{aligned}& m+1 < 2{,}25 \\\\ & m+4 > 2{,}25\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}& m < 1{,}25 \\\\ & m > -1{,}75.\\end{aligned}\\right.$<br>Vì $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{-1; 0; 1\\}$. Có $3$ giá trị.</li><li><b>Ghép với D.</b><br>Để có $7$ điểm cực trị, cả $3$ phương trình đều phải có $2$ nghiệm phân biệt $\\Rightarrow m+4 < 2{,}25 \\Leftrightarrow m < -1{,}75$.<br>Để các cực trị thuộc $(-2; 5)$, các nghiệm của $h(x)=k$ phải nằm trong $(-2; 5)$.<br>Kiểm tra biên: $h(-2)=-10$, $h(5)=-10$.<br>Vậy yêu cầu bài toán tương đương các đường thẳng cắt đồ thị $h(x)$ tại phần nằm trên $y=-10$.<br>Tức là $m-1 > -10 \\Leftrightarrow m > -9$.<br>Kết hợp điều kiện: $-9 < m < -1{,}75$.<br>Các giá trị nguyên là $m \\in \\{-8; -7; \\dots; -2\\}$. Có $7$ giá trị.</li></ul><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765264571_737.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\">",
            "point": "1"
        },
        {
            "type": "short",
            "q": "Mỗi khi đi nghỉ mát anh An luôn dự định chạy bộ vào mỗi buổi sáng. Tuy nhiên, đôi khi anh ngủ suốt buổi sáng. Xác suất để anh An chạy bộ vào buổi sáng thứ nhất là $90\\%$. Sau đó, xác suất để anh ta chạy bộ ở mỗi buổi sáng còn lại là $70\\%$ nếu anh ta chạy bộ vào buổi sáng hôm liền trước và $80\\%$ nếu anh ta không chạy bộ vào buổi sáng hôm liền trước. Tính xác suất (đơn vị: \\%) để anh An chạy bộ vào buổi sáng ngày thứ hai của kì nghỉ mát.",
            "ans": "71",
            "explain": "Gọi $A_1$ là biến cố anh An chạy bộ sáng thứ nhất, $A_2$ là biến cố anh An chạy bộ sáng thứ hai.<br>Theo đề bài: $\\mathrm{P}(A_1) = 0{,}9 \\Rightarrow \\mathrm{P}(\\overline{A_1}) = 1 - 0{,}9 = 0{,}1$.<br>Xác suất có điều kiện: $\\mathrm{P}(A_2 | A_1) = 0{,}7$ và $\\mathrm{P}(A_2 | \\overline{A_1}) = 0{,}8$.<br>Áp dụng công thức xác suất đầy đủ:<br>$$\\mathrm{P}(A_2) = \\mathrm{P}(A_2 | A_1)\\cdot\\mathrm{P}(A_1) + \\mathrm{P}(A_2 | \\overline{A_1})\\cdot\\mathrm{P}(\\overline{A_1})$$<br>$$= 0{,}7 \\cdot 0{,}9 + 0{,}8 \\cdot 0{,}1 = 0{,}63 + 0{,}08 = 0{,}71$$<br>Vậy xác suất là $71\\%$.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Trong không gian $Oxyz$, cho khối đa diện $(H)$ là tập hợp tất cả các điểm $M(x; y; z)$ thỏa mãn $|x|+|y|+|z| \\le 6$ và $|x|+|y|+|z-2| \\le 6$. Tính thể tích khối đa diện $(H)$, làm tròn đến hàng đơn vị.",
            "ans": "167",
            "explain": "Diện tích thiết diện ngang của khối $(H)$ tại cao độ $z$ là:<br>$$S(z) = 2 \\cdot \\left[ \\min(6-|z|, 6-|z-2|) \\right]^2$$<br>Hai khối bát diện giao nhau trong khoảng $z \\in [-4; 6]$.<br>Điểm chuyển tiếp tại $z=1$ (trung điểm của $0$ và $2$).<br>Với $z \\in [-4; 1]$, bán kính thiết diện là $R(z) = 6-|z-2| = 6-(2-z) = 4+z$.<br>Với $z \\in [1; 6]$, bán kính thiết diện là $R(z) = 6-|z| = 6-z$.<br>Thể tích khối đa diện là:<br>$$V = \\displaystyle\\int\\limits_{-4}^1 2(4+z)^2 \\mathrm{\\,d}z + \\displaystyle\\int\\limits_{1}^6 2(6-z)^2 \\mathrm{\\,d}z$$<br>Ta có <br>$V= \\dfrac{500}{3}\\approx 167$.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Cho $\\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x = -3$ và $\\displaystyle\\int\\limits_0^1 g(x)\\mathrm{\\,d}x = 2$. Tính $\\displaystyle\\int\\limits_0^1 [f(x)+2g(x)]\\mathrm{\\,d}x$.",
            "ans": "1",
            "explain": "Ta có $\\displaystyle\\int\\limits_0^1 [f(x)+2g(x)]\\mathrm{\\,d}x = \\displaystyle\\int\\limits_0^1 f(x)\\mathrm{\\,d}x + 2\\displaystyle\\int\\limits_0^1 g(x)\\mathrm{\\,d}x = -3 + 2(2) = 1$.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Cho các số thực dương $a, b, c$ thỏa mãn $\\log_a b = 3$ và $\\log_c a = -\\dfrac{1}{2}$. Tính giá trị của biểu thức $P = \\log_{ac} (a^2bc)$.",
            "ans": "-3",
            "explain": "Ta có $\\log_c a = -\\dfrac{1}{2} \\Rightarrow \\log_a c = -2$.<br>$P = \\log_{ac} (a^2bc) = \\dfrac{\\log_a (a^2bc)}{\\log_a (ac)} = \\dfrac{2 + \\log_a b + \\log_a c}{1 + \\log_a c}$.<br>Thay số: $P = \\dfrac{2 + 3 + (-2)}{1 + (-2)} = \\dfrac{3}{-1} = -3$.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Một người đàn ông đang ở vị trí điểm $A$ trên bờ một đoạn sông thẳng, rộng $300\\text{m}$ và muốn đến điểm $B$, ở bờ đối diện, xuôi về phía hạ lưu $2\\text{km}$ (xem hình vẽ). Biết người này có một chiếc thuyền, với vận tốc trung bình khi chèo thuyền trên đoạn sông này là $6\\text{km/h}$. Nhưng nếu có thể lên bờ và chạy bộ thì vận tốc trung bình mà anh ta có thể đạt được là $8\\text{km/h}$. Hãy tính thời gian nhanh nhất mà anh ta có thể đạt được để di chuyển từ $A$ đến $B$, theo đơn vị phút, làm tròn đến hàng đơn vị. <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765283982_928.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 50%;\"><br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767765283982_928.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "ans": "17",
            "explain": "Đổi đơn vị: $300\\text{m} = 0{,}3\\text{km}$.<br>Gọi $x$ (km) là khoảng cách từ $H$ đến điểm cập bến $C$ trên bờ đối diện ($0 \\le x \\le 2$).<br>Quãng đường chèo thuyền $AC = \\sqrt{0{,}3^2 + x^2} = \\sqrt{0{,}09+x^2}$.<br>Quãng đường chạy bộ $CB = 2 - x$.<br>Thời gian di chuyển: $t(x) = \\dfrac{\\sqrt{0{,}09+x^2}}{6} + \\dfrac{2-x}{8}$.<br>Xét hàm số trên $[0; 2]$.<br>$t'(x) = \\dfrac{x}{6\\sqrt{0{,}09+x^2}} - \\dfrac{1}{8}$.<br>$t'(x) = 0 \\Leftrightarrow 8x = 6\\sqrt{0{,}09+x^2}$<br> $\\Leftrightarrow 4x = 3\\sqrt{0{,}09+x^2} \\Leftrightarrow 16x^2 = 9(0{,}09+x^2)$<br>\n$\\Leftrightarrow 16x^2 = 0{,}81 + 9x^2 \\Leftrightarrow 7x^2 = 0{,}81$.<br>$\\Rightarrow x = \\dfrac{0{,}9}{\\sqrt{7}}$, (thỏa mãn $x \\in [0; 2]$).<br>Giá trị cực tiểu tại $x_0 = \\dfrac{0{,}9}{\\sqrt{7}}$.<br>$t_{\\min} = t\\left(\\dfrac{0{,}9}{\\sqrt{7}}\\right) = \\dfrac{\\sqrt{7}}{80} + \\dfrac{1}{4}$ (giờ).<br>Đổi ra phút: $60 \\left( \\dfrac{\\sqrt{7}}{80} + \\dfrac{1}{4} \\right)\\approx 17$ (phút).",
            "point": "0.5"
        }
    ]
};