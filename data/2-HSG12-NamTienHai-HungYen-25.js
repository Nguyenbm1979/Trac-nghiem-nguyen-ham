window.EXAM_DATA = {
    "title": "Đề khảo sát HSG Khối 12, THPT Nam Tiền Hải, Hưng Yên 2025",
    "subject": "Toan",
    "grade": "12",
    "time": 180,
    "password": "f43389e34345d4cf6f35d5c6ccd1db6f",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": true,
    "music": true,
    "allowPrint": false,
    "minTime": 0,
    "start": "",
    "end": "",
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
            "type": "mcq",
            "q": "Cho hàm số $y=\\dfrac{x^2-2x+m}{x-1}$ ($m \\ne 1$) có đồ thị $(C_m)$. Tổng tất cả các giá trị của tham số $m$ để đồ thị $(C_m)$ cắt trục tung tại điểm $A$ sao cho khoảng cách từ điểm $A$ đến tiệm cận xiên của $(C_m)$ bằng $\\sqrt{2}$ là",
            "options": [
                "$-2$",
                "$1$",
                "$2$",
                "$3$"
            ],
            "ans": 2,
            "explain": "Ta có $y=\\dfrac{x^2-2x+m}{x-1} = \\dfrac{x(x-1)-(x-1)+m-1}{x-1} = x-1+\\dfrac{m-1}{x-1}$.<br> Vì $m \\ne 1$ nên đồ thị hàm số có tiệm cận xiên là đường thẳng $\\Delta \\colon y=x-1 \\Leftrightarrow x-y-1=0$.<br> Đồ thị $(C_m)$ cắt trục tung tại điểm $A \\Rightarrow x_A=0 \\Rightarrow y_A=-m$. Vậy $A(0;-m)$.<br> Theo giả thiết: $\\mathrm{d}(A,\\Delta)=\\sqrt{2} \\Leftrightarrow \\dfrac{|0-(-m)-1|}{\\sqrt{1^2+(-1)^2}}=\\sqrt{2} \\Leftrightarrow \\dfrac{|m-1|}{\\sqrt{2}}=\\sqrt{2}$.<br> $\\Leftrightarrow |m-1|=2 \\Leftrightarrow \\left[\\begin{aligned}m-1=2 \\\\m-1=-2\\end{aligned}\\right. \\Leftrightarrow \\left[\\begin{aligned}m=3 \\\\m=-1\\end{aligned}\\right.$ (thỏa mãn điều kiện $m \\ne 1$).<br> Tổng các giá trị của $m$ là $3+(-1)=2$.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, cho điểm $A(-3;0;0)$, $B(0;-4;0)$. Gọi $I$, $J$ lần lượt là tâm đường tròn nội tiếp và ngoại tiếp của tam giác $OAB$. Độ dài đoạn thẳng $IJ=\\dfrac{\\sqrt{a}}{b}$ với $a \\in \\mathbb{N}, b \\in \\mathbb{Z}^+$. Tính $2a+b$.",
            "options": [
                "$8$",
                "$9$",
                "$10$",
                "$12$"
            ],
            "ans": 3,
            "explain": "Ta có $O(0;0;0)$, $A(-3;0;0) \\in Ox'$, $B(0;-4;0) \\in Oy'$. Tam giác $OAB$ vuông tại $O$ với $OA=|-3|=3$, $OB=|-4|=4$, $AB=\\sqrt{3^2+4^2}=5$.<br> Tâm đường tròn ngoại tiếp $J$ là trung điểm của cạnh huyền $AB$.<br> Tọa độ điểm $J$: $x_J=\\dfrac{-3+0}{2}=-\\dfrac{3}{2}$; $y_J=\\dfrac{0-4}{2}=-2$; $z_J=0$. Suy ra $J\\left(-\\dfrac{3}{2}; -2; 0\\right)$.<br> Gọi $I$ là tâm đường tròn nội tiếp tam giác $OAB$. Theo tính chất đường phân giác trong mặt phẳng $Oxy$, ta có công thức tọa độ tâm $I$: $\\left\\{\\begin{aligned}x_I = \\dfrac{OA \\cdot x_B + OB \\cdot x_A + AB \\cdot x_O}{OA+OB+AB} = -1 \\\\y_I = \\dfrac{OA \\cdot y_B + OB \\cdot y_A + AB \\cdot y_O}{OA+OB+AB}= -1\\end{aligned}\\right.$.<br> Cao độ $z_I=0$. Vậy $I(-1;-1;0)$.<br> Độ dài đoạn thẳng $IJ= \\dfrac{\\sqrt{5}}{2}$.<br> Theo đề bài $IJ = \\dfrac{\\sqrt{a}}{b} \\Rightarrow a=5, b=2$.<br> Vậy $2a+b = 2(5)+2 = 12$.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $y=f(x)=x^3+bx^2+cx+3$ thỏa mãn $\\min\\limits_{[0;2]} f(x)=f(1)=1$. Giá trị lớn nhất của hàm số $g(x)=f\\left(\\sqrt{1-x}+\\sqrt{1+x}\\right)$ là",
            "options": [
                "$17$",
                "$55$",
                "$3-\\sqrt{2}$",
                "$5$"
            ],
            "ans": 3,
            "explain": "Ta có $\\min\\limits_{[0;2]} f(x)=f(1)=1$. Vì $x=1 \\in (0;2)$ nên $x=1$ là điểm cực trị của hàm số.<br> Suy ra $\\left\\{\\begin{aligned}f(1)=1 \\\\f'(1)=0\\end{aligned}\\right.$.<br> Ta có $f'(x)=3x^2+2bx+c$. Khi đó:<br> $\\left\\{\\begin{aligned}1+b+c+3=1 \\\\3+2b+c=0\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}b+c=-3 \\\\2b+c=-3\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}b=0 \\\\c=-3.\\end{aligned}\\right.$<br> Vậy hàm số là $f(x)=x^3-3x+3$. Kiểm tra lại trên đoạn $[0;2]$, hàm số đạt giá trị nhỏ nhất tại $x=1$ là đúng.<br> Xét hàm số $g(x)=f(u)$ với $u=\\sqrt{1-x}+\\sqrt{1+x}$.<br> Tập xác định: $-1 \\le x \\le 1$.<br> Ta có $u^2 = 1-x+1+x+2\\sqrt{(1-x)(1+x)} = 2+2\\sqrt{1-x^2}$.<br> Vì $0 \\le \\sqrt{1-x^2} \\le 1$ nên $2 \\le u^2 \\le 4 \\Rightarrow \\sqrt{2} \\le u \\le 2$.<br> Bài toán trở thành tìm giá trị lớn nhất của $h(u)=u^3-3u+3$ trên đoạn $[\\sqrt{2}; 2]$.<br> $h'(u)=3u^2-3$. $h'(u)=0 \\Leftrightarrow u=\\pm 1$.<br> Trên khoảng $(\\sqrt{2}; 2)$, ta có $u > 1 \\Rightarrow h'(u) > 0$. Do đó hàm số đồng biến trên đoạn $[\\sqrt{2}; 2]$.<br> Giá trị lớn nhất là $\\max\\limits_{[\\sqrt{2}; 2]} h(u) = h(2) = 2^3-3(2)+3 = 5$.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Để đủ tiền xây nhà, cô Anh muốn tiết kiệm $500$ triệu đồng bằng cách gửi ngân hàng theo phương thức gửi tích lũy với lãi suất $0{,}85\\%$/tháng, cả tiền gốc và lãi của tháng trước được tính thành gốc của tháng sau. Biết rằng mỗi đầu tháng, cô Anh gửi đều đặn vào ngân hàng số tiền cố định là $10$ triệu đồng. Biết rằng trong suốt quá trình gửi cô Anh không rút ra bất kỳ số tiền nào. Hỏi sau ít nhất bao nhiêu tháng cô Anh nhận được số tiền mong muốn?",
            "options": [
                "$42$",
                "$45$",
                "$40$",
                "$45$"
            ],
            "ans": 0,
            "explain": "Gọi $M$ là số tiền mong muốn ($500$ triệu), $A$ là số tiền gửi mỗi tháng ($10$ triệu), $r$ là lãi suất mỗi tháng ($0{,}85\\%=0{,}0085$).<br> Đây là bài toán gửi tiền định kỳ đầu mỗi tháng (lãi kép). Số tiền nhận được sau $n$ tháng là:<br> $S_n = A(1+r) \\cdot \\dfrac{(1+r)^n-1}{r}$.<br> Thay số:<br> $500 = 10(1+0{,}0085) \\cdot \\dfrac{(1+0{,}0085)^n-1}{0{,}0085}$<br> $\\Leftrightarrow \\dfrac{500 \\cdot 0{,}0085}{10 \\cdot 1{,}0085} = 1{,}0085^n - 1$<br> $\\Leftrightarrow 1{,}0085^n = 1 + \\dfrac{4{,}25}{10{,}085} \\approx 1{,}4214$<br> $\\Leftrightarrow n = \\log_{1{,}0085} (1{,}4214) \\approx 41{,}51$.<br> Vì số tháng phải là số nguyên nên cô Anh cần gửi ít nhất $42$ tháng.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Có một cái bể hình trụ cao $10$ dm với bán kính đáy $4$ dm chứa đầy nước bị một thùng gỗ hình lập phương đóng kín rơi vào làm cho một lượng nước $V$ tràn ra. Biết rằng cạnh thùng gỗ là $8$ dm và khi nó rơi vào miệng bể một đường chéo dài nhất của nó vuông góc với mặt bể, ba cạnh của thùng chạm vào thành của bể như hình vẽ. Tính $V$.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185136582_961.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$6\\sqrt{6}$",
                "$10\\sqrt{6}$",
                "$5\\sqrt{6}$",
                "$8\\sqrt{6}$"
            ],
            "ans": 3,
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185146125_604.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Lượng nước tràn ra bằng thể tích phần thùng gỗ chìm trong nước.<br> Khi đường chéo dài nhất của hình lập phương vuông góc với mặt bể, và ba cạnh chạm vào thành bể, phần chìm trong nước là một hình chóp tam giác vuông tại đỉnh (cắt ra từ góc của hình lập phương). Gọi độ dài cạnh bên của hình chóp này là $x$ (là một phần cạnh của hình lập phương).<br> Cạnh đáy của hình chóp (nằm trên mặt nước) là cạnh của tam giác đều nội tiếp đường tròn đáy bể ($R=4$).<br> Cạnh của tam giác đều này là $a = R\\sqrt{3} = 4\\sqrt{3}$.<br> Mặt khác, vì đáy là tam giác đều tạo bởi 3 mặt bên là tam giác vuông cân (tại đỉnh hình lập phương), nên cạnh đáy $a$ liên hệ với cạnh bên $x$ theo công thức đường chéo hình vuông: $a = x\\sqrt{2}$.<br> Ta có phương trình: $x\\sqrt{2} = 4\\sqrt{3} \\Rightarrow x = \\dfrac{4\\sqrt{3}}{\\sqrt{2}} = 2\\sqrt{6}$ dm.<br> Kiểm tra điều kiện: $x < 8$ (cạnh hình lập phương), thoả mãn.<br> Thể tích phần chìm (hình chóp tam giác vuông đỉnh $O$, ba cạnh $OA, OB, OC$ đôi một vuông góc) là: $V = \\dfrac{1}{6} \\cdot OA \\cdot OB \\cdot OC = \\dfrac{1}{6} x^3 = \\dfrac{1}{6} \\left(2\\sqrt{6}\\right)^3 = \\dfrac{1}{6} \\cdot 8 \\cdot 6\\sqrt{6} = 8\\sqrt{6}$ dm$^3$.",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hình lăng trụ đứng $ABCD.A'B'C'D'$ có đáy là hình thang cân, $AB=BC=CD=a$, $AD=2a$. Biết góc giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$ bằng $45^\\circ$. Gọi $(P)$ là mặt phẳng đi qua $B$ và vuông góc với đường thẳng $A'C$. Biết $(P)$ chia khối lăng trụ $ABCD.A'B'C'D'$ thành hai khối đa diện. Tỉ số thể tích của khối đa diện chứa đỉnh $A$ với thể tích khối lăng trụ $ABCD.A'B'C'D'$ bằng $\\dfrac{m}{n}$ với $m,n \\in \\mathbb{N}^*$ và $\\dfrac{m}{n}$ là phân số tối giản. Khi đó $m^2+n=?$.",
            "options": [
                "$45$",
                "$37$",
                "$35$",
                "$31$"
            ],
            "ans": 3,
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185171048_927.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> <br><b>-</b> <b>Xác định hình chiếu và chiều cao:</b> Gọi $H$ là trung điểm của $AD$. Vì $ABCD$ là hình thang cân có $AB=BC=CD=a$, $AD=2a$ nên $ABH$, $HBC$, $HCD$ là các tam giác đều cạnh $a$.<br> Do đó $S_{ABCD} = 3 S_{HBC} = 3 \\cdot \\dfrac{a^2\\sqrt{3}}{4}$.<br> Ta cũng có $CH = \\dfrac{1}{2}AD = a$ nên tam giác $ACD$ vuông tại $C$, suy ra $AC \\perp CD$.<br> Mà $AC = \\sqrt{AD^2 - CD^2} = a\\sqrt{3}$.<br> Góc giữa $A'C$ và $(ABCD)$ là $\\widehat{A'CA} = 45^\\circ$.<br> Suy ra $AA' = AC \\cdot \\tan 45^\\circ = a\\sqrt{3}$.<br> Thể tích khối lăng trụ: $V = S_{ABCD} \\cdot AA' = \\dfrac{3a^2\\sqrt{3}}{4} \\cdot a\\sqrt{3} = \\dfrac{9a^3}{4}$. <br><b>-</b> <b>Xác định thiết diện mặt phẳng $(P)$:</b> Mặt phẳng $(P)$ đi qua $B$ và vuông góc với $A'C$.<br> Ta có $BH \\perp AC$ (do $ABCH$ là hình thoi) và $BH \\perp AA'$ (do lăng trụ đứng). Suy ra $BH \\perp (ACC'A') \\Rightarrow BH \\perp A'C$.<br> Vậy đường thẳng $BH$ nằm trong mặt phẳng $(P)$. $(P)$ cắt đáy $(ABCD)$ theo giao tuyến $BH$.<br> Trong mặt phẳng $(ACC'A')$, gọi $O$ là giao điểm của $AC$ và $BH$ (O là trung điểm AC). Kẻ đường thẳng qua $O$ vuông góc với $A'C$, cắt $CC'$ tại $N$.<br> Vì $ACC'A'$ là hình chữ nhật có $AC=AA'=a\\sqrt{3}$ nên là hình vuông. Do đó đường thẳng qua trung điểm $O$ của cạnh đáy vuông góc với đường chéo $A'C$ sẽ đi qua trung điểm của cạnh bên $CC'$. Vậy $N$ là trung điểm $CC'$.<br> Do $BH \\parallel CD$ nên giao tuyến của $(P)$ với mặt bên $(CDD'C')$ là đường thẳng đi qua $N$ và song song với $CD$, cắt $DD'$ tại $K$. Khi đó $K$ là trung điểm $DD'$.<br> Vậy thiết diện là tứ giác $BHKN$. <br><b>-</b> <b>Tính thể tích khối đa diện:</b> Mặt phẳng $(P)$ chia lăng trụ thành hai phần. Phần chứa đỉnh $C$ là khối đa diện $HBCD.NK$ (gồm các điểm nằm phía trên mặt phẳng $(P)$ so với đáy). Phần chứa đỉnh $A$ là phần còn lại. Ta tính thể tích khối $HBCD.NK$. Chia khối này thành hai khối chóp: <br><b>-</b> Khối chóp $N.HBC$: Đáy là tam giác $HBC$ đều cạnh $a$, $S_{HBC} = \\dfrac{a^2\\sqrt{3}}{4}$. Chiều cao $h_1 = NC = \\dfrac{a\\sqrt{3}}{2}$.<br> $V_1 = \\dfrac{1}{3} \\cdot \\dfrac{a^2\\sqrt{3}}{4} \\cdot \\dfrac{a\\sqrt{3}}{2} = \\dfrac{a^3}{8}$. <br><b>-</b> Khối chóp $H.CDKN$:<br> Đáy là hình chữ nhật $CDKN$ (do $CD \\perp (BCC'B') \\Rightarrow CD \\perp CN$, $NK \\parallel CD$ và $NK=CD=a$).<br> Diện tích đáy $S_{CDKN} = CD \\cdot CN = a \\cdot \\dfrac{a\\sqrt{3}}{2} = \\dfrac{a^2\\sqrt{3}}{2}$.<br> Chiều cao của khối chóp hạ từ $H$ xuống $(CDKN)$ chính là chiều cao của tam giác đều $HCD$, bằng $\\dfrac{a\\sqrt{3}}{2}$.<br> $V_2 = \\dfrac{1}{3} \\cdot \\dfrac{a^2\\sqrt{3}}{2} \\cdot \\dfrac{a\\sqrt{3}}{2} = \\dfrac{a^3}{4}$. Tổng thể tích phần chứa $C$: $V_C = V_1 + V_2 = \\dfrac{a^3}{8} + \\dfrac{a^3}{4} = \\dfrac{3a^3}{8}$.<br> Tỉ số $\\dfrac{V_C}{V} = \\dfrac{3a^3}{8} : \\dfrac{9a^3}{4} = \\dfrac{3}{8} \\cdot \\dfrac{4}{9} = \\dfrac{1}{6}$.<br> Vậy thể tích khối đa diện chứa đỉnh $A$ là $V_A = V - V_C = \\dfrac{5}{6}V$.<br> Suy ra tỉ số cần tìm là $\\dfrac{5}{6}$.<br> Ta có $m=5, n=6 \\Rightarrow m^2+n = 5^2+6 = 31$.",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Chiều cao $h(m)$ của một cabin trên vòng quay vào thời điểm $t$ giây sau khi bắt đầu chuyển động được cho bởi công thức $h(t)=30+20\\sin\\left(\\dfrac{\\pi}{25}t+\\dfrac{\\pi}{3}\\right)$. Hỏi kể từ khi bắt đầu chuyển động đến thời điểm $2$ phút, Cabin đạt độ cao tối đa bao nhiêu lần?",
            "options": [
                "$2$",
                "$3$",
                "$\\dfrac{3}{2}$",
                "$\\dfrac{1}{3}$"
            ],
            "ans": 1,
            "explain": "Ta có thời gian chuyển động $t \\in [0; 120]$ (đổi $2$ phút $= 120$ giây).<br> Cabin đạt độ cao tối đa khi $\\sin\\left(\\dfrac{\\pi}{25}t+\\dfrac{\\pi}{3}\\right) = 1$.<br> $\\Leftrightarrow \\dfrac{\\pi}{25}t+\\dfrac{\\pi}{3} = \\dfrac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$<br> $\\Leftrightarrow \\dfrac{t}{25} = \\dfrac{1}{6} + 2k \\Leftrightarrow t = \\dfrac{25}{6} + 50k$.<br> Vì $0 \\le t \\le 120$ nên: $$0 \\le \\dfrac{25}{6} + 50k \\le 120 \\Leftrightarrow -0{,}08 \\le k \\le 2{,}31.$$ Vì $k \\in \\mathbb{Z}$ nên $k \\in \\{0; 1; 2\\}$.<br> Vậy có $3$ giá trị của $k$, tương ứng cabin đạt độ cao tối đa $3$ lần.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ trục tọa độ $Oxyz$, cho điểm $A(1;0;6)$. Biết rằng có hai điểm $M$, $N$ phân biệt thuộc trục $Ox$ sao cho các đường thẳng $AM$, $AN$ cùng tạo với đường thẳng chứa trục $Ox$ một góc $45^\\circ$. Tổng các hoành độ hai điểm $M$, $N$ tìm được là",
            "options": [
                "$4$",
                "$2$",
                "$1$",
                "$5$"
            ],
            "ans": 1,
            "explain": "Gọi $M(m; 0; 0) \\in Ox$ ($m \\ne 1$ vì nếu $m=1$ thì $AM \\perp Ox$, góc là $90^\\circ$).<br> Ta có $\\overrightarrow{AM} = (m-1; 0; -6)$. Véc-tơ chỉ phương của trục $Ox$ là $\\vec{i}=(1;0;0)$.<br> Góc giữa đường thẳng $AM$ và trục $Ox$ bằng $45^\\circ$ nên: $$\\left|\\cos(\\overrightarrow{AM}, \\vec{i})\\right| = \\cos 45^\\circ \\Leftrightarrow \\dfrac{|(m-1)\\cdot 1 + 0 + 0|}{\\sqrt{(m-1)^2+0^2+(-6)^2}\\cdot 1} = \\dfrac{\\sqrt{2}}{2}$$ $$\\Leftrightarrow \\dfrac{|m-1|}{\\sqrt{(m-1)^2+36}} = \\dfrac{1}{\\sqrt{2}} \\Leftrightarrow 2(m-1)^2 = (m-1)^2 + 36$$ $$\\Leftrightarrow (m-1)^2 = 36 \\Leftrightarrow \\left[\\begin{aligned}m-1=6\\\\m-1=-6\\end{aligned}\\right. \\Leftrightarrow \\left[\\begin{aligned}m=7\\\\m=-5.\\end{aligned}\\right.$$ Vậy hai điểm $M, N$ có hoành độ lần lượt là $7$ và $-5$.<br> Tổng các hoành độ là $7 + (-5) = 2$.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $y=f(x)$ liên tục trên tập $\\mathbb{R}$ và có đồ thị $(C)$. Biết tiếp tuyến của đồ thị $(C)$ tại điểm có hoành độ là $x=2$ vuông góc với đường thẳng $d\\colon x+4y=0$ và $f(2)=4$. Hãy tính giới hạn $\\lim\\limits_{x\\to 2}\\dfrac{f(x)-3f(2x-2)+8}{x-2}$.",
            "options": [
                "$-8$",
                "$4$",
                "$-20$",
                "$10$"
            ],
            "ans": 2,
            "explain": "Đường thẳng $d\\colon x+4y=0 \\Leftrightarrow y = -\\dfrac{1}{4}x$. Hệ số góc của $d$ là $k_d = -\\dfrac{1}{4}$.<br> Tiếp tuyến của $(C)$ tại $x=2$ vuông góc với $d$, suy ra hệ số góc của tiếp tuyến là: $$f'(2) \\cdot \\left(-\\dfrac{1}{4}\\right) = -1 \\Rightarrow f'(2) = 4.$$ Xét giới hạn $L = \\lim\\limits_{x\\to 2}\\dfrac{f(x)-3f(2x-2)+8}{x-2}$.<br> Khi $x \\to 2$, tử số tiến tới $f(2) - 3f(2) + 8 = 4 - 3(4) + 8 = 0$. Mẫu số tiến tới $0$.<br> Áp dụng quy tắc L'Hospital (hoặc thêm bớt số hạng và dùng định nghĩa đạo hàm): $$L = \\lim\\limits_{x\\to 2} \\dfrac{f'(x) - 3 \\cdot f'(2x-2) \\cdot (2x-2)'}{1} = \\lim\\limits_{x\\to 2} \\left[f'(x) - 6f'(2x-2)\\right].$$ Thay $x=2$ vào ta được: $$L = f'(2) - 6f'(2) = -5f'(2) = -5 \\cdot 4 = -20.$$",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=2$, $AD=3$, $AA'=4$. Gọi $M$ là trung điểm của $B'C'$ và $G$ là trọng tâm tam giác $DC'D'$. Tính $\\overrightarrow{AM}\\cdot\\overrightarrow{AG}$.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185234484_137.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$\\dfrac{61}{3}$",
                "$\\dfrac{61}{6}$",
                "$\\dfrac{33}{4}$",
                "$\\dfrac{33}{2}$"
            ],
            "ans": 3,
            "explain": "Chọn hệ trục tọa độ $Oxyz$ sao cho $A(0;0;0)$, $B(2;0;0)$, $D(0;3;0)$, $A'(0;0;4)$.<br> Khi đó: $C(2;3;0)$, $B'(2;0;4)$, $C'(2;3;4)$, $D'(0;3;4)$.<br> $M$ là trung điểm $B'C' \\Rightarrow M\\left(\\dfrac{2+2}{2}; \\dfrac{0+3}{2}; \\dfrac{4+4}{2}\\right) \\Rightarrow M\\left(2; \\dfrac{3}{2}; 4\\right)$.<br> Suy ra $\\overrightarrow{AM} = \\left(2; \\dfrac{3}{2}; 4\\right)$.<br> $G$ là trọng tâm tam giác $DC'D'$.<br> Tọa độ các đỉnh: $D(0;3;0)$, $C'(2;3;4)$, $D'(0;3;4)$.<br> Tọa độ điểm $G$: $$\\left\\{\\begin{aligned}x_G = \\dfrac{0+2+0}{3} = \\dfrac{2}{3} \\\\y_G = \\dfrac{3+3+3}{3} = 3 \\\\z_G = \\dfrac{0+4+4}{3} = \\dfrac{8}{3}\\end{aligned}\\right. \\Rightarrow G\\left(\\dfrac{2}{3}; 3; \\dfrac{8}{3}\\right) \\Rightarrow \\overrightarrow{AG} = \\left(\\dfrac{2}{3}; 3; \\dfrac{8}{3}\\right).$$ Tích vô hướng: $$\\overrightarrow{AM} \\cdot \\overrightarrow{AG} = 2 \\cdot \\dfrac{2}{3} + \\dfrac{3}{2} \\cdot 3 + 4 \\cdot \\dfrac{8}{3} = \\dfrac{4}{3} + \\dfrac{9}{2} + \\dfrac{32}{3} = \\dfrac{36}{3} + \\dfrac{9}{2} = 12 + 4{,}5 = 16{,}5 = \\dfrac{33}{2}.$$",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Ông An muốn thiết kế một mái che giếng trời hình chóp di động để có thể tùy thích lấy ánh sáng cho ngôi nhà của mình. Biết rằng đáy của hình chóp là hình chữ nhật có độ dài 2 cạnh đáy là $3$ m và $2$ m và các cạnh bên bằng nhau (hình vẽ minh họa). Ông An mong muốn góc giữa mặt phẳng $(SBC)$ và mặt phẳng nằm ngang $(ABC)$ là $\\alpha$ thỏa mãn $30^\\circ \\le \\alpha \\le 45^\\circ$, đồng thời khoảng cách từ điểm $A$ tới mặt phẳng $(SBC)$ là lớn nhất, tính khoảng cách lớn nhất đó.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185355287_135.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$\\dfrac{3\\sqrt{2}}{2}$",
                "$\\dfrac{3\\sqrt{3}}{4}$",
                "$\\dfrac{5\\sqrt{3}}{2}$",
                "$\\dfrac{3}{2}$"
            ],
            "ans": 0,
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185368648_165.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Gọi $O$ là tâm đáy $ABCD$. Vì hình chóp có các cạnh bên bằng nhau nên $SO \\perp (ABCD)$.<br> Gọi $M$ là trung điểm của $BC$, ta có $BC \\perp (SOM) \\Rightarrow ((SBC), (ABCD)) = \\widehat{SMO} = \\alpha$.<br> Ta có $AD \\parallel BC \\Rightarrow AD \\parallel (SBC) \\Rightarrow \\mathrm{d}(A, (SBC)) = \\mathrm{d}(O, (SBC)) \\times 2$ (do $O$ là trung điểm $AC$).<br> Kẻ $OH \\perp SM$ tại $H$. Khi đó $OH = \\mathrm{d}(O, (SBC))$.<br> Xét tam giác vuông $SOM$ tại $O$, đường cao $OH$: $OH = OM \\cdot \\sin\\alpha$.<br> Suy ra $\\mathrm{d}(A, (SBC)) = 2 \\cdot OM \\cdot \\sin\\alpha$.<br> Để khoảng cách này lớn nhất, ta cần chọn cạnh $BC$ sao cho $OM$ lớn nhất và góc $\\alpha$ sao cho $\\sin\\alpha$ lớn nhất.<br> 1. Chọn $OM$: $OM$ là một nửa độ dài cạnh bên của hình chữ nhật (vuông góc với $BC$). Hình chữ nhật có cạnh $3$ và $2$. <br><b>-</b> Nếu $BC=2$ thì cạnh bên $AB=3 \\Rightarrow OM = 1{,}5$. <br><b>-</b> Nếu $BC=3$ thì cạnh bên $AB=2 \\Rightarrow OM = 1$. Để khoảng cách lớn nhất, ta chọn trường hợp $OM=1{,}5$ (tức là $BC=2$).<br> 2. Chọn $\\alpha$: Hàm số $y=\\sin\\alpha$ đồng biến trên $[30^\\circ; 45^\\circ]$, nên $\\sin\\alpha$ lớn nhất khi $\\alpha = 45^\\circ$.<br> Vậy khoảng cách lớn nhất là: $$d_{\\max} = 2 \\cdot 1{,}5 \\cdot \\sin 45^\\circ = 3 \\cdot \\dfrac{\\sqrt{2}}{2} = \\dfrac{3\\sqrt{2}}{2}.$$",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Một nhà xuất bản nhận in $4000$ ấn phẩm. Nhà xuất bản có tất cả $14$ máy in được cài đặt, hoạt động tự động và được giám sát bởi 1 kĩ sư. Mỗi máy in có thể in được $30$ ấn phẩm trong một giờ. Chi phí cài đặt máy in là $12$ USD cho một máy, chi phí giám sát là $9$ USD một giờ. Tính số máy in nhà xuất bản nên sử dụng để chi phí là nhỏ nhất?",
            "options": [
                "$10$",
                "$12$",
                "$15$",
                "$9$"
            ],
            "ans": 0,
            "explain": "Gọi $n$ là số máy in được sử dụng ($1 \\le n \\le 14, n \\in \\mathbb{N}^*$).<br> Tốc độ in của $n$ máy là $30n$ (ấn phẩm/giờ).<br> Thời gian để in xong $4000$ ấn phẩm là $t = \\dfrac{4000}{30n} = \\dfrac{400}{3n}$ (giờ).<br> Tổng chi phí $C(n)$ bao gồm chi phí cài đặt và chi phí giám sát: $$C(n) = 12n + 9 \\cdot t = 12n + 9 \\cdot \\dfrac{400}{3n} = 12n + \\dfrac{1200}{n}.$$ Áp dụng bất đẳng thức Cauchy cho hai số dương $12n$ và $\\dfrac{1200}{n}$: $$C(n) \\ge 2\\sqrt{12n \\cdot \\dfrac{1200}{n}} = 2\\sqrt{14400} = 2 \\cdot 120 = 240.$$ Dấu \"=\" xảy ra khi $12n = \\dfrac{1200}{n} \\Leftrightarrow n^2 = 100 \\Leftrightarrow n = 10$.<br> Giá trị $n=10$ thỏa mãn điều kiện $1 \\le n \\le 14$.<br> Vậy nên sử dụng $10$ máy in để chi phí thấp nhất.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hai cấp số cộng $(u_n)$ và $(v_n)$ có tổng của $n$ số hạng đầu tiên lần lượt là $S_n, S'_n$. Biết rằng $\\dfrac{S_n}{S'_n} = \\dfrac{7n+1}{4n+27}$ với mọi $n \\in \\mathbb{N}^*$. Tính $\\dfrac{u_{11}}{v_{11}}$.",
            "options": [
                "$\\dfrac{78}{71}$",
                "$\\dfrac{7}{4}$",
                "$\\dfrac{71}{67}$",
                "$\\dfrac{4}{3}$"
            ],
            "ans": 3,
            "explain": "Ta có công thức liên hệ giữa số hạng tổng quát và tổng $n$ số hạng đầu: $\\dfrac{u_n}{v_n} = \\dfrac{S_{2n-1}}{S'_{2n-1}}$.<br> Áp dụng với $n=11$, ta có: $$\\dfrac{u_{11}}{v_{11}} = \\dfrac{S_{2 \\cdot 11 - 1}}{S'_{2 \\cdot 11 - 1}} = \\dfrac{S_{21}}{S'_{21}}$$ Thay $n=21$ vào biểu thức giả thiết: $$\\dfrac{u_{11}}{v_{11}} = \\dfrac{7(21)+1}{4(21)+27} = \\dfrac{147+1}{84+27} = \\dfrac{148}{111} = \\dfrac{4}{3}.$$",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Số lượng người đi xem một bộ phim mới (theo độ tuổi) trong một rạp chiếu phim sau 1 giờ đầu công chiếu được ghi lại theo bảng sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185397854_708.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Tìm số lượng người đi xem phim thuộc nhóm tuổi $[40;50)$ biết độ tuổi được dự báo là thích xem phim đó nhiều nhất là 34 tuổi và tổng số người đi xem là 46 người.",
            "options": [
                "10",
                "20",
                "15",
                "25"
            ],
            "ans": 0,
            "explain": "Gọi số người thuộc nhóm $[30;40)$ là $x$ và nhóm $[40;50)$ là $y$ ($x, y \\in \\mathbb{N}^*$).<br> Tổng số người là 46 nên ta có phương trình: $$6 + 12 + x + y + 2 = 46 \\Leftrightarrow x + y = 26 \\quad (1)$$ Độ tuổi dự báo thích xem nhiều nhất (Mốt) là $M_o = 34$. Vì $34 \\in [30; 40)$ nên nhóm chứa mốt là $[30; 40)$ với tần số $x$. Áp dụng công thức tính mốt: $$M_o = u_m + \\dfrac{n_m - n_{m-1}}{(n_m - n_{m-1}) + (n_m - n_{m+1})} \\cdot h$$ Với $u_m = 30$, $h = 10$, $n_m = x$, $n_{m-1} = 12$, $n_{m+1} = y$. $$34 = 30 + \\dfrac{x - 12}{(x - 12) + (x - y)} \\cdot 10 \\Leftrightarrow 4 = \\dfrac{10(x - 12)}{2x - 12 - y}$$ $$\\Leftrightarrow 2(2x - 12 - y) = 5(x - 12) \\Leftrightarrow 4x - 24 - 2y = 5x - 60 \\Leftrightarrow x + 2y = 36 \\quad (2)$$ Từ (1) và (2) ta có hệ phương trình: $\\left\\{\\begin{aligned}x+y=26\\\\x+2y=36\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}x=16\\\\y=10.\\end{aligned}\\right.$ Vậy số người thuộc nhóm tuổi $[40; 50)$ là 10 người.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, cho các điểm $A(1;2;3)$, $B(-1;1;3)$, $C(3;6;9)$ và điểm $M$ thay đổi trong mặt phẳng $(Oxy)$. Giá trị nhỏ nhất của biểu thức $\\overrightarrow{MA} \\cdot (2\\overrightarrow{MB} - \\overrightarrow{MC})$ bằng",
            "options": [
                "$0$",
                "$3$",
                "$-37$",
                "$-27$"
            ],
            "ans": 3,
            "explain": "Gọi $I$ là điểm thỏa mãn $2\\overrightarrow{IB} - \\overrightarrow{IC} = \\overrightarrow{0} \\Rightarrow \\overrightarrow{OI} = 2\\overrightarrow{OB} - \\overrightarrow{OC} = 2(-1;1;3) - (3;6;9) = (-5;-4;-3) \\Rightarrow I(-5;-4;-3)$. Khi đó: $$2\\overrightarrow{MB} - \\overrightarrow{MC} = 2(\\overrightarrow{MI} + \\overrightarrow{IB}) - (\\overrightarrow{MI} + \\overrightarrow{IC}) = \\overrightarrow{MI} + (2\\overrightarrow{IB} - \\overrightarrow{IC}) = \\overrightarrow{MI}$$ Biểu thức trở thành $P = \\overrightarrow{MA} \\cdot \\overrightarrow{MI}$.<br> Gọi $J$ là trung điểm của đoạn thẳng $AI$. Tọa độ điểm $J$ là: $$J=(-2; -1; 0)$$ Ta có: $$P = \\overrightarrow{MA} \\cdot \\overrightarrow{MI} = (\\overrightarrow{MJ} + \\overrightarrow{JA}) \\cdot (\\overrightarrow{MJ} + \\overrightarrow{JI}) = MJ^2 - JA^2 \\quad (\\text{vì } \\overrightarrow{JI} = -\\overrightarrow{JA})$$ Độ dài $JA = \\sqrt{(1 - (-2))^2 + (2 - (-1))^2 + (3 - 0)^2} = \\sqrt{3^2 + 3^2 + 3^2} = \\sqrt{27}$.<br> Suy ra $P = MJ^2 - 27$. Để $P$ đạt giá trị nhỏ nhất thì $MJ$ phải nhỏ nhất. Điểm $M \\in (Oxy)$ và điểm $J(-2;-1;0)$ nằm trên mặt phẳng $(Oxy)$ (do cao độ bằng 0). Do đó, $MJ$ nhỏ nhất bằng 0 khi $M \\equiv J$. Vậy giá trị nhỏ nhất của biểu thức là $-27$.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Người ta dự định đào một hầm rượu có dạng hình chóp cụt đều có $2$ đáy là tứ giác đều, với hai cạnh đáy lần lượt là $7\\text{m}$ và $5\\text{m}$. Mặt bên tạo với đáy nhỏ thành một góc nhị diện có số đo bằng $120^\\circ$. Số mét khối đất cần phải di chuyển ra khỏi hầm gần bằng với kết quả nào dưới đây?",
            "options": [
                "$60,82$",
                "$64,24$",
                "$62,93$",
                "$58,94$"
            ],
            "ans": 2,
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185427360_791.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Đáy lớn là hình vuông cạnh $a = 7$, đáy nhỏ là hình vuông cạnh $b = 5$.<br> Diện tích hai đáy: $S_1 = 49$, $S_2 = 25$.<br> Xét mặt cắt đi qua trung điểm của hai cạnh đối diện ở hai đáy và tâm của hình chóp cụt. Ta được một hình thang cân với đáy lớn bằng $7$, đáy nhỏ bằng $5$.<br> Góc giữa mặt bên và đáy nhỏ là $120^\\circ$, suy ra góc ở đáy của hình thang cân (góc giữa cạnh bên của hình thang và đáy lớn) là $180^\\circ - 120^\\circ = 60^\\circ$.<br> Khoảng cách từ chân đường cao hạ từ đáy nhỏ xuống đáy lớn đến mép ngoài đáy lớn là: $x = \\dfrac{7-5}{2} = 1$.\\ Chiều cao của hình chóp cụt là: $h = x \\cdot \\tan(60^\\circ) = 1 \\cdot \\sqrt{3} = \\sqrt{3}$.<br> Thể tích khối đất cần đào là: $$V = \\dfrac{h}{3}(S_1 + S_2 + \\sqrt{S_1 S_2}) = \\dfrac{\\sqrt{3}}{3}(49 + 25 + \\sqrt{49 \\cdot 25}) = \\dfrac{\\sqrt{3}}{3}(74 + 35) = \\dfrac{109\\sqrt{3}}{3} \\approx 62{,}93 \\text{ m}^3.$$",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $C$ với $CA=CB=a$. Trên đường chéo $CA'$ lấy hai điểm $M$, $N$. Trên đường chéo $AB'$ lấy được hai điểm $P$, $Q$ sao cho $MNPQ$ là tứ diện đều. Tính thể tích khối lăng trụ $ABC.A'B'C'$.\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185457551_415.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "options": [
                "$\\dfrac{a^3}{4}$",
                "$\\dfrac{a^3}{2}$",
                "$2a^3$",
                "$\\dfrac{a^3}{6}$"
            ],
            "ans": 1,
            "explain": "Vì $MNPQ$ là tứ diện đều có các cặp đỉnh nằm trên hai đường thẳng chéo nhau $CA'$ và $AB'$ nên hai đường thẳng này phải vuông góc với nhau.<br> Chọn hệ trục tọa độ $Oxyz$ với $C \\equiv O(0;0;0)$, $A(a;0;0)$, $B(0;a;0)$, $C'(0;0;h)$.<br> Khi đó $A'(a;0;h)$ và $B'(0;a;h)$.<br> Ta có $\\overrightarrow{CA'} = (a; 0; h)$ và $\\overrightarrow{AB'} = (-a; a; h)$.<br> Điều kiện $\\overrightarrow{CA'} \\perp \\overrightarrow{AB'}$ tương đương với: $$\\overrightarrow{CA'} \\cdot \\overrightarrow{AB'} = 0 \\Leftrightarrow -a^2 + 0 + h^2 = 0 \\Leftrightarrow h = a.$$ Chiều cao của lăng trụ là $h=a$.<br> Diện tích đáy $ABC$ là $S_{ABC} = \\dfrac{1}{2} CA \\cdot CB = \\dfrac{1}{2} a^2$.<br> Thể tích khối lăng trụ là $V = S_{ABC} \\cdot h = \\dfrac{1}{2} a^2 \\cdot a = \\dfrac{a^3}{2}$.",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho hình lăng trụ tam giác đều $ABC.A_1B_1C_1$ có cạnh đáy bằng $x$ và chiều cao bằng $y$. Để góc $(AC_1, CB_1) > 60^\\circ$ thì $\\dfrac{y}{x}$ thuộc khoảng nào?",
            "options": [
                "$(0; \\sqrt{2})$",
                "$\\left(\\sqrt{2}; \\dfrac{3}{2}\\right)$",
                "$\\left(\\dfrac{3}{2}; 2\\right)$",
                "$(2; 2\\sqrt{3})$"
            ],
            "ans": 0,
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185479145_895.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Ta có $\\overrightarrow{AC_1} = \\overrightarrow{AC} + \\overrightarrow{CC_1}$ và $\\overrightarrow{CB_1} = \\overrightarrow{CB} + \\overrightarrow{BB_1}$. Đặt $\\vec{u} = \\overrightarrow{AC_1}$, $\\vec{v} = \\overrightarrow{CB_1}$.<br> Độ dài $|\\vec{u}| = |\\vec{v}| = \\sqrt{x^2+y^2}$.<br> Tích vô hướng: $$\\vec{u} \\cdot \\vec{v} = (\\overrightarrow{AC} + \\overrightarrow{CC_1}) \\cdot (\\overrightarrow{CB} + \\overrightarrow{BB_1}) = \\overrightarrow{AC} \\cdot \\overrightarrow{CB} + \\overrightarrow{CC_1} \\cdot \\overrightarrow{BB_1}$$ (do $\\overrightarrow{AC} \\perp \\overrightarrow{BB_1}$ và $\\overrightarrow{CC_1} \\perp \\overrightarrow{CB}$).<br> $\\overrightarrow{AC} \\cdot \\overrightarrow{CB} = - \\overrightarrow{CA} \\cdot \\overrightarrow{CB} = - x \\cdot x \\cdot \\cos(60^\\circ) = -\\dfrac{x^2}{2}$.<br> $\\overrightarrow{CC_1} \\cdot \\overrightarrow{BB_1} = y^2$.<br> Suy ra $\\vec{u} \\cdot \\vec{v} = y^2 - \\dfrac{x^2}{2}$.<br> Gọi $\\alpha$ là góc giữa hai đường thẳng $AC_1$ và $CB_1$. Ta có: $$\\cos \\alpha = \\dfrac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| |\\vec{v}|} = \\dfrac{\\left|y^2 - \\dfrac{x^2}{2}\\right|}{x^2+y^2}$$ Theo đề bài, $\\alpha > 60^\\circ \\Rightarrow \\cos \\alpha < \\dfrac{1}{2}$.<br> $$\\dfrac{\\left|y^2 - \\dfrac{x^2}{2}\\right|}{x^2+y^2} < \\dfrac{1}{2} \\Leftrightarrow 2\\left|y^2 - \\dfrac{x^2}{2}\\right| < x^2+y^2$$ Đặt $t = \\left(\\dfrac{y}{x}\\right)^2 > 0$. Chia cả hai vế cho $x^2$, ta được: $2|t-0{,}5|<1+t$. <br><b>-</b> TH1: $t \\ge 0{,}5 \\Rightarrow 2(t - 0{,}5) < 1 + t \\Leftrightarrow 2t - 1 < 1 + t \\Leftrightarrow t < 2$. Kết hợp điều kiện: $0{,}5 \\le t < 2$. <br><b>-</b> TH2: $t < 0{,}5 \\Rightarrow 2(0{,}5 - t) < 1 + t \\Leftrightarrow 1 - 2t < 1 + t \\Leftrightarrow 0 < 3t$ (luôn đúng với $t>0$). Kết hợp điều kiện: $0 < t < 0{,}5$. Vậy $0 < t < 2 \\Rightarrow 0 < \\left(\\dfrac{y}{x}\\right)^2 < 2 \\Rightarrow 0 < \\dfrac{y}{x} < \\sqrt{2}$.",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Chọn ngẫu nhiên $2$ đỉnh của một hình đa giác đều $12$ cạnh nội tiếp trong đường tròn tâm $O$ bán kính $R$. Tính xác suất để khoảng cách giữa hai đỉnh đó bằng $R\\sqrt{2}$ (làm tròn đến hàng phần trăm).",
            "options": [
                "$0,18$",
                "$0,21$",
                "$0,16$",
                "$0,19$"
            ],
            "ans": 0,
            "explain": "Số cách chọn ngẫu nhiên $2$ đỉnh từ $12$ đỉnh là $n(\\Omega) = \\mathrm{C}_{12}^2 = 66$.<br> Gọi độ dài dây cung nối $2$ đỉnh chắn cung có số đo $\\alpha$ là $L = 2R\\sin\\dfrac{\\alpha}{2}$.<br> Để khoảng cách bằng $R\\sqrt{2}$, ta có: $$2R\\sin\\dfrac{\\alpha}{2} = R\\sqrt{2} \\Leftrightarrow \\sin\\dfrac{\\alpha}{2} = \\dfrac{\\sqrt{2}}{2} \\Leftrightarrow \\dfrac{\\alpha}{2} = 45^\\circ \\Leftrightarrow \\alpha = 90^\\circ$$ Góc ở tâm chắn bởi hai đỉnh kề nhau của đa giác đều $12$ cạnh là $\\dfrac{360^\\circ}{12}=30^\\circ$.<br> Để có góc ở tâm $90^\\circ$, hai đỉnh được chọn phải cách nhau $90 : 30 = 3$ cạnh.<br> Mỗi đỉnh sẽ tạo với đúng 2 đỉnh khác (một theo chiều kim đồng hồ, một ngược chiều) một dây cung có độ dài như vậy. Tuy nhiên, mỗi cặp được tính 2 lần.<br> Tổng số cặp đỉnh thỏa mãn là $\\dfrac{12 \\times 2}{2} = 12$ cặp.<br> Xác suất cần tìm là $P = \\dfrac{12}{66} = \\dfrac{2}{11} \\approx 0{,}1818\\approx 0{,}18$.",
            "id": "",
            "point": "1"
        },
        {
            "type": "mcq",
            "q": "Cho lăng trụ $ABC.A'B'C'$ có $\\widehat{BAC}=60^\\circ$; $AC=120$; $AB=40$ và khoảng cách giữa hai đáy là $45$. Biết hình chiếu của $A'$ lên mặt đáy $(ABC)$ là điểm $H$ thuộc cạnh $BC$. Hai mặt phẳng $(ABB'A')$ và $(ACC'A')$ cùng tạo với mặt đáy góc bằng nhau. Khoảng cách giữa hai đường thẳng $AB'$ và $A'C$ gần với số nào sau đây?",
            "options": [
                "$10$",
                "$7$",
                "$32$",
                "$21$"
            ],
            "ans": 3,
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185510272_576.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Gọi $\\varphi_1, \\varphi_2$ lần lượt là góc tạo bởi $(ABB'A'), (ACC'A')$ với đáy $(ABC)$.<br> Kẻ $HM \\perp AB$ tại $M$, $HN \\perp AC$ tại $N$.<br> Ta có $\\left\\{\\begin{aligned} AB \\perp HM \\\\ AB \\perp A'H\\end{aligned}\\right. \\Rightarrow AB \\perp (A'HM) \\Rightarrow \\widehat{A'MH} = \\varphi_1$.<br> Tương tự $\\widehat{A'NH} = \\varphi_2$.<br> Theo giả thiết $\\varphi_1 = \\varphi_2 \\Rightarrow \\Delta A'HM = \\Delta A'HN \\Rightarrow HM = HN$.<br> Suy ra $H$ thuộc đường phân giác trong của góc $\\widehat{BAC}$.<br> Áp dụng tính chất đường phân giác trong tam giác $ABC$: $$\\dfrac{HB}{HC} = \\dfrac{AB}{AC} = \\dfrac{40}{120} = \\dfrac{1}{3} \\Rightarrow \\overrightarrow{BH} = \\dfrac{1}{4}\\overrightarrow{BC}.$$ Phân tích véc-tơ theo cơ sở $\\overrightarrow{AB}, \\overrightarrow{AC}$: $$\\overrightarrow{AH} = \\overrightarrow{AB} + \\overrightarrow{BH} = \\overrightarrow{AB} + \\dfrac{1}{4}(\\overrightarrow{AC} - \\overrightarrow{AB}) = \\dfrac{3}{4}\\overrightarrow{AB} + \\dfrac{1}{4}\\overrightarrow{AC}.$$ Xét các tích vô hướng và độ dài: <br><b>-</b> $S_{\\Delta ABC} = \\dfrac{1}{2}AB \\cdot AC \\cdot \\sin 60^\\circ = \\dfrac{1}{2} \\cdot 40 \\cdot 120 \\cdot \\dfrac{\\sqrt{3}}{2} = 1200\\sqrt{3}$. <br><b>-</b> $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\cdot AC \\cdot \\cos 60^\\circ = 40 \\cdot 120 \\cdot \\dfrac{1}{2} = 2400$. <br><b>-</b> $AH^2 = \\left( \\dfrac{3}{4}\\overrightarrow{AB} + \\dfrac{1}{4}\\overrightarrow{AC} \\right)^2 = \\dfrac{9}{16}AB^2 + \\dfrac{1}{16}AC^2 + \\dfrac{3}{8}\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2700$. <br><b>-</b> $AA'^2 = A'H^2 + AH^2 = 45^2 + 2700 = 4725$. <br><b>-</b> Vì $A'H \\perp (ABC)$ nên $\\overrightarrow{AA'} \\cdot \\overrightarrow{AB} = \\overrightarrow{AH} \\cdot \\overrightarrow{AB} = 1800$ và $\\overrightarrow{AA'} \\cdot \\overrightarrow{AC} = 5400$. Sử dụng phương pháp thể tích để tính khoảng cách giữa hai đường thẳng chéo nhau $AB'$ và $A'C$: $$d(AB', A'C) = \\dfrac{6V_{A.A'B'C}}{S_{\\text{hbh}}}$$ trong đó $V_{A.A'B'C} = V_{A'.ABC} = \\dfrac{1}{3} \\cdot S_{\\Delta ABC} \\cdot A'H = \\dfrac{1}{3} \\cdot 1200\\sqrt{3} \\cdot 45 = 18000\\sqrt{3}$.<br> Diện tích hình bình hành tạo bởi hai véc-tơ $\\vec{u} = \\overrightarrow{AB'}$ và $\\vec{v} = \\overrightarrow{A'C}$ được tính bằng công thức: $$S_{\\text{hbh}} = \\sqrt{|\\vec{u}|^2 |\\vec{v}|^2 - (\\vec{u} \\cdot \\vec{v})^2}.$$ Ta có: \\begin{eqnarray*} & \\vec{u} &= \\overrightarrow{AB'} = \\overrightarrow{AB} + \\overrightarrow{AA'} <br> & \\vec{v} &= \\overrightarrow{A'C} = \\overrightarrow{AC} - \\overrightarrow{AA'} \\end{eqnarray*} Tính toán các đại lượng: <br><b>-</b> $|\\vec{u}|^2 = AB^2 + AA'^2 + 2\\overrightarrow{AB}\\cdot\\overrightarrow{AA'} = 1600 + 4725 + 3600 = 9925$. <br><b>-</b> $|\\vec{v}|^2 = AC^2 + AA'^2 - 2\\overrightarrow{AC}\\cdot\\overrightarrow{AA'} = 14400 + 4725 - 10800 = 8325$. <br><b>-</b> $\\vec{u} \\cdot \\vec{v} = (\\overrightarrow{AB} + \\overrightarrow{AA'})(\\overrightarrow{AC} - \\overrightarrow{AA'}) = 1275$. Suy ra $S_{\\text{hbh}} = \\sqrt{9925 \\cdot 8325 - 1275^2} = 9000$.<br> Vậy $d(AB', A'C) = \\dfrac{6 \\cdot 18000\\sqrt{3}}{9000} = 12\\sqrt{3} \\approx 20{,}78$.",
            "id": "dashed",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $y=\\dfrac{x+3}{x-1}$ có đồ thị là $(C)$, điểm $M$ thay đổi thuộc đường thẳng $d\\colon y=1-2x$ sao cho qua $M$ có hai tiếp tuyến của $(C)$ với hai tiếp điểm tương ứng là $A, B$. Các mệnh đề sau đúng hay sai?",
            "items": [
                {
                    "sub": "Tâm đối xứng của $(C)$ nằm trên đường thẳng $\\Delta\\colon x+y-2=0$",
                    "ans": "T"
                },
                {
                    "sub": "Đường thẳng $AB$ luôn đi qua một điểm cố định là $H$. Khi đó độ dài $OH=\\sqrt{58}$",
                    "ans": "T"
                },
                {
                    "sub": "Tiếp tuyến tại giao điểm của đồ thị $(C)$ với trục tung chắn hai trục tọa độ một đa giác có diện tích bằng $\\dfrac{9}{4}$",
                    "ans": "F"
                },
                {
                    "sub": "Tích khoảng cách từ một điểm bất kì thuộc $(C)$ đến hai đường tiệm cận bằng $4$",
                    "ans": "T"
                }
            ],
            "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{1\\}$. Ta có $y=\\dfrac{x+3}{x-1}=1+\\dfrac{4}{x-1}$. Đồ thị hàm số có tiệm cận đứng $x=1$, tiệm cận ngang $y=1$. Tâm đối xứng của đồ thị là giao điểm hai đường tiệm cận $I(1;1)$. <br><b>-</b> Thay tọa độ $I(1;1)$ vào phương trình $\\Delta\\colon 1+1-2=0$ (luôn đúng). Vậy $I \\in \\Delta$. <br><b>-</b> Chuyển hệ trục tọa độ về $Ixy$ bằng phép tịnh tiến vector $\\overrightarrow{OI}$. Đặt $\\left\\{\\begin{aligned}X=x-1\\\\Y=y-1\\end{aligned}\\right.$.<br> Khi đó phương trình của $(C)$ trở thành $Y=\\dfrac{4}{X} \\Leftrightarrow XY=4$. Phương trình đường thẳng $d$ trở thành $(Y+1)=1-2(X+1) \\Leftrightarrow Y=-2X-2$.<br> Giả sử $M \\in d$ có tọa độ theo hệ mới là $M(m; -2m-2)$.<br> Phương trình đường thẳng đi qua hai tiếp điểm $A, B$ của tiếp tuyến kẻ từ $M$ đến đồ thị hàm số $XY=k$ là $Y_MX + X_MY = 2k$.<br> Áp dụng vào bài toán với $k=4$, ta có phương trình đường thẳng $AB$ là: $$(-2m-2)X + mY = 8 \\Leftrightarrow m(Y-2X) - 2X - 8 = 0.$$ Để đường thẳng $AB$ luôn đi qua điểm cố định với mọi $m$ thì: $$\\left\\{\\begin{aligned}Y-2X=0\\\\-2X-8=0\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}X=-4\\\\Y=-8.\\end{aligned}\\right.$$ Chuyển về hệ tọa độ cũ: $\\left\\{\\begin{aligned}x=X+1=-3\\\\y=Y+1=-7.\\end{aligned}\\right. \\Rightarrow H(-3;-7)$.<br> Độ dài đoạn $OH=\\sqrt{(-3)^2+(-7)^2}=\\sqrt{9+49}=\\sqrt{58}$. <br><b>-</b> Giao điểm của $(C)$ với trục tung là $P(0;-3)$. Ta có $y'=\\dfrac{-4}{(x-1)^2} \\Rightarrow y'(0)=-4$.<br> Phương trình tiếp tuyến tại $P$ là $y=-4(x-0)-3 \\Leftrightarrow y=-4x-3$.<br> Giao với trục hoành: Cho $y=0 \\Rightarrow x=-\\dfrac{3}{4} \\Rightarrow Q\\left(-\\dfrac{3}{4};0\\right)$.<br> Diện tích tam giác tạo bởi tiếp tuyến và hai trục tọa độ là $$S_{OPQ} = \\dfrac{1}{2} \\cdot OP \\cdot OQ = \\dfrac{1}{2} \\cdot |-3| \\cdot \\left|-\\dfrac{3}{4}\\right| = \\dfrac{9}{8}.$$ Mệnh đề sai vì $\\dfrac{9}{8} \\neq \\dfrac{9}{4}$. <br><b>-</b> Lấy điểm $K\\left(x_0; 1+\\dfrac{4}{x_0-1}\\right) \\in (C)$ bất kì ($x_0 \\neq 1$).<br> Khoảng cách từ $K$ đến tiệm cận đứng $\\Delta_1\\colon x-1=0$ là $d_1=|x_0-1|$.<br> Khoảng cách từ $K$ đến tiệm cận ngang $\\Delta_2\\colon y-1=0$ là $d_2=\\left|1+\\dfrac{4}{x_0-1}-1\\right|=\\dfrac{4}{|x_0-1|}$.<br> Tích khoảng cách: $d_1 \\cdot d_2 = |x_0-1| \\cdot \\dfrac{4}{|x_0-1|} = 4$.",
            "id": "12-EX-1-2026",
            "point": "4"
        },
        {
            "type": "tf",
            "q": "Bảng 1, Bảng 2 lần lượt biểu diễn mẫu số liệu ghép nhóm thống kê mức lương của hai công ty A, B (đơn vị: triệu đồng). <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185546216_583.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Các mệnh đề sau đúng hay sai?",
            "items": [
                {
                    "sub": "Độ lệch chuẩn của mẫu số liệu ghép nhóm của công ty A là $5$",
                    "ans": "F"
                },
                {
                    "sub": "Nhận thấy độ lệch chuẩn của công ty A nhỏ hơn công ty B nên mức lương của công ty A đồng đều hơn",
                    "ans": "T"
                },
                {
                    "sub": "Số trung bình cộng của mẫu số liệu ghép nhóm của công ty A là $\\dfrac{62}{3}$",
                    "ans": "F"
                },
                {
                    "sub": "Phương sai của mẫu số liệu ghép nhóm của công ty B (làm tròn kết quả đến hàng phần trăm) là $52{,}91$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> <b>Công ty A:</b> Số trung bình: $\\bar{x}_A = \\dfrac{12{,}5\\cdot15 + 17{,}5\\cdot18 + 22{,}5\\cdot10 + 27{,}5\\cdot10 + 32{,}5\\cdot5 + 37{,}5\\cdot2}{60} = \\dfrac{1255}{60} \\approx 20{,}92$.<br> Phương sai $s^2_A = \\dfrac{1}{60} \\sum n_i (c_i - \\bar{x}_A)^2 \\approx 49{,}8$. Độ lệch chuẩn $s_A \\approx 7{,}05 \\neq 5$. <br><b>-</b> <b>Công ty B:</b> Số trung bình: $\\bar{x}_B = \\dfrac{12{,}5\\cdot25 + 17{,}5\\cdot15 + 22{,}5\\cdot7 + 27{,}5\\cdot5 + 32{,}5\\cdot5 + 37{,}5\\cdot3}{60} = \\dfrac{1145}{60} \\approx 19{,}08$. Phương sai $s^2_B \\approx 57{,}8$. Độ lệch chuẩn $s_B \\approx 7{,}6$.<br> Vì $s_A < s_B$ ($7{,}05 < 7{,}6$) nên mức lương công ty A đồng đều hơn. <br><b>-</b> Số trung bình của A là $20{,}916$. Kiểm tra $\\dfrac{62}{3} = 20{,}66$. Khác nhau. <br><b>-</b> Phương sai công ty B tính được xấp xỉ $57{,}8$, khác $52{,}91$.",
            "id": "12-EX-1-2026",
            "point": "4"
        },
        {
            "type": "tf",
            "q": "Cho hình chóp $S.ABCD$ đáy là hình vuông $ABCD$ tâm $O$, $SA \\perp (ABCD)$.",
            "items": [
                {
                    "sub": "$AC \\perp SB$",
                    "ans": "F"
                },
                {
                    "sub": "Biết $SA=2a, AB=a$ và $I$ là trung điểm của $SD$. Gọi $H$ là hình chiếu của $A$ lên $SB$. Khi đó $\\sin$ của góc giữa đường thẳng $AH$ và mặt phẳng $(AIC)$ bằng $\\dfrac{\\sqrt{5}}{3}$",
                    "ans": "T"
                },
                {
                    "sub": "Biết khoảng cách từ $C$ đến mặt phẳng $(SBD)$ bằng $3$. Khi đó thể tích khối chóp $S.ABCD$ lớn nhất bằng $27\\sqrt{3}$",
                    "ans": "F"
                },
                {
                    "sub": "Biết $SA=2$, $SB=3$. Gọi $G$ là trọng tâm tam giác $ABD$. Mặt phẳng $(\\alpha)$ đi qua trung điểm $J$ của $SG$ cắt các cạnh $SA$, $SB$, $SD$ lần lượt tại $M$, $N$, $P$. Khi đó giá trị nhỏ nhất của biểu thức $T=\\dfrac{1}{SM^2} + \\dfrac{1}{SN^2} + \\dfrac{1}{SP^2}$ bằng $\\dfrac{m}{n}$ với $m, n \\in \\mathbb{N}^*$ và $\\dfrac{m}{n}$ là phân số tối giản. Khi đó $m+n=29$",
                    "ans": "T"
                }
            ],
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185571844_652.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> <br><b>-</b> <b>Sai.</b> Nếu $AC\\perp SB$ thì $AC\\perp AB$ do $AB$ là hình chiếu vuông góc của $SB$ trên mặt phẳng $(ABCD)$. Điều này vô lý, vậy $AC$ không vuông góc $SB$. <br><b>-</b> <b>Đúng.</b> Chọn hệ trục tọa độ $Axyz$ với $A(0;0;0)$, $B(a;0;0)$, $D(0;a;0)$, $S(0;0;2a)$. Suy ra $C(a;a;0)$.<br> $I$ là trung điểm $SD \\Rightarrow I\\left(0;\\dfrac{a}{2};a\\right)$.<br> Véc-tơ pháp tuyến của $(AIC)$ là $\\vec{n} = [\\overrightarrow{AI}, \\overrightarrow{AC}]$. $\\overrightarrow{AI} = (0; 0{,}5a; a)$, $\\overrightarrow{AC}=(a;a;0)$. $\\vec{n} = (-a^2; a^2; -0{,}5a^2) \\sim (2; -2; 1)$.<br> $H \\in SB$. Trong tam giác vuông $\\Delta SAB$, đường cao $AH$. Ta tính được $H$ chia $SB$ theo tỉ lệ $SH/SB = SA^2/SB^2 = 4/5$. $\\overrightarrow{SH} = \\dfrac{4}{5}\\overrightarrow{SB} \\Rightarrow H\\left(\\dfrac{4a}{5}; 0; \\dfrac{2a}{5}\\right)$. $\\overrightarrow{AH} = \\dfrac{a}{5}(4; 0; 2) \\sim \\vec{u}(2;0;1)$.<br> $\\sin(AH, (AIC)) = \\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\cdot|\\vec{n}|} = \\dfrac{|2(2)+0(-2)+1(1)|}{\\sqrt{5}\\cdot\\sqrt{4+4+1}} = \\dfrac{5}{3\\sqrt{5}} = \\dfrac{\\sqrt{5}}{3}$. <br><b>-</b> <b>Sai.</b> Gọi $O$ là tâm đáy. $d(C, (SBD)) = d(A, (SBD))$. Kẻ $AK \\perp SO \\Rightarrow d(A, (SBD)) = AK = 3$.<br> Đặt $SA=h, AO=x$. Ta có $\\dfrac{1}{h^2} + \\dfrac{1}{x^2} = \\dfrac{1}{9}$. $V = \\dfrac{1}{3}h \\cdot S_{ABCD} = \\dfrac{1}{3}h \\cdot (x\\sqrt{2})^2 = \\dfrac{2}{3}hx^2$. Từ giả thiết: $x^2 = \\dfrac{9h^2}{h^2-9}$ (với $h>3$). $V(h) = \\dfrac{6h^3}{h^2-9}$. Xét hàm số trên $(3; +\\infty)$, ta tìm được $\\min V = 27\\sqrt{3}$ tại $h=3\\sqrt{3}$. Hàm số không có giá trị lớn nhất (khi $h \\to 3^+$ thì $V \\to +\\infty$). <br><b>-</b> <b>Đúng.</b> Ta tính được $AB=\\sqrt{SB^2-SA^2}=\\sqrt{5}$. Suy ra $AD=\\sqrt{5}$. $SD=\\sqrt{SA^2+AD^2} = \\sqrt{4+5}=3$. Vậy $SA=2, SB=3, SD=3$. Gọi $a=\\dfrac{SA}{SM}, b=\\dfrac{SB}{SN}, c=\\dfrac{SD}{SP}$. Vì $G$ là trọng tâm $\\Delta ABD \\Rightarrow \\overrightarrow{SG} = \\dfrac{1}{3}(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SD})$. $J$ là trung điểm $SG \\Rightarrow \\overrightarrow{SJ} = \\dfrac{1}{6}(\\overrightarrow{SA}+\\overrightarrow{SB}+\\overrightarrow{SD})$. Điều kiện $M, N, P, J$ đồng phẳng: $\\dfrac{1}{6}a + \\dfrac{1}{6}b + \\dfrac{1}{6}c = 1 \\Leftrightarrow a+b+c=6$. Cần tìm GTNN của $T = \\dfrac{a^2}{SA^2} + \\dfrac{b^2}{SB^2} + \\dfrac{c^2}{SD^2} = \\dfrac{a^2}{4} + \\dfrac{b^2}{9} + \\dfrac{c^2}{9}$. Áp dụng BĐT Bunyakovsky: $T(2^2+3^2+3^2) = \\left(\\dfrac{a^2}{4} + \\dfrac{b^2}{9} + \\dfrac{c^2}{9}\\right)(4+9+9) \\ge \\left(\\dfrac{a}{2}\\cdot 2 + \\dfrac{b}{3}\\cdot 3 + \\dfrac{c}{3}\\cdot 3\\right)^2 = (a+b+c)^2 = 36$. $\\Rightarrow 22T \\ge 36 \\Rightarrow T \\ge \\dfrac{18}{11}$. Vậy $m=18, n=11 \\Rightarrow m+n=29$.",
            "id": "dashed",
            "point": "4"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $f(x)=ax^3+bx^2+cx+d$, với $a, b, c, d$ thuộc tập $\\mathbb{R}$ có đồ thị như hình bên. <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185591230_277.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "items": [
                {
                    "sub": "Tâm đối xứng của đồ thị hàm số $f(x)$ là $I(1;1)$",
                    "ans": "T"
                },
                {
                    "sub": "$a+2b+3c+4d=6$",
                    "ans": "F"
                },
                {
                    "sub": "Trên đoạn $[-1;2]$, tập giá trị của hàm số $g(x)=f\\left(\\dfrac{11x-x^2}{2}\\right)$ chứa tất cả $21$ giá trị nguyên",
                    "ans": "F"
                },
                {
                    "sub": "Số giá trị nguyên của tham số $m$ để hàm số $h(x)=\\dfrac{f^2(x)+mf(x)-2}{f(x)+3}$ có đúng sáu điểm cực trị thuộc khoảng $(-2;3)$ là $10$",
                    "ans": "T"
                }
            ],
            "explain": "Dựa vào đồ thị, hàm số đạt cực đại tại $(0;3)$ và cực tiểu tại $(2;-1)$.<br> Ta có hệ phương trình xác định hệ số: $$\\left\\{\\begin{aligned} d=3 \\\\ f'(0)=c=0 \\\\ f'(2)=12a+4b+c=0 \\\\ f(2)=8a+4b+2c+d=-1\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned} a=1 \\\\ b=-3 \\\\ c=0 \\\\ d=3.\\end{aligned}\\right.$$ Vậy $f(x)=x^3-3x^2+3$. <br><b>-</b> Ta có $f'(x)=3x^2-6x$; $f''(x)=6x-6$. $f''(x)=0 \\Leftrightarrow x=1 \\Rightarrow y=1$. Vậy tâm đối xứng của đồ thị là $I(1;1)$. <br><b>-</b> Ta có $a+2b+3c+4d = 1 + 2(-3) + 3(0) + 4(3) = 1-6+0+12 = 7 \\neq 6$. <br><b>-</b> Đặt $u(x)=\\dfrac{11x-x^2}{2}$. Với $x \\in [-1;2]$, ta có $u'(x)=\\dfrac{11-2x}{2} > 0$.<br> Suy ra miền giá trị của $u$ là $[u(-1); u(2)] = [-6; 9]$.<br> Xét hàm số $f(u)=u^3-3u^2+3$ trên đoạn $[-6; 9]$.<br> $f'(u)=3u^2-6u=0 \\Leftrightarrow \\left[\\begin{aligned}u=0 \\\\u=2.\\end{aligned}\\right.$<br> Tính các giá trị: $f(-6)=-321$; $f(0)=3$; $f(2)=-1$; $f(9)=489$.<br> Miền giá trị của $g(x)$ là $[-321; 489]$. Tập hợp này chứa $489 - (-321) + 1 = 811$ số nguyên. <br><b>-</b> Đạo hàm $h'(x) = \\left[ \\dfrac{f^2(x)+mf(x)-2}{f(x)+3} \\right]' = \\dfrac{f'(x) \\cdot \\left[ f^2(x)+6f(x)+3m+2 \\right]}{(f(x)+3)^2}$.<br> Số điểm cực trị của $h(x)$ là số lần đổi dấu của $h'(x)$. Phương trình $h'(x)=0 \\Leftrightarrow \\left[\\begin{aligned} f'(x)=0 \\quad (1) \\\\ f^2(x)+6f(x)+3m+2=0 \\quad (2)\\end{aligned}\\right.$.<br> Trên khoảng $(-2;3)$, phương trình $(1)$ có 2 nghiệm $x=0, x=2$.<br> Để hàm số có đúng $6$ cực trị, phương trình $(2)$ (ẩn $f(x)$) phải sinh ra thêm $4$ nghiệm bội lẻ $x$ phân biệt khác $0, 2$. Đặt $t=f(x)$. Phương trình $(2)$ trở thành $g(t) = t^2+6t+3m+2=0$.<br> Khảo sát $f(x)$ trên $(-2;3)$: $f(x)$ đi từ $-17$ lên $3$, xuống $-1$, rồi lên $3$.<br> Để có đúng $4$ nghiệm $x$, phương trình bậc hai theo $t$ phải có hai nghiệm phân biệt $t_1$, $t_2$ sao cho đường thẳng $y=t_1$ cắt đồ thị $f(x)$ tại $3$ điểm (tức $t_1 \\in (-1;3)$) và đường thẳng $y=t_2$ cắt đồ thị $f(x)$ tại $1$ điểm (tức $t_2 \\in (-17;-1)$).<br> Yêu cầu bài toán tương đương: phương trình $t^2+6t+3m+2=0$ có hai nghiệm phân biệt thỏa mãn $-17 < t_1 < -1 < t_2 < 3$.<br> Đặt $P(t) = t^2+6t+3m+2$. Điều kiện là: $$\\left\\{\\begin{aligned} P(-1) < 0 \\\\ P(3) > 0 \\\\ P(-17) > 0\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned} 1-6+3m+2 < 0 \\\\ 9+18+3m+2 > 0 \\\\ (-17)^2+6(-17)+3m+2 > 0\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned} 3m < 3 \\\\ 3m > -29 \\\\ 3m > -189\\end{aligned}\\right. \\Leftrightarrow -\\dfrac{29}{3} < m < 1.$$ Vì $m \\in \\mathbb{Z} \\Rightarrow m \\in \\{-9; -8; \\dots; 0\\}$. Vậy có $10$ giá trị nguyên của $m$.",
            "id": "12-EX-1-2026",
            "point": "4"
        },
        {
            "type": "tf",
            "q": "Cho hai đường thẳng $d_1, d_2$ song song với nhau. Trên $d_1$ lấy 7 điểm phân biệt $A_1, \\dots, A_7$ cách đều nhau $1$ cm. Trên $d_2$ lấy 6 điểm $B_1, \\dots, B_6$ cách đều nhau $1$ cm. Chọn ngẫu nhiên 3 điểm từ các điểm trên.",
            "items": [
                {
                    "sub": "Số phần tử không gian mẫu bằng $\\mathrm{C}_{13}^3$",
                    "ans": "T"
                },
                {
                    "sub": "Xác suất để ba điểm được chọn tạo thành tam giác là $\\dfrac{49}{286}$",
                    "ans": "F"
                },
                {
                    "sub": "Xác suất để 3 điểm được chọn có 1 điểm là trung điểm của đoạn thẳng có 2 đầu mút là hai điểm còn lại bằng $\\dfrac{15}{286}$",
                    "ans": "T"
                },
                {
                    "sub": "Biết khoảng cách giữa $d_1, d_2$ bằng $2$ cm. Khi đó xác suất để chọn được 3 điểm tạo thành tam giác có diện tích bằng $1$ cm$^2$ bằng $\\dfrac{71}{286}$",
                    "ans": "T"
                }
            ],
            "explain": "Tổng số điểm trên hai đường thẳng là $n = 7+6=13$ điểm. <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185612292_104.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> <br><b>-</b> Số phần tử của không gian mẫu là số cách chọn 3 điểm bất kỳ trong 13 điểm: $n(\\Omega) = \\mathrm{C}_{13}^3 = 286$. <br><b>-</b> Để 3 điểm tạo thành tam giác thì 3 điểm đó không được thẳng hàng. <br><b>-</b> Số bộ 3 điểm thẳng hàng trên $d_1$: $\\mathrm{C}_7^3 = 35$. <br><b>-</b> Số bộ 3 điểm thẳng hàng trên $d_2$: $\\mathrm{C}_6^3 = 20$. Số cách chọn 3 điểm tạo thành tam giác là: $286 - (35+20) = 231$.<br> Xác suất cần tìm là $P = \\dfrac{231}{286} = \\dfrac{21}{26} \\neq \\dfrac{49}{286}$. <br><b>-</b> Gọi 3 điểm là $M, N, P$. Để $N$ là trung điểm của $MP$ thì $M, N, P$ phải thẳng hàng và $N$ nằm giữa cách đều $M, P$. Nghĩa là 3 điểm phải cùng thuộc $d_1$ hoặc $d_2$ và chỉ số của chúng lập thành cấp số cộng. <br><b>-</b> Trên $d_1$ (các điểm $A_1, \\dots, A_7$): Các bộ thỏa mãn có dạng $(A_i, A_j, A_k)$ với $i+k=2j$. <br><b>-</b> Công sai $\\Delta = 1$: $(1,2,3); (2,3,4); (3,4,5); (4,5,6); (5,6,7)$ $\\Rightarrow$ 5 bộ. <br><b>-</b> Công sai $\\Delta = 2$: $(1,3,5); (2,4,6); (3,5,7)$ $\\Rightarrow$ 3 bộ. <br><b>-</b> Công sai $\\Delta = 3$: $(1,4,7)$ $\\Rightarrow$ 1 bộ. Tổng cộng trên $d_1$ có $5+3+1=9$ bộ. <br><b>-</b> Trên $d_2$ (các điểm $B_1, \\dots, B_6$): Tương tự. <br><b>-</b> Công sai $\\Delta = 1$: 4 bộ ($1\\to 3, \\dots, 4\\to 6$). <br><b>-</b> Công sai $\\Delta = 2$: 2 bộ ($1\\to 5, 2\\to 6$). Tổng cộng trên $d_2$ có $4+2=6$ bộ. Số kết quả thuận lợi là $9+6=15$. Xác suất $P = \\dfrac{15}{286}$. <br><b>-</b> Diện tích tam giác tạo thành là $S = \\dfrac{1}{2} \\cdot \\text{đáy} \\cdot \\text{chiều cao}$. Vì khoảng cách giữa hai đường thẳng là $h=2$ cm nên chiều cao của tam giác luôn là $2$. Để $S=1 \\Rightarrow \\dfrac{1}{2} \\cdot a \\cdot 2 = 1 \\Rightarrow a = 1$. Vậy cạnh đáy của tam giác phải nằm trên $d_1$ hoặc $d_2$ và có độ dài bằng $1$ cm. <br><b>-</b> TH1: Đáy nằm trên $d_1$. Số đoạn thẳng có độ dài $1$ cm trên $d_1$ là $6$ đoạn $(A_1A_2, \\dots, A_6A_7)$. Đỉnh còn lại phải thuộc $d_2$ (có 6 cách chọn). $\\Rightarrow 6 \\times 6 = 36$ tam giác. <br><b>-</b> TH2: Đáy nằm trên $d_2$. Số đoạn thẳng có độ dài $1$ cm trên $d_2$ là $5$ đoạn $(B_1B_2, \\dots, B_5B_6)$. Đỉnh còn lại phải thuộc $d_1$ (có 7 cách chọn). $\\Rightarrow 5 \\times 7 = 35$ tam giác. Tổng số kết quả thuận lợi: $36 + 35 = 71$. Xác suất $P = \\dfrac{71}{286}$.",
            "id": "above",
            "point": "4"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$, cho tam giác $ABC$ biết $A(3;0;0)$, $B(-3;0;0)$, $C(0;5;1)$ và $M$ là một điểm trên mặt phẳng $(Oxy)$ sao cho $MA+MB=2\\sqrt{34}$. Gọi $H(a;b;c)$ là trực tâm của tam giác $ABC$.",
            "items": [
                {
                    "sub": "Điểm $C'(0;5;-1)$ đối xứng với $C$ qua mặt phẳng $(Oxy)$",
                    "ans": "T"
                },
                {
                    "sub": "$a+52(b+c)=108$",
                    "ans": "T"
                },
                {
                    "sub": "$S_{ABC}=2\\sqrt{26}$",
                    "ans": "F"
                },
                {
                    "sub": "$MC_{\\min}=\\sqrt{2}$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> Điểm $C(0;5;1)$. Hình chiếu của $C$ lên $(Oxy)$ là $(0;5;0)$. Điểm đối xứng của $C$ qua $(Oxy)$ có hoành độ và tung độ giữ nguyên, cao độ đổi dấu. Vậy $C'(0;5;-1)$. <br><b>-</b> Ta có $AB=6$, trung điểm của $AB$ là $O(0;0;0)$. Do $\\left\\{\\begin{aligned}CA=CB=\\sqrt{3^2+5^2+1^2}=\\sqrt{35}\\\\OA=OB=3\\end{aligned}\\right.$ nên $\\Delta ABC$ cân tại $C$ và $CO \\perp AB$.<br> Vì tam giác cân tại $C$ nên trực tâm $H$ phải nằm trên đường cao $CO$.<br> Phương trình đường thẳng $CO$ qua $O(0;0;0)$ có VTCP $\\overrightarrow{OC}=(0;5;1)$ là: $\\left\\{\\begin{aligned}x=0\\\\y=5t\\\\z=t.\\end{aligned}\\right.$<br> Giả sử $H(0;5t;t)$. Ta có $\\overrightarrow{AH}=(-3;5t;t)$; $\\overrightarrow{BC}=(3;5;1)$.<br> Vì $H$ là trực tâm nên $AH \\perp BC \\Leftrightarrow \\overrightarrow{AH} \\cdot \\overrightarrow{BC} = 0$. $$-3 \\cdot 3 + 5t \\cdot 5 + t \\cdot 1 = 0 \\Leftrightarrow 26t = 9 \\Leftrightarrow t = \\dfrac{9}{26}.$$ Suy ra tọa độ $H\\left(0; \\dfrac{45}{26}; \\dfrac{9}{26}\\right) \\Rightarrow a=0; b=\\dfrac{45}{26}; c=\\dfrac{9}{26}$.<br> Giá trị biểu thức: $a+52(b+c) = 0 + 52\\left(\\dfrac{45+9}{26}\\right) = 52 \\cdot \\dfrac{54}{26} = 2 \\cdot 54 = 108$. <br><b>-</b> Diện tích tam giác $ABC$: $S = \\dfrac{1}{2} \\cdot AB \\cdot CO$. Ta có $CO = \\sqrt{0^2+5^2+1^2} = \\sqrt{26}$. $S = \\dfrac{1}{2} \\cdot 6 \\cdot \\sqrt{26} = 3\\sqrt{26}$. <br><b>-</b> Xét trong mặt phẳng $(Oxy)$ ($z=0$), $A(3;0)$, $B(-3;0)$.<br> $MA+MB=2\\sqrt{34}$. Ta có $AB=6$, $2\\sqrt{34} > 6$ nên tập hợp điểm $M$ là đường Elip $(E)$ có hai tiêu điểm $A$, $B$.<br> Ta có $2a=2\\sqrt{34} \\Rightarrow a=\\sqrt{34}$. Tiêu cự $2c=AB=6 \\Rightarrow c=3$.<br> $b^2 = a^2-c^2 = 34-9=25 \\Rightarrow b=5$.<br> Phương trình Elip $(E): \\dfrac{x^2}{34} + \\dfrac{y^2}{25} = 1$ (với $z=0$).<br> Điểm $M(x;y;0) \\in (E) \\Rightarrow x^2 = 34\\left(1-\\dfrac{y^2}{25}\\right)$. Điều kiện $y \\in [-5;5]$. Khoảng cách $MC = \\sqrt{x^2 + (y-5)^2 + (0-1)^2} = \\sqrt{x^2 + (y-5)^2 + 1}$.<br> Thay $x^2$: $MC^2 = 34 - \\dfrac{34}{25}y^2 + y^2 - 10y + 25 + 1 = -\\dfrac{9}{25}y^2 - 10y + 60$. Xét hàm số $f(y) = -\\dfrac{9}{25}y^2 - 10y + 60$ trên $[-5;5]$.<br> $f'(y) = -\\dfrac{18}{25}y - 10$. Với $y \\in [-5;5]$ thì $f'(y) < 0$.<br> Hàm số nghịch biến trên đoạn $[-5;5]$.<br> $\\min f(y) = f(5) = -\\dfrac{9}{25}(25) - 50 + 60 = -9 - 50 + 60 = 1$.<br> Vậy $MC_{\\min} = \\sqrt{1} = 1$.",
            "id": "t",
            "point": "4"
        },
        {
            "type": "short",
            "q": "Đường đi của một khinh khí cầu được gắn trong hệ trục tọa độ là một đường cong bậc hai trên bậc nhất có đồ thị cắt trục hoành tại hai điểm có tọa độ là $(1;0)$ và $(8;0)$ với đơn vị trên hệ trục tọa độ là $1$ (km). Biết rằng điểm cực đại của đồ thị hàm số là điểm $(6;5)$. <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185634804_88.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Hỏi khi khí cầu đi qua điểm cực đại và cách mặt đất $3875$ (m) thì khí cầu cách gốc tọa độ theo phương ngang bao nhiêu? (đơn vị: km)",
            "ans": "$7{,}2$",
            "explain": "Đổi $3875 \\text{ m} = 3{,}875 \\text{ km}$.<br> Gọi hàm số có dạng $y=\\dfrac{ax^2+bx+c}{mx+n}$.<br> Đồ thị cắt trục hoành tại $(1;0)$ và $(8;0)$ nên $y=k\\dfrac{(x-1)(x-8)}{mx+n}$.<br> Ta có điểm cực đại $M(6;5)$. Suy ra $\\left\\{\\begin{aligned}y(6)=5\\\\y'(6)=0\\end{aligned}\\right.$.<br> Từ $y(6)=5 \\Rightarrow k\\dfrac{5\\cdot (-2)}{6m+n}=5 \\Leftrightarrow -2k = 6m+n \\Rightarrow n = -2k-6m \\quad (1)$.<br> Đạo hàm $y' = k \\dfrac{(2x-9)(mx+n) - m(x^2-9x+8)}{(mx+n)^2}$.<br> $y'(6)=0 \\Rightarrow (12-9)(6m+n) - m(36-54+8) = 0 \\Rightarrow 3(6m+n) + 10m = 0 \\Rightarrow 28m + 3n = 0 \\quad (2)$.<br> Thế $(1)$ vào $(2)$: $28m + 3(-2k-6m) = 0 \\Rightarrow 10m - 6k = 0 \\Rightarrow k = \\dfrac{5}{3}m$.<br> Chọn $m=3 \\Rightarrow k=5$. Từ $(1) \\Rightarrow n = -10 - 18 = -28$.<br> Vậy hàm số là $y = \\dfrac{5(x-1)(x-8)}{3x-28}$.<br> Khi khí cầu cách mặt đất $3{,}875$ km, ta có phương trình: $$\\dfrac{5(x^2-9x+8)}{3x-28} = 3{,}875 = \\dfrac{31}{8}$$ $$\\Rightarrow 40(x^2-9x+8) = 31(3x-28)$$ $$\\Leftrightarrow 40x^2 - 360x + 320 = 93x - 868$$ $$\\Leftrightarrow 40x^2 - 453x + 1188 = 0 \\Leftrightarrow \\left[\\begin{aligned}x = 4{,}125\\\\x = 7{,}2.\\end{aligned}\\right.$$ Vì khí cầu đã đi qua điểm cực đại ($x>6$) nên ta chọn $x=7{,}2$.<br> Vậy khoảng cách theo phương ngang là $7{,}2$ km.",
            "id": "dashed",
            "point": "2"
        },
        {
            "type": "short",
            "q": "Trong một nhà máy có một thùng hàng được thiết kế như một khối hộp chữ nhật và một khối chóp tứ giác chồng lên nhau như hình vẽ, với $SA \\perp (ABCD)$ và $SA=8$ m. <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185649425_357.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Xét không gian $Oxyz$, mặt đất bằng phẳng là mặt phẳng $(Oxy)$, mỗi đơn vị dài $1$ m, các điểm $B(4;3;0)$, $D(2;6;0)$, $E(4;6;4)$. Vì gió to nên thùng hàng bị đổ xuống đất theo trục là đường thẳng $CD$, mặt $(CDE)$ tiếp xúc mặt đất. Sau khi đổ tọa độ điểm $S$ là $(a;b;c)$ thì giá trị của $a+2b+3c$ bằng bao nhiêu?",
            "ans": "$39$",
            "explain": "Từ giả thiết mặt đất là mặt phẳng $(Oxy) \\Rightarrow z=0$.<br> Ta xác định tọa độ các điểm còn lại của khối hộp: <br><b>-</b> Điểm $C$ là hình chiếu của $E(4;6;4)$ xuống mặt đất nên $C(4;6;0)$. <br><b>-</b> $ABCD$ là hình chữ nhật đáy dưới nên $A$ đối xứng với $C$ qua trung điểm $BD$. Suy ra $A(2;3;0)$. Theo giả thiết $SA \\perp (ABCD)$, suy ra $S$ thuộc đường thẳng đi qua $A$ và vuông góc với mặt phẳng $(Oxy)$. Do đó $x_S=x_A=2$, $y_S=y_A=3$.<br> Vì $SA=8$ nên $z_S=8$ (do $S$ ở phía trên mặt đất). Vậy $S(2;3;8)$.<br> <b>Phân tích phép quay:</b> <br><b>-</b> Trục quay là đường thẳng $CD$ đi qua $D(2;6;0)$ và $C(4;6;0)$. Đường thẳng này nằm trong mặt phẳng $(Oxy)$ và song song với trục $Ox$ (do có tung độ $y=6$ và cao độ $z=0$ không đổi). <br><b>-</b> Mặt phẳng $(CDE)$ chứa trục $CD$ và điểm $E(4;6;4)$ là mặt phẳng vuông góc với mặt đất (phương trình $y=6$). <br><b>-</b> Khi thùng hàng đổ sao cho mặt $(CDE)$ tiếp xúc mặt đất, nghĩa là mặt phẳng $y=6$ (thẳng đứng) chuyển thành mặt phẳng $z=0$ (nằm ngang). <br><b>-</b> Điều này tương ứng với phép quay $90^\\circ$ quanh trục $CD$. Hướng quay làm cho các điểm có $y<6$ (phía trước trục quay) và $z>0$ (phía trên) đổ rạp xuống đất theo chiều dương của trục $Oy$. <b>Tính tọa độ điểm $S$ sau khi quay:</b> Vì trục quay song song với $Ox$ nên hoành độ $x$ của điểm $S$ không đổi: $a = x_S = 2$.<br> Xét trong mặt phẳng $(Oyz)$ (vuông góc với trục quay), tâm quay là giao điểm của trục $CD$ với $(Oyz)$, tức là điểm $K(6;0)$.<br> Tọa độ của $S$ trong mặt phẳng này là $M(3;8)$. Véc-tơ $\\overrightarrow{KM} = (3-6; 8-0) = (-3; 8)$.<br> Khi quay $90^\\circ$ theo chiều đổ xuống đất (từ phương đứng chuyển sang phương ngang hướng ra xa), véc-tơ $\\overrightarrow{KM}$ biến thành véc-tơ $\\overrightarrow{KM'}$ vuông góc và có cùng độ dài.<br> Quy tắc quay $90^\\circ$ trong mặt phẳng tọa độ: Véc-tơ $(Y; Z)$ chuyển thành $(Z; -Y)$ hoặc $(-Z; Y)$. <br><b>-</b> Điểm $E(6;4)$ (so với tâm $K$ là $(0;4)$) khi đổ xuống đất sẽ nằm trên mặt đất về phía $y>6$, tức là thành điểm có tọa độ $(10;0)$. Véc-tơ $(0;4) \\to (4;0)$. Quy tắc là $(Y; Z) \\to (Z; -Y)$ (nếu trục $Z$ hướng lên, $Y$ hướng phải, quay chiều kim đồng hồ). Ở đây: <br><b>-</b> Véc-tơ $\\vec{v} = (-3; 8)$ (với $-3$ là khoảng cách theo $y$, $8$ là chiều cao $z$). <br><b>-</b> Sau khi đổ, chiều cao $z=8$ sẽ trở thành độ dời theo phương ngang $y$: $8 \\to \\Delta y = 8$. <br><b>-</b> Độ lệch $y=-3$ (về phía trước trục) sẽ trở thành độ cao mới $z$: $-3 \\to \\Delta z = 3$ (do dựng ngược lên? Không, do $S$ nằm phía \"trên\" mặt phẳng đổ nên khi đổ nó vẫn có độ cao). <br><b>-</b> Cụ thể: $y' = y_{tam} + z_{cu} = 6 + 8 = 14$. <br><b>-</b> $z' = z_{tam} + |y_{cu} - y_{tam}| = 0 + (6-3) = 3$. Vậy tọa độ mới của $S$ là $S'(2; 14; 3)$.<br> Suy ra $a=2, b=14, c=3$.<br> Giá trị cần tìm: $T = a + 2b + 3c = 2 + 2(14) + 3(3) = 2 + 28 + 9 = 39$.",
            "id": "dashed",
            "point": "2"
        },
        {
            "type": "short",
            "q": "Một sân khấu ngoài trời có dạng hình chữ nhật $ABCD$ có $AB=12$ m, $AD=8$ m. Ban tổ chức lắp một mái bạt dạng hình chóp $S.ABCD$, với đỉnh $S$ được đặt thẳng đứng phía trên một điểm $H$ nằm trên đường chéo $AC$ ($SH \\perp (ABCD)$) để đón gió chéo và thoát nước tốt. Do tiêu chuẩn an toàn khác nhau của bốn cụm cáp mép mái, nhà thầu quy định trọng số riêng cho từng dây cáp và tổng \"năng lượng căng quy đổi\" là hằng số, nghĩa là $SA^2 + 2 \\cdot SB^2 + 4 \\cdot SC^2 + 5 \\cdot SD^2 = 1785$ (đơn vị m$^2$). <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185663638_791.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Tính thể tích lớn nhất của khối chóp $S.ABCD$ (đơn vị m$^3$, làm tròn đến hàng đơn vị).",
            "ans": "$317$",
            "explain": "Chọn hệ trục tọa độ $Oxyz$ sao cho $A(0;0;0)$, $B(12;0;0)$, $D(0;8;0)$.<br> Khi đó $C(12;8;0)$. Phương trình đường thẳng $AC$ trong mặt phẳng $(Oxy)$ là $y = \\dfrac{2}{3}x$.<br> Vì $H \\in AC$ nên tọa độ $H$ có dạng $(3t; 2t; 0)$.<br> Vì $H$ nằm trên đoạn $AC$ nên $0 \\le 3t \\le 12 \\Leftrightarrow 0 \\le t \\le 4$.<br> Gọi $h$ là chiều cao của khối chóp, $h = SH > 0$. Tọa độ đỉnh $S(3t; 2t; h)$.<br> Ta tính bình phương độ dài các cạnh bên: <br><b>-</b> $SA^2 = (3t)^2 + (2t)^2 + h^2 = 13t^2 + h^2$. <br><b>-</b> $SB^2 = (3t-12)^2 + (2t)^2 + h^2 = 13t^2 - 72t + 144 + h^2$. <br><b>-</b> $SC^2 = (3t-12)^2 + (2t-8)^2 + h^2 = 13t^2 - 104t + 208 + h^2$. <br><b>-</b> $SD^2 = (3t)^2 + (2t-8)^2 + h^2 = 13t^2 - 32t + 64 + h^2$. Theo giả thiết $SA^2 + 2SB^2 + 4SC^2 + 5SD^2 = 1785$, ta có phương trình: {\\allowdisplaybreaks \\begin{eqnarray*} & & (13t^2 + h^2) + 2(13t^2 - 72t + 144 + h^2) + 4(13t^2 - 104t + 208 + h^2)+ 5(13t^2 - 32t + 64 + h^2) = 1785 <br> &\\Leftrightarrow & 12h^2 + 156t^2 - 720t + 1440 = 1785 <br> &\\Leftrightarrow & 12h^2 = -156t^2 + 720t + 345. \\end{eqnarray*}}Thể tích khối chóp là $V = \\dfrac{1}{3} \\cdot S_{ABCD} \\cdot h = \\dfrac{1}{3} \\cdot (12 \\cdot 8) \\cdot h = 32h$.<br> Để $V$ đạt giá trị lớn nhất thì $h$ lớn nhất $\\Leftrightarrow 12h^2$ lớn nhất.<br> Xét hàm số $f(t) = -156t^2 + 720t + 345$ trên đoạn $[0; 4]$.<br> Đồ thị hàm số là parabol có đỉnh tại $t_0 = \\dfrac{-720}{2 \\cdot (-156)} = \\dfrac{30}{13} \\approx 2{,}31 \\in [0; 4]$.<br> Tại $t = \\dfrac{30}{13}$, ta có: $$12h^2_{\\max} = f\\left(\\dfrac{30}{13}\\right) = -156 \\cdot \\left(\\dfrac{30}{13}\\right)^2 + 720 \\cdot \\dfrac{30}{13} + 345 = \\dfrac{15285}{13}$$ Suy ra $h = \\sqrt{\\dfrac{15285}{13 \\cdot 12}} = \\sqrt{\\dfrac{5095}{52}} \\approx 9{,}898$.<br> Vậy thể tích lớn nhất là $V_{\\max} = 32 \\cdot \\sqrt{\\dfrac{5095}{52}} \\approx 316{,}75$.<br> Làm tròn đến hàng đơn vị ta được $317$ m$^3$.",
            "id": "dashed",
            "point": "2"
        },
        {
            "type": "short",
            "q": "Một khu đất trồng bằng phẳng hình chữ nhật $ABCD$, bên cạnh là một bờ hồ hình bán nguyệt có đường kính $AB$ như hình vẽ bên dưới. Từ vị trí $A$, anh Quang chèo một chiếc thuyền với vận tốc $6$ km/h đến điểm $Q$ trên bờ hồ. Sau đó, anh Quang chạy bộ dọc theo thành hồ đến vị trí $B$ với vận tốc $8$ km/h, rồi chạy bộ theo đường gấp khúc $BEFA$ để quay về vị trí $A$, trong đó vận tốc chạy bộ của anh Quang trên đoạn $BE$ và $FA$ là $6$ km/h, vận tốc chạy bộ của anh Quang trên đoạn $EF$ là $10$ km/h ($E, F$ là hai vị trí bất kỳ trên đoạn $CD$ mà anh Quang lựa chọn).Thời gian ngắn nhất mà anh Quang di chuyển từ $A$ rồi quay về $A$ là bao nhiêu, biết $AD=3$ (km), $AB=4$ (km), $\\widehat{QAB}=\\dfrac{\\pi}{3}$ (thời gian tính bằng phút và làm tròn đến hàng đơn vị)?<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768185676659_611.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "ans": "124",
            "explain": "Gọi $T$ (giờ) là tổng thời gian di chuyển. Ta tính thời gian từng chặng như sau: <br><b>-</b> <b>Chặng 1: Chèo thuyền từ $A$ đến $Q$.</b> Tam giác $AQB$ nội tiếp đường tròn đường kính $AB$ nên vuông tại $Q$.<br> Trong tam giác vuông $AQB$, ta có: $AQ = AB \\cdot \\cos \\widehat{QAB} = 4 \\cdot \\cos 60^\\circ = 2$ (km).<br> Thời gian chèo thuyền: $t_1 = \\dfrac{AQ}{v_1} = \\dfrac{2}{6} = \\dfrac{1}{3}$ (giờ). <br><b>-</b> <b>Chặng 2: Chạy bộ từ $Q$ đến $B$ dọc theo cung tròn.</b><br> Gọi $O$ là trung điểm của $AB$. Ta có $\\widehat{QOB} = 2\\widehat{QAB} = 2 \\cdot 60^\\circ = 120^\\circ = \\dfrac{2\\pi}{3}$ (góc ở tâm cùng chắn một cung).<br> Bán kính đường tròn $R = \\dfrac{AB}{2} = 2$ (km).<br> Độ dài cung $QB$ là: $l_{QB} = R \\cdot \\alpha = 2 \\cdot \\dfrac{2\\pi}{3} = \\dfrac{4\\pi}{3}$ (km).<br> Thời gian chạy bộ trên cung $QB$: $t_2 = \\dfrac{l_{QB}}{v_2} = \\dfrac{4\\pi}{3} : 8 = \\dfrac{\\pi}{6}$ (giờ). <br><b>-</b> <b>Chặng 3: Chạy bộ theo đường gấp khúc $B \\to E \\to F \\to A$.</b><br> Chọn hệ trục tọa độ $Oxy$ sao cho $D(0;0)$, $C(4;0)$, $B(4;3)$, $A(0;3)$.<br> Vì $E, F$ nằm trên đoạn $CD$ nên tọa độ $E(4-x; 0)$ và $F(y; 0)$ với $x, y \\ge 0$ và $x+y \\le 4$. (Trong đó $x=CE, y=DF$).<br> Ta có: $BE = \\sqrt{x^2+3^2}$; $AF = \\sqrt{y^2+3^2}$; $EF = 4 - (x+y)$.<br> Thời gian di chuyển chặng này là: $$t_3(x,y) = \\dfrac{\\sqrt{x^2+9}}{6} + \\dfrac{\\sqrt{y^2+9}}{6} + \\dfrac{4-x-y}{10}$$ Do vai trò của $x, y$ như nhau, để thời gian là ngắn nhất thì $x=y$. Khi đó: $$t_3(x) = \\dfrac{2\\sqrt{x^2+9}}{6} + \\dfrac{4-2x}{10} = \\dfrac{\\sqrt{x^2+9}}{3} + \\dfrac{2-x}{5}$$ Xét hàm số $f(x) = \\dfrac{\\sqrt{x^2+9}}{3} - \\dfrac{x}{5}$ trên đoạn $[0; 2]$.<br> $f'(x) = \\dfrac{x}{3\\sqrt{x^2+9}} - \\dfrac{1}{5}$.<br> $f'(x) = 0 \\Leftrightarrow 5x = 3\\sqrt{x^2+9} \\Leftrightarrow 25x^2 = 9(x^2+9) \\Leftrightarrow 16x^2 = 81 \\Leftrightarrow x = \\dfrac{9}{4} = 2{,}25$.<br> Giá trị $x = 2{,}25$ không thuộc đoạn $[0; 2]$.<br> Lập bảng biến thiên ta thấy hàm số nghịch biến trên $[0; 2]$.<br> Do đó để thời gian ngắn nhất thì $f(x)$ phải nhỏ nhất $\\Rightarrow x$ phải lớn nhất trong điều kiện cho phép.<br> Điều kiện $x+y \\le 4 \\Rightarrow 2x \\le 4 \\Rightarrow x \\le 2$.<br> Vậy $x=2$ (tức là $E \\equiv F$ tại trung điểm $CD$).<br> Khi đó $t_{3\\min} = \\dfrac{\\sqrt{2^2+9}}{3} + 0 = \\dfrac{\\sqrt{13}}{3}$ (giờ). Tổng thời gian ngắn nhất là: $T = t_1 + t_2 + t_{3\\min} = \\dfrac{1}{3} + \\dfrac{\\pi}{6} + \\dfrac{\\sqrt{13}}{3}$ (giờ).<br> Đổi ra phút: $T \\approx 123{,}52$ phút. Làm tròn đến hàng đơn vị, ta được $124$ phút.",
            "id": "",
            "point": "2"
        },
        {
            "type": "short",
            "q": "Một lớp học có tổng số $36$ học sinh, trong đó số học sinh nam nhiều hơn số học sinh nữ. Lớp học được phân thành hai nhóm, nhóm 1 gồm các học sinh nam và nhóm 2 gồm các học sinh nữ để khảo sát về kĩ năng bơi của học sinh. Biết mỗi học sinh chỉ tích chọn một trong hai hình thức: biết bơi hoặc chưa biết bơi và nhóm nào cũng có cả hai hình thức. Lấy ngẫu nhiên mỗi nhóm một học sinh, xác suất lấy được hai học sinh biết bơi là $\\dfrac{140}{299}$. Biết số học sinh nữ biết bơi là số lẻ. Số học sinh nam biết bơi là",
            "ans": "20",
            "explain": "Gọi số học sinh nam là $m$ và số học sinh nữ là $n$ ($m, n \\in \\mathbb{N}^*$).<br> Theo đề bài ta có hệ: $\\left\\{\\begin{aligned}m+n=36\\\\m>n\\end{aligned}\\right. \\Rightarrow m > 18$.<br> Gọi số học sinh nam biết bơi là $a$ ($1 \\le a < m$).<br> Gọi số học sinh nữ biết bơi là $b$ ($1 \\le b < n$, $b$ là số lẻ).<br> Số phần tử của không gian mẫu khi lấy mỗi nhóm 1 học sinh là: $n(\\Omega) = m \\cdot n$.<br> Số kết quả thuận lợi cho biến cố \"cả hai học sinh đều biết bơi\" là: $n(A) = a \\cdot b$.<br> Xác suất của biến cố là: $P(A) = \\dfrac{ab}{mn} = \\dfrac{140}{299}$.<br> Nhận thấy phân số $\\dfrac{140}{299}$ là phân số tối giản (vì $299 = 13 \\times 23$ và $140 = 2^2 \\times 5 \\times 7$ không có ước chung).<br> Suy ra tồn tại số nguyên dương $k$ sao cho: $\\left\\{\\begin{aligned}ab = 140k\\\\mn = 299k\\end{aligned}\\right.$.<br> Ta có $m, n$ là hai nghiệm của phương trình: $X^2 - (m+n)X + mn = 0 \\Leftrightarrow X^2 - 36X + 299k = 0$.<br> Để phương trình có nghiệm nguyên thì $\\Delta' = 18^2 - 299k = 324 - 299k$ phải là số chính phương.<br> Vì $\\Delta' \\ge 0$ và $k \\ge 1$ nên $324 - 299k \\ge 0 \\Rightarrow k \\le \\dfrac{324}{299} \\approx 1{,}08$.<br> Vậy chỉ có thể là $k=1$.<br> Với $k=1$, phương trình trở thành $X^2 - 36X + 299 = 0$.<br> Giải phương trình ta được hai nghiệm là $13$ và $23$.<br> Vì $m > n$ nên $m=23$ và $n=13$.<br> Khi đó $ab = 140$. Ta cần tìm $a, b$ thỏa mãn: $\\left\\{\\begin{aligned}a < 23\\\\b < 13\\\\b \\text{ là số lẻ}\\end{aligned}\\right.$.<br> Phân tích $140$ ra thừa số nguyên tố: $140 = 2^2 \\cdot 5 \\cdot 7$. Các ước số lẻ của $140$ là: $1, 5, 7, 35$. <br><b>-</b> Nếu $b=1 \\Rightarrow a=140$ (Loại vì $a>23$). <br><b>-</b> Nếu $b=5 \\Rightarrow a=28$ (Loại vì $a>23$). <br><b>-</b> Nếu $b=7 \\Rightarrow a=20$ (Thỏa mãn $a<23$ và $b<13$). <br><b>-</b> Nếu $b=35$ (Loại vì $b>13$). Vậy số học sinh nam biết bơi là $a=20$.",
            "id": "",
            "point": "2"
        },
        {
            "type": "short",
            "q": "Cho $x$, $y$ là hai số thực dương thay đổi thỏa mãn điều kiện $(xy+1)\\left(\\sqrt{xy+1}-\\sqrt{y}\\right) \\le 1-x-\\dfrac{1}{y}$. Biết giá trị lớn nhất của biểu thức $P = \\dfrac{x+y}{\\sqrt{x^2-xy+3y^2}} - \\dfrac{x-2y}{6(x+y)}$ bằng $\\dfrac{a+b\\sqrt{5}}{c}$ với $a,b,c \\in \\mathbb{N}^*$ và $\\dfrac{a}{c}$ là phân số tối giản. Khi đó tính tổng $a+b+c$.",
            "ans": "47",
            "explain": "Điều kiện $x, y > 0$. Biến đổi giả thiết: $$(xy+1)\\left(\\sqrt{xy+1}-\\sqrt{y}\\right) \\le \\dfrac{y-xy-1}{y} = -\\dfrac{xy+1-y}{y}$$ Nhân lượng liên hợp cho vế trái (chú ý $\\sqrt{xy+1}+\\sqrt{y} > 0$): $$(xy+1)\\dfrac{(xy+1)-y}{\\sqrt{xy+1}+\\sqrt{y}} + \\dfrac{xy+1-y}{y} \\le 0$$ $$\\Leftrightarrow (xy+1-y) \\left[ \\dfrac{xy+1}{\\sqrt{xy+1}+\\sqrt{y}} + \\dfrac{1}{y} \\right] \\le 0$$ Vì $x, y > 0$ nên biểu thức trong ngoặc vuông luôn dương. Suy ra $xy+1-y \\le 0 \\Leftrightarrow xy+1 \\le y \\Leftrightarrow x + \\dfrac{1}{y} \\le 1$. Áp dụng bất đẳng thức AM-GM: $1 \\ge x + \\dfrac{1}{y} \\ge 2\\sqrt{\\dfrac{x}{y}} \\Rightarrow \\dfrac{x}{y} \\le \\dfrac{1}{4}$. Biến đổi biểu thức $P$: Chia cả tử và mẫu của số hạng đầu cho $y$, và chia cả tử mẫu số hạng sau cho $y$: $$P = \\dfrac{\\frac{x}{y}+1}{\\sqrt{\\left(\\frac{x}{y}\\right)^2-\\frac{x}{y}+3}} - \\dfrac{\\frac{x}{y}-2}{6\\left(\\frac{x}{y}+1\\right)}$$ Đặt $t = \\dfrac{x}{y}$. Vì $x,y>0$ và $\\dfrac{x}{y} \\le \\dfrac{1}{4}$ nên $t \\in \\left(0; \\dfrac{1}{4}\\right]$. Xét hàm số $f(t) = \\dfrac{t+1}{\\sqrt{t^2-t+3}} + \\dfrac{2-t}{6(t+1)}$ trên nửa khoảng $\\left(0; \\dfrac{1}{4}\\right]$. Ta có đạo hàm: $$f'(t)= \\dfrac{7-3t}{2\\sqrt{(t^2-t+3)^3}} - \\dfrac{1}{2(t+1)^2}$$ Với mọi $t \\in \\left(0; \\dfrac{1}{4}\\right]$, ta có: <br><b>-</b> $t^2-t+3 < 3 \\Rightarrow 2\\sqrt{(t^2-t+3)^3} < 2\\sqrt{3^3} = 6\\sqrt{3} \\approx 10{,}39$. <br><b>-</b> $7-3t > 6$. <br><b>-</b> Suy ra phân thức đầu tiên $> \\dfrac{6}{6\\sqrt{3}} = \\dfrac{1}{\\sqrt{3}} \\approx 0{,}57$. <br><b>-</b> Phân thức thứ hai: $\\dfrac{1}{2(t+1)^2} < \\dfrac{1}{2}$. Do đó $f'(t) > \\dfrac{1}{\\sqrt{3}} - \\dfrac{1}{2} > 0, \\forall t \\in \\left(0; \\dfrac{1}{4}\\right]$. Hàm số đồng biến trên $\\left(0; \\dfrac{1}{4}\\right]$. $$\\Rightarrow \\max P = f\\left(\\dfrac{1}{4}\\right) = \\dfrac{10\\sqrt{5}+7}{30}$$ Vậy giá trị lớn nhất là $\\dfrac{7+10\\sqrt{5}}{30}$. Đối chiếu với dạng $\\dfrac{a+b\\sqrt{5}}{c} \\Rightarrow a=7, b=10, c=30$.<br> Phân số $\\dfrac{7}{30}$ tối giản. Tổng $a+b+c = 7+10+30 = 47$.",
            "id": "",
            "point": "2"
        }
    ]
};