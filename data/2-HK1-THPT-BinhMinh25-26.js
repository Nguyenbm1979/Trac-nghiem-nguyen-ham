window.EXAM_DATA = {
    "title": "Đề Kiểm Tra Cuối Kì I, Năm học 2025-2026",
    "subject": "Toan",
    "grade": "12",
    "time": 75,
    "password": "9b7c4b231be2223e21cc8a1816b8b9a0",
    "scores": {
        "mcq": 0.25,
        "tf": 1,
        "short": 0.5
    },
    "questions": [
        {
            "type": "mcq",
            "q": "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
            "options": [
                "$(0;1)$",
                "$(1;+\\infty)$",
                "$(-\\infty;1)$",
                "$(-1;0)$"
            ],
            "ans": 0,
            "explain": "Dựa vào bảng biến thiên, ta thấy $f'(x) > 0$ trên các khoảng $(-\\infty; -1)$ và $(0; 1)$.\\\\Do đó, hàm số đồng biến trên khoảng $(0; 1)$.",
            "id": 1767347240857.8782,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q1-1767350147131.png"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình vẽ bên.\n\nGọi $M,m$ lần lượt là giá trị lớn nhất và nhỏ nhất của hàm số đã cho trên đoạn $[-1;3]$. Giá trị của $M+m$ là",
            "options": [
                "$2$",
                "$-6$",
                "$-5$",
                "$-2$"
            ],
            "ans": 3,
            "explain": "Dựa vào đồ thị hàm số trên đoạn $[-1;3]$, ta có:\n\\begin{itemize}\n\\item Giá trị lớn nhất của hàm số là $M = \\max\\limits_{[-1;3]} f(x) = f(-1) = 2$.\n\\item Giá trị nhỏ nhất của hàm số là $m = \\min\\limits_{[-1;3]} f(x) = f(2) = -4$.\n\\end{itemize}\nVậy $M+m = 2 + (-4) = -2$.",
            "id": 1767347240857.0466,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q2-1767350148728.png"
        },
        {
            "type": "mcq",
            "q": "Đồ thị hàm số $y=\\dfrac{2x+1}{x}$ có tiệm cận ngang là đường thẳng",
            "options": [
                "$y=1$",
                "$y=3$",
                "$y=2$",
                "$y=0$"
            ],
            "ans": 2,
            "explain": "Tập xác định: $\\mathscr{D} = \\mathbb{R} \\setminus \\{0\\}$.\\\\Ta có $\\lim\\limits_{x \\to \\pm \\infty} y = \\lim\\limits_{x \\to \\pm \\infty} \\dfrac{2x+1}{x} = 2$.\\\nVậy đường thẳng $y=2$ là tiệm cận ngang của đồ thị hàm số.",
            "id": 1767347240857.9465,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "mcq",
            "q": "Đường cong trong hình vẽ là đồ thị của hàm số nào sau đây?\n",
            "options": [
                "$y=x^3-3x+3$",
                "$y=x^3-3x$",
                "$y=x^3-3x+1$",
                "$y=-x^3+3x+1$"
            ],
            "ans": 2,
            "explain": "Dựa vào dáng điệu đồ thị (nhánh cuối đi lên), hệ số $a > 0$. Loại đáp án D.\\\\Đồ thị hàm số có hai điểm cực trị nằm ở hai phía trục tung nên phương trình $y'=0$ có hai nghiệm trái dấu.\\\\Xét các đáp án còn lại:\n\\begin{itemize}\n\\item Đáp án A: $y(-1) = -1 + 3 + 3 = 5 \\ne 3$ (giá trị cực đại trên hình). Loại A.\n\\item Đáp án B: Đồ thị đi qua gốc tọa độ $O(0;0)$, nhưng hình vẽ cho thấy đồ thị cắt $Oy$ tại điểm có tung độ dương ($y=1$). Loại B.\n\\item Đáp án C: $y = x^3 - 3x + 1$.\n\\begin{itemize}\n\\item Cắt $Oy$ tại $(0;1)$.\n\\item $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$.\n\\item $y(-1) = 3$ (Cực đại), $y(1) = -1$ (Cực tiểu). Khớp với hình vẽ.\n\\end{itemize}\n\\end{itemize}\nVậy đồ thị trong hình là của hàm số $y=x^3-3x+1$.",
            "id": 1767347240857.1401,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q4-1767350150671.png"
        },
        {
            "type": "mcq",
            "q": "Giả sử chi phí (tính bằng trăm nghìn đồng) để sản xuất $x$ đơn vị hàng hóa nào đó là $C(x) = 23000+50x-0{,}5x^2+0{,}00175x^3$. Chi phí sản xuất đơn vị hàng hóa thứ $101$ gần bằng",
            "options": [
                "$1$",
                "$2$",
                "$3$",
                "$2{,}5$"
            ],
            "ans": 3,
            "explain": "Chi phí sản xuất đơn vị hàng hóa thứ $101$ là $C(101)-C(100)$.\\\\Trong kinh tế học, giá trị này được xấp xỉ bởi chi phí biên tại $x=100$, tức là $C'(100)$.\\\\Ta có đạo hàm: $C'(x) = 50 - x + 3 \\cdot 0{,}00175x^2 = 50 - x + 0{,}00525x^2$.\\\nKhi đó: $C'(100) = 50 - 100 + 0{,}00525 \\cdot (100)^2 = -50 + 52{,}5 = 2{,}5$ (trăm nghìn đồng).",
            "id": 1767347240857.219,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "mcq",
            "q": "Một vật chuyển động theo quy luật $s=-2t^3+24t^2+9t-3$ với $t$ là khoảng thời gian tính từ lúc bắt đầu chuyển động và $s$ là quãng đường vật đi được trong khoảng thời gian đó. Hỏi trong khoảng thời gian $10$ giây, kể từ lúc bắt đầu chuyển động, vận tốc lớn nhất của vật đạt được bằng bao nhiêu?",
            "options": [
                "$289\\ (m/s)$",
                "$105\\ (m/s)$",
                "$111\\ (m/s)$",
                "$487\\ (m/s)$"
            ],
            "ans": 1,
            "explain": "Vận tốc của vật là đạo hàm của quãng đường: $v(t) = s'(t) = -6t^2 + 48t + 9$.\\\\Bài toán trở thành tìm giá trị lớn nhất của hàm số $v(t)$ trên đoạn $[0; 10]$.\\\\Đây là hàm số bậc hai có hệ số $a = -6 < 0$ nên đồ thị là parabol có bề lõm quay xuống dưới.\\\\Đỉnh của parabol có hoành độ $t_0 = -\\dfrac{b}{2a} = -\\dfrac{48}{2 \\cdot (-6)} = 4$.\\\\Vì $4 \\in [0; 10]$ nên vận tốc lớn nhất đạt được tại $t=4$.\\\\$v_{\\max} = v(4) = -6 \\cdot 4^2 + 48 \\cdot 4 + 9 = -96 + 192 + 9 = 105\\ (m/s)$.",
            "id": 1767347240857.257,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "mcq",
            "q": "Chọn mệnh đề sai. Trong không gian, cho hình hộp $ABCD.A'B'C'D'$.",
            "options": [
                "$\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}$",
                "$\\overrightarrow{BD}=\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BB'}$",
                "$\\overrightarrow{CA'}=\\overrightarrow{CB}+\\overrightarrow{CD}+\\overrightarrow{CC'}$",
                "$\\overrightarrow{C'A'}=\\overrightarrow{C'B'}+\\overrightarrow{C'D'}$"
            ],
            "ans": 1,
            "explain": "\\begin{itemize}\n\\item Theo quy tắc hình hộp, ta có $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$. Suy ra mệnh đề A đúng.\n\\item Tương tự, áp dụng quy tắc hình hộp cho đỉnh $C$, ta có $\\overrightarrow{CA'} = \\overrightarrow{CB} + \\overrightarrow{CD} + \\overrightarrow{CC'}$. Suy ra mệnh đề C đúng.\n\\item Xét mặt đáy $A'B'C'D'$ là hình bình hành, theo quy tắc hình bình hành ta có $\\overrightarrow{C'A'} = \\overrightarrow{C'B'} + \\overrightarrow{C'D'}$. Suy ra mệnh đề D đúng.\n\\item Xét mệnh đề B: Ta có $\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD}$ (quy tắc hình bình hành đáy $ABCD$).\\\\Do đó $\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{BD} + \\overrightarrow{BB'} = \\overrightarrow{BD'}$ (quy tắc hình bình hành trong mặt chéo $BDD'B'$).\\\\Mà $\\overrightarrow{BD'} \\neq \\overrightarrow{BD}$. Vậy mệnh đề B sai.\n\\end{itemize}",
            "id": 1767347240857.7236,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "mcq",
            "q": "Cho hình lập phương $ABCD.A'B'C'D'$. Khẳng định nào sau đây là sai?",
            "options": [
                "$\\left(\\overrightarrow{AB}; \\overrightarrow{A'D'}\\right)=90^\\circ$",
                "$\\left(\\overrightarrow{AB}; \\overrightarrow{A'C'}\\right)=45^\\circ$",
                "$\\left(\\overrightarrow{AC}; \\overrightarrow{B'D'}\\right)=90^\\circ$",
                "$\\left(\\overrightarrow{A'A}; \\overrightarrow{CB'}\\right)=45^\\circ$"
            ],
            "ans": 3,
            "explain": "Ta lần lượt kiểm tra các khẳng định:\n\\begin{itemize}\n\\item \\textbf{Khẳng định A:} Vì $ABCD.A'B'C'D'$ là hình lập phương nên $\\overrightarrow{A'D'} = \\overrightarrow{AD}$.\\\\Vì $ABCD$ là hình vuông nên $\\overrightarrow{AB} \\perp \\overrightarrow{AD} \\Rightarrow \\left(\\overrightarrow{AB}; \\overrightarrow{AD}\\right)=90^\\circ$. Suy ra $\\left(\\overrightarrow{AB}; \\overrightarrow{A'D'}\\right)=90^\\circ$. Khẳng định A đúng.\n\\item \\textbf{Khẳng định B:} Ta có $\\overrightarrow{A'C'} = \\overrightarrow{AC}$.\\\\Góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là góc tạo bởi cạnh và đường chéo của hình vuông $ABCD$, nên $\\widehat{BAC} = 45^\\circ$. Suy ra $\\left(\\overrightarrow{AB}; \\overrightarrow{A'C'}\\right)=45^\\circ$. Khẳng định B đúng.\n\\item \\textbf{Khẳng định C:} Ta có $\\overrightarrow{B'D'} = \\overrightarrow{BD}$.\\\\Hai đường chéo của hình vuông $ABCD$ vuông góc với nhau nên $\\overrightarrow{AC} \\perp \\overrightarrow{BD} \\Rightarrow \\left(\\overrightarrow{AC}; \\overrightarrow{B'D'}\\right)=90^\\circ$. Khẳng định C đúng.\n\\item \\textbf{Khẳng định D:} Ta có $\\overrightarrow{A'A} = \\overrightarrow{B'B}$.\\\\Xét mặt bên $BCC'B'$ là hình vuông. Véc-tơ $\\overrightarrow{B'B}$ hướng thẳng đứng từ trên xuống, véc-tơ $\\overrightarrow{CB'}$ là đường chéo hướng từ dưới lên.\\\\Góc giữa hai véc-tơ này là $135^\\circ$ (bù với góc $45^\\circ$). Do đó $\\left(\\overrightarrow{A'A}; \\overrightarrow{CB'}\\right)=135^\\circ$. Khẳng định D sai.\n\\end{itemize}\nVậy khẳng định sai là D.",
            "id": 1767347240857.271,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, cho véc-tơ $\\vec{u}=\\vec{j}-4\\vec{k}$. Tọa độ của véc-tơ $\\vec{u}$ là",
            "options": [
                "$(1;-4)$",
                "$(0;1;-4)$",
                "$(1;0;-4)$",
                "$(0;-1;4)$"
            ],
            "ans": 1,
            "explain": "Trong không gian $Oxyz$, các véc-tơ đơn vị là $\\vec{i}=(1;0;0)$, $\\vec{j}=(0;1;0)$, $\\vec{k}=(0;0;1)$.\\\\Ta có $\\vec{u} = \\vec{j}-4\\vec{k} = 0\\vec{i} + 1\\vec{j} - 4\\vec{k}$.\\\\Vậy tọa độ của véc-tơ $\\vec{u}$ là $(0; 1; -4)$.",
            "id": 1767347240857.8206,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "mcq",
            "q": "Một công ty cung cấp nước sạch thống kê lượng nước các hộ gia đình trong một khu vực tiêu thụ trong một tháng ở bảng sau:\n\nKhoảng biến thiên của mẫu số liệu ghép nhóm trên là:",
            "options": [
                "$3\\ m^3$",
                "$15\\ m^3$",
                "$18\\ m^3$",
                "$20\\ m^3$"
            ],
            "ans": 1,
            "explain": "Khoảng biến thiên của mẫu số liệu ghép nhóm bằng hiệu số giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên.\\\\Dựa vào bảng số liệu:\\\\- Đầu mút phải của nhóm cuối cùng $[15;18)$ là $18$.\\\\- Đầu mút trái của nhóm đầu tiên $[3;6)$ là $3$.\\\\Vậy khoảng biến thiên là $R = 18 - 3 = 15\\ \\left(m^3\\right)$.",
            "id": 1767347240857.5125,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q10-1767350152572.png"
        },
        {
            "type": "mcq",
            "q": "Mỗi ngày bác Hương đều đi bộ để rèn luyện sức khoẻ. Quãng đường đi bộ mỗi ngày (đơn vị: km) của bác Hương trong $20$ ngày được thống kê lại ở bảng sau:\n\nKhoảng tứ phân vị của mẫu số liệu ghép nhóm là",
            "options": [
                "$0{,}9$",
                "$0{,}975$",
                "$0{,}5$",
                "$0{,}575$"
            ],
            "ans": 3,
            "explain": "Tổng số ngày quan sát là $N = 3 + 6 + 5 + 4 + 2 = 20$.\n\\begin{itemize}\n\\item \\textbf{Tính $Q_1$:} Vị trí của $Q_1$ là $\\dfrac{N}{4} = 5$. Nhóm chứa $Q_1$ là nhóm thứ 2: $[3{,}0; 3{,}3)$.\\\\Ta có $L_1 = 3{,}0$; $n_1 = 6$; tần số tích lũy nhóm trước đó $cf_1 = 3$; độ rộng nhóm $h = 0{,}3$.\\\\$Q_1 = 3{,}0 + \\dfrac{5 - 3}{6} \\cdot 0{,}3 = 3{,}0 + 0{,}1 = 3{,}1$.\n\\item \\textbf{Tính $Q_3$:} Vị trí của $Q_3$ là $\\dfrac{3N}{4} = 15$. Nhóm chứa $Q_3$ là nhóm thứ 4: $[3{,}6; 3{,}9)$.\\\\Ta có $L_3 = 3{,}6$; $n_3 = 4$; tần số tích lũy nhóm trước đó $cf_3 = 3 + 6 + 5 = 14$; độ rộng nhóm $h = 0{,}3$.\\\\$Q_3 = 3{,}6 + \\dfrac{15 - 14}{4} \\cdot 0{,}3 = 3{,}6 + 0{,}075 = 3{,}675$.\n\\item Khoảng tứ phân vị là $\\Delta_Q = Q_3 - Q_1 = 3{,}675 - 3{,}1 = 0{,}575$.\n\\end{itemize}",
            "id": 1767347240857.8154,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q11-1767350154089.png"
        },
        {
            "type": "mcq",
            "q": "Mỗi ngày bác Hương đều đi bộ để rèn luyện sức khoẻ. Quãng đường đi bộ mỗi ngày (đơn vị: km) của bác Hương trong $20$ ngày được thống kê lại ở bảng sau:\n\nPhương sai của mẫu số liệu ghép nhóm trên gần nhất với số nào sau đây?",
            "options": [
                "$3{,}39$",
                "$11{,}62$",
                "$0{,}36$",
                "$0{,}13$"
            ],
            "ans": 3,
            "explain": "Ta lập bảng tính giá trị đại diện $x_i$ và các tích số:\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|}\n\\hline\nNhóm & Giá trị đại diện $x_i$ & Tần số $n_i$ & $n_i x_i$ & $n_i x_i^2$ \\\\\n\\hline\n$[2{,}7;3{,}0)$ & $2{,}85$ & $3$ & $8{,}55$ & $24{,}3675$ \\\\\n\\hline\n$[3{,}0;3{,}3)$ & $3{,}15$ & $6$ & $18{,}90$ & $59{,}5350$ \\\\\n\\hline\n$[3{,}3;3{,}6)$ & $3{,}45$ & $5$ & $17{,}25$ & $59{,}5125$ \\\\\n\\hline\n$[3{,}6;3{,}9)$ & $3{,}75$ & $4$ & $15{,}00$ & $56{,}2500$ \\\\\n\\hline\n$[3{,}9;4{,}2)$ & $4{,}05$ & $2$ & $8{,}10$ & $32{,}8050$ \\\\\n\\hline\nTổng & & $20$ & $67{,}8$ & $232{,}47$ \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nSố trung bình cộng của mẫu số liệu là: $\\bar{x} = \\dfrac{67{,}8}{20} = 3{,}39$.\\\\Phương sai của mẫu số liệu là:\n$$s^2 = \\dfrac{1}{N} \\sum n_i x_i^2 - (\\bar{x})^2 = \\dfrac{232{,}47}{20} - (3{,}39)^2 = 11{,}6235 - 11{,}4921 = 0{,}1314.$$\nKết quả gần nhất với $0{,}13$.",
            "id": 1767347240857.0781,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q12-1767350155647.png"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $y=\\dfrac{2x^2-10x+5000}{x}$. Các mệnh đề sau đúng hay sai?",
            "items": [
                {
                    "sub": "Giá trị lớn nhất của hàm số là $5000$",
                    "ans": "F"
                },
                {
                    "sub": "Hàm số trên không có điểm cực trị",
                    "ans": "F"
                },
                {
                    "sub": "Tiệm cận xiên của đồ thị hàm số là đường thẳng $y=2x-10$",
                    "ans": "T"
                },
                {
                    "sub": "Gọi $x$ là số phần ăn một nhà hàng phải chế biến trong ngày ($x>0$), chi phí trung bình (đơn vị ngàn đồng) của một phần thức ăn được cho bởi công thức $f(x)=2x-10+\\dfrac{5000}{x}$. Để chi phí trung bình của một phần thức ăn trong ngày thấp nhất nhà hàng phải chế biến 45 phần thức ăn",
                    "ans": "F"
                }
            ],
            "explain": "Tập xác định $\\mathscr{D} = \\mathbb{R} \\setminus \\{0\\}$.\\\\Ta có $y = \\dfrac{2x^2-10x+5000}{x} = 2x - 10 + \\dfrac{5000}{x}$.\n\\begin{itemize}\n\\item Đạo hàm $y' = 2 - \\dfrac{5000}{x^2} = \\dfrac{2x^2-5000}{x^2}$.\n\\item $y'=0 \\Leftrightarrow 2x^2 = 5000 \\Leftrightarrow x^2 = 2500 \\Leftrightarrow x = \\pm 50$.\n\\end{itemize}\n\\begin{itemchoice}\n\\itemch {\\bf Sai.} Vì $\\lim\\limits_{x \\to +\\infty} y = +\\infty$ và $\\lim\\limits_{x \\to 0^+} y = +\\infty$ nên hàm số không có giá trị lớn nhất trên tập xác định. (Nếu xét trên khoảng $(0; +\\infty)$, giá trị nhỏ nhất là $y(50)=190$, không có GTLN).\n\\itemch {\\bf Sai.} Hàm số có hai điểm cực trị tại $x=50$ và $x=-50$.\n\\itemch {\\bf Đúng.} Ta có $\\lim\\limits_{x \\to \\infty} [y - (2x-10)] = \\lim\\limits_{x \\to \\infty} \\dfrac{5000}{x} = 0$. Vậy tiệm cận xiên là $y=2x-10$.\n\\itemch {\\bf Sai.} Xét hàm chi phí trung bình $f(x)$ với $x>0$. Ta có $f'(x) = 2 - \\dfrac{5000}{x^2}$. $f'(x)=0 \\Leftrightarrow x=50$ (vì $x>0$).\\\\Lập bảng biến thiên ta thấy $f(x)$ đạt giá trị nhỏ nhất tại $x=50$. Vậy nhà hàng phải chế biến 50 phần ăn, không phải 45.\n\\end{itemchoice}",
            "id": 1767347240857.9639,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "tf",
            "q": "Một nhà kho có nền $ABFE$ là hình chữ nhật với mái nghiêng, chiều dài $AE=30$ m, rộng $AB=10$ m, cao $15$ m về phía Đông và $20$ m về phía Tây. Xét hệ trục tọa độ $Oxyz$, trục $Oy$ hướng về phía Đông, mặt phẳng $(Oxy)$ trùng với mặt đất. Ở đó $A(0;0;0)$, $E(30;0;0)$, $B(0;10;0)$ và $D(0;0;20)$, $Q(10;30;0)$.\n",
            "items": [
                {
                    "sub": "Tọa độ điểm $C(0;10;15)$",
                    "ans": "T"
                },
                {
                    "sub": "Tọa độ điểm $G(30;10;20)$",
                    "ans": "F"
                },
                {
                    "sub": "Gọi $K$ là điểm thỏa mãn $\\overrightarrow{KA} + 2\\overrightarrow{KB} + 3\\overrightarrow{KC} = \\vec{0}$. Ta có $\\overrightarrow{KD} \\cdot \\overrightarrow{KH}$ có giá trị âm",
                    "ans": "F"
                },
                {
                    "sub": "Tại điểm $Q$ dựng một ăng ten cao $32$ m vuông góc với mặt đất (ăng ten là điểm $S$ trong hình vẽ). Nếu có một người leo lên mái nhà thì khoảng cách xa nhất từ người đó đến ăng ten bằng $38$ m",
                    "ans": "T"
                }
            ],
            "explain": "Theo đề bài, chiều cao phía Tây (trục $Oz$) là $20$ m $\\Rightarrow z_D=20, z_H=20$. Chiều cao phía Đông (hướng $Oy$) là $15$ m $\\Rightarrow z_C=15, z_G=15$.\nTọa độ các đỉnh của mái nhà là: $D(0;0;20)$, $C(0;10;15)$, $H(30;0;20)$, $G(30;10;15)$.\n\\begin{itemchoice}\n\\itemch Điểm $C$ nằm trên đường thẳng qua $B(0;10;0)$ và vuông góc với $(Oxy)$, có cao độ $15$ nên $C(0;10;15)$.\n\\itemch Điểm $G$ nằm trên đường thẳng qua $F(30;10;0)$ và vuông góc với $(Oxy)$, có cao độ $15$. Do đó $G(30;10;15)$. Khẳng định $G(30;10;20)$ là sai.\n\\itemch {\\bf Sai.} Gọi $K(x;y;z)$. Từ $\\overrightarrow{KA} + 2\\overrightarrow{KB} + 3\\overrightarrow{KC} = \\vec{0} \\Leftrightarrow \\overrightarrow{OK} = \\dfrac{\\overrightarrow{OA} + 2\\overrightarrow{OB} + 3\\overrightarrow{OC}}{1+2+3}$.\\\\$\\Rightarrow K\\left(\\dfrac{0+0+0}{6}; \\dfrac{0+20+30}{6}; \\dfrac{0+0+45}{6}\\right) \\Rightarrow K\\left(0; \\dfrac{25}{3}; \\dfrac{15}{2}\\right)$.\\\\Ta có $H$ là điểm tương ứng với $D$ qua phép tịnh tiến vectơ $\\overrightarrow{AE}=(30;0;0)$ nên $H(30;0;20)$.\\\\$\\overrightarrow{KD} = \\left(0; -\\dfrac{25}{3}; 20 - \\dfrac{15}{2}\\right) = \\left(0; -\\dfrac{25}{3}; \\dfrac{25}{2}\\right)$.\\\\$\\overrightarrow{KH} = \\left(30; -\\dfrac{25}{3}; \\dfrac{25}{2}\\right)$.\\\\$\\overrightarrow{KD} \\cdot \\overrightarrow{KH} = 0 \\cdot 30 + \\left(-\\dfrac{25}{3}\\right)^2 + \\left(\\dfrac{25}{2}\\right)^2 = \\dfrac{625}{9} + \\dfrac{625}{4} > 0$.\n\\itemch Tọa độ đỉnh ăng ten $S$: Vì $Q(10;30;0)$ và ăng ten cao $32$ m vuông góc với đất nên $S(10;30;32)$.\nNgười leo lên mái nhà tức là người đó ở vị trí $M$ thuộc hình chữ nhật $DCGH$. Khoảng cách xa nhất từ $S$ đến mái nhà sẽ đạt được tại một trong bốn đỉnh $D, C, G, H$.\nTa tính các khoảng cách:\n\\begin{itemize}\n\\item $SD=\\sqrt{1144}\\approx 33{,}8$.\n\\item $SC=\\sqrt{789}\\approx 28{,}1$.\n\\item $SH=\\sqrt{1444}=38$.\n\\item $SG=\\sqrt{1089}=33$.\n\\end{itemize}\nVậy khoảng cách lớn nhất bằng $38$ m (tại điểm $H$). Khẳng định đúng.\n\\end{itemchoice}",
            "id": 1767347240857.78,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q14-1767350157324.png"
        },
        {
            "type": "tf",
            "q": "Một bác tài xế thống kê lại độ dài quãng đường (đơn vị: km) bác đã lái xe mỗi ngày trong một tháng ở bảng sau:\n",
            "items": [
                {
                    "sub": "Khoảng biến thiên của mẫu số liệu ghép nhóm là $250$ (km)",
                    "ans": "T"
                },
                {
                    "sub": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm gần bằng $79{,}17$",
                    "ans": "T"
                },
                {
                    "sub": "Phương sai của mẫu số liệu ghép nhóm nhỏ hơn $3000$",
                    "ans": "F"
                },
                {
                    "sub": "Độ lệch chuẩn của mẫu số liệu ghép nhóm gần bằng $55{,}68$",
                    "ans": "T"
                }
            ],
            "explain": "Tổng số ngày $N = 5+10+9+4+2 = 30$.\n\\begin{itemchoice}\n\\itemch {\\bf Đúng.} Khoảng biến thiên $R = 300 - 50 = 250$.\n\\itemch {\\bf Đúng.}\n\\\\Tứ phân vị thứ nhất $Q_1$ ở vị trí $30/4 = 7{,}5$ (nhóm $[100;150)$).\n\\\\$Q_1 = 100 + \\dfrac{7{,}5-5}{10}\\cdot 50 = 100 + 12{,}5 = 112{,}5$.\n\\\\Tứ phân vị thứ ba $Q_3$ ở vị trí $3\\cdot 30/4 = 22{,}5$ (nhóm $[150;200)$).\n\\\\$Q_3 = 150 + \\dfrac{22{,}5 - (5+10)}{9}\\cdot 50 = 150 + \\dfrac{7{,}5}{9}\\cdot 50 \\approx 191{,}67$.\n\\\\Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1 \\approx 191{,}67 - 112{,}5 = 79{,}17$.\n\\itemch {\\bf Sai.}\n\\\\Số trung bình $\\bar{x} = \\dfrac{75\\cdot 5 + 125\\cdot 10 + 175\\cdot 9 + 225\\cdot 4 + 275\\cdot 2}{30} = 155$.\n\\\\Phương sai $s^2 = \\dfrac{1}{30}\\left[5(75-155)^2 + 10(125-155)^2 + 9(175-155)^2 + 4(225-155)^2 + 2(275-155)^2\\right]$\n\\\\$s^2 = \\dfrac{1}{30}(32000 + 9000 + 3600 + 19600 + 28800) = \\dfrac{93000}{30} = 3100$.\n\\\\Ta có $3100 > 3000$.\n\\itemch {\\bf Đúng.} Độ lệch chuẩn $s = \\sqrt{3100} \\approx 55{,}6776 \\approx 55{,}68$.\n\\end{itemchoice}",
            "id": 1767347240857.069,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q15-1767350159229.png"
        },
        {
            "type": "short",
            "q": "Người ta muốn xây dựng đường đi giữa hai thành phố $A$ và $B$ cách nhau một con sông. Người ta xây dựng một cây cầu $EF$ bắc qua sông dài $2$ km biết rằng thành phố $A$ cách con sông một khoảng là $4$ km và thành phố $B$ cách con sông một khoảng là $22$ km (hình vẽ), biết $HE + KF = 6$ km. Hỏi chi phí thấp nhất người ta xây được đoạn đường (đi theo đường $AEFB$) kể cả cầu bắc qua sông giữa hai thành phố là bao nhiêu tỷ đồng biết rằng xây cầu tốn $50$ tỷ đồng cho mỗi km và $1$ tỷ đồng cho mỗi km trên đất liền? (kết quả làm tròn đến hàng đơn vị).\n",
            "ans": "127",
            "explain": "Đặt $HE = x$, $FK = y$, với $x, y > 0$.\\\\Theo giả thiết ta có: $HE + KF = 6 \\Rightarrow x + y = 6 \\Rightarrow y = 6 - x$.\\\\Độ dài các đoạn đường trên đất liền là:\n$\\heva{& AE = \\sqrt{AH^2 + HE^2} = \\sqrt{4^2 + x^2} = \\sqrt{16 + x^2} \\\\ & BF = \\sqrt{BK^2 + FK^2} = \\sqrt{22^2 + y^2} = \\sqrt{484 + (6-x)^2}.}$\\\\Chi phí xây dựng cầu là cố định: $50 \\times 2 = 100$ (tỷ đồng).\\\\Tổng chi phí xây dựng là:\n$$C(x) = 1 \\cdot (AE + BF) + 10 = \\sqrt{x^2 + 16} + \\sqrt{(6-x)^2 + 484} + 10.$$\nXét hàm số $f(x) = \\sqrt{x^2 + 16} + \\sqrt{x^2 - 12x + 520}$ trên khoảng $(0; 6)$.\\\\Đạo hàm:\n$$f'(x) = \\dfrac{x}{\\sqrt{x^2 + 16}} + \\dfrac{x-6}{\\sqrt{x^2 - 12x + 520}}.$$\nCho $f'(x) = 0 \\Leftrightarrow \\dfrac{x}{\\sqrt{x^2 + 16}} = \\dfrac{6-x}{\\sqrt{(6-x)^2 + 22^2}}$.\\\\Bình phương hai vế:\n$$\\dfrac{x^2}{x^2 + 16} = \\dfrac{(6-x)^2}{(6-x)^2 + 484} \\Leftrightarrow \\dfrac{x^2 + 16}{x^2} = \\dfrac{(6-x)^2 + 484}{(6-x)^2} \\Leftrightarrow \\dfrac{16}{x^2} = \\dfrac{484}{(6-x)^2}.$$\nKhai căn hai vế (do $0 < x < 6$ nên $6-x > 0$):\n$$\\dfrac{4}{x} = \\dfrac{22}{6-x} \\Leftrightarrow 4(6-x) = 22x \\Leftrightarrow 24 = 26x \\Leftrightarrow x = \\dfrac{12}{13}.$$\nKhi đó chi phí thấp nhất là:\n$$C_{\\min} = f\\left(\\dfrac{12}{13}\\right) + 100 \\approx 26{,}7 + 10 = 127\\text{ (tỷ đồng)}.$$",
            "id": 1767347240857.8572,
            "img": "images/2-HK1-THPT-BinhMinh25-26-q16-1767350161135.png"
        },
        {
            "type": "short",
            "q": "Nhà máy $A$ chuyên sản xuất một loại sản phẩm cho nhà máy $B$. Hai nhà máy thỏa thuận rằng, hằng tháng $A$ cung cấp cho $B$ số lượng sản phẩm theo đơn đặt hàng của $B$ (tối đa $100$ tấn sản phẩm). Nếu số lượng đặt hàng là $x$ tấn sản phẩm thì giá bán cho mỗi tấn sản phẩm được biểu diễn bởi công thức: $P(x)=45-0{,}001x^2$ (triệu đồng). Cho phí để $A$ sản xuất mỗi tấn sản phẩm trong một tháng là $C(x)=\\dfrac{100}{x}+33$ triệu đồng. Hãy tính lợi nhuận cao nhất mà bên $A$ có thể thu được (làm tròn đến hàng đơn vị).",
            "ans": "406",
            "explain": "Điều kiện: $0 < x \\le 100$.\\\\Doanh thu bán $x$ tấn sản phẩm là: $R(x) = x \\cdot P(x) = x(45 - 0{,}001x^2) = 45x - 0{,}001x^3$ (triệu đồng).\\\\Chi phí sản xuất $x$ tấn sản phẩm là: $T(x) = x \\cdot C(x) = x\\left(\\dfrac{100}{x} + 33\\right) = 100 + 33x$ (triệu đồng).\\\\Lợi nhuận thu được là: $L(x) = R(x) - T(x) = (45x - 0{,}001x^3) - (100 + 33x) = -0{,}001x^3 + 12x - 100$.\\\\Đạo hàm: $L'(x) = -0{,}003x^2 + 12$.\\\\$L'(x) = 0 \\Leftrightarrow x^2 = \\dfrac{12}{0{,}003} = 4000 \\Leftrightarrow x = \\sqrt{4000} = 20\\sqrt{10}$ (do $x>0$).\\\\Ta thấy $20\\sqrt{10} \\approx 63{,}25 \\in (0; 100]$.\\\\Bảng biến thiên cho thấy hàm số đạt cực đại tại $x = 20\\sqrt{10}$.\\\\Lợi nhuận lớn nhất là:\n$L(20\\sqrt{10})= 160\\sqrt{10} - 100 \\approx 405{,}96$.\\\\Làm tròn đến hàng đơn vị: $406$ triệu đồng.",
            "id": 1767347240857.5444,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "short",
            "q": "Hai chiếc drone làm nhiệm vụ chuyển hàng cứu trợ bay lên từ cùng một địa điểm. Chiếc thứ nhất bay đến điểm cách điểm xuất phát $2{,}5$km về phía nam và $1{,}5$km về phía đông, đồng thời cách mặt đất $60$m. Chiếc thứ hai bay đến điểm cách điểm xuất phát $3$km về phía bắc và $2{,}5$km về phía tây, đồng thời cách mặt đất $40$m. Trong không gian, xét hệ tọa độ $Oxyz$ với gốc tọa độ $O$ đặt tại điểm xuất phát, mặt phẳng $(Oxy)$ trùng với mặt đất. Vị trí tiếp nhiên liệu trên mặt đất cách gốc tọa độ $a$ km theo hướng bắc và $b$ km theo hướng tây sao cho tổng khoảng cách tới hai drone nhỏ nhất. Khi đó $a+b$ bằng bao nhiêu?",
            "ans": "1,7",
            "explain": "Chọn hệ trục tọa độ $Oxyz$ như đề bài: $O(0;0;0)$, mặt đất là $(Oxy)$.\n\\begin{itemize}\n\\item Drone 1 ($D_1$): $x=1{,}5$ (Đông), $y=-2{,}5$ (Nam), $z=0{,}06$ ($60$m). $\\Rightarrow D_1(1{,}5; -2{,}5; 0{,}06)$.\n\\item Drone 2 ($D_2$): $x=-2{,}5$ (Tây), $y=3$ (Bắc), $z=0{,}04$ ($40$m). $\\Rightarrow D_2(-2{,}5; 3; 0{,}04)$.\n\\end{itemize}\nGọi $M(x;y;0) \\in (Oxy)$ là vị trí tiếp nhiên liệu.\\\\Vì $z_{D_1} > 0$ và $z_{D_2} > 0$ nên hai drone nằm cùng phía so với mặt đất $(Oxy)$.\\\\Gọi $D_1'(1{,}5; -2{,}5; -0{,}06)$ là điểm đối xứng của $D_1$ qua mặt phẳng $(Oxy)$.\\\\Khi đó $MD_1 + MD_2 = MD_1' + MD_2$. Tổng này nhỏ nhất khi và chỉ khi $M, D_1', D_2$ thẳng hàng.\\\\Điều này tương đương với $\\overrightarrow{D_1'M}$ và $\\overrightarrow{D_1'D_2}$ là hai véc-tơ cùng phương.\\\\Ta có:\n\\begin{itemize}\n\\item $\\overrightarrow{D_1'M} = (x - 1{,}5; y + 2{,}5; 0 - (-0{,}06)) = (x - 1{,}5; y + 2{,}5; 0{,}06)$.\n\\item $\\overrightarrow{D_1'D_2} = (-2{,}5 - 1{,}5; 3 - (-2{,}5); 0{,}04 - (-0{,}06)) = (-4; 5{,}5; 0{,}1)$.\n\\end{itemize}\nĐể hai véc-tơ cùng phương, tồn tại số thực $k$ sao cho $\\overrightarrow{D_1'M} = k \\cdot \\overrightarrow{D_1'D_2}$.\\\\Suy ra hệ phương trình:\n$$\\heva{& x - 1{,}5 = -4k & (1) \\\\ & y + 2{,}5 = 5{,}5k & (2) \\\\ & 0{,}06 = 0{,}1k & (3)}$$\nTừ $(3) \\Rightarrow k = \\dfrac{0{,}06}{0{,}1} = 0{,}6$.\\\\Thay $k=0{,}6$ vào $(1)$ và $(2)$ ta được:\n$\\heva{& x = -4(0{,}6) + 1{,}5 = -2{,}4 + 1{,}5 = -0{,}9 \\\\ & y = 5{,}5(0{,}6) - 2{,}5 = 3{,}3 - 2{,}5 = 0{,}8.}$\\\\Vậy $M(-0{,}9; 0{,}8; 0)$.\\\\Vị trí này có hoành độ âm (hướng Tây) và tung độ dương (hướng Bắc).\\\\Suy ra $a = y = 0{,}8$ (km hướng Bắc) và $b = |x| = 0{,}9$ (km hướng Tây).\\\\Vậy $a+b = 0{,}8 + 0{,}9 = 1{,}7$.",
            "id": 1767347240857.7236,
            "localImage": null,
            "localPreview": null
        },
        {
            "type": "short",
            "q": "Một cái cây đang có chim mẹ và chim con đang đậu. Ta thiết lập hệ trục tọa độ $Oxyz$, với $O$ là gốc cây, hai trục $Ox$, $Oy$ nằm trên mặt đất và trục $Oz$ trùng với thân cây, đơn vị trên mỗi trục dài $1$ m. Chim mẹ nằm trên mặt phẳng $(Oyz)$, cách trục $Oy$ và $Oz$ một khoảng lần lượt là $10$ m và $3 $m; chim con ở vị trí có tọa độ $(-1;-2;4)$. Trên mặt đất có hai con giun đang nằm im ở vị trí có hoành độ đều bằng $3$ và tung độ lần lượt là $-1$ và $6$. Chim mẹ cần bắt một con giun để mang đến cho chim con ăn, hỏi quãng đường ngắn nhất chim mẹ có thể đi được là bao nhiêu mét? (làm tròn tới chữ số thập phân thứ nhất).",
            "ans": "16,9",
            "explain": "Xác định tọa độ các điểm:\n\\begin{itemize}\n\\item Chim mẹ ($M$): Nằm trên $(Oyz)$ nên $x=0$. Cách trục $Oy$ là $10$m\\\\ $\\Rightarrow |z|=10$. Cách trục $Oz$ là $3$m $\\Rightarrow |y|=3$. Từ hình vẽ minh họa (chim mẹ ở cao và phía dương trục $Oy$), ta chọn $M(0; 3; 10)$.\n\\item Chim con ($C$): $C(-1; -2; 4)$.\n\\item Hai con giun nằm trên mặt đất ($z=0$), hoành độ $3$, tung độ $-1$ và $6$.\\\\Gọi $A(3; -1; 0)$ và $B(3; 6; 0)$ là vị trí hai con giun.\n\\end{itemize}\nTa cần so sánh quãng đường đi qua $A$ ($S_1 = MA + AC$) và quãng đường đi qua $B$ ($S_2 = MB + BC$).\\\\\n\\textbf{Trường hợp 1: Bắt con giun tại $A(3; -1; 0)$.}\n$$MA=5\\sqrt{5} \\approx 11{,}18.$$\n$$AC=\\sqrt{33} \\approx 5{,}74.$$\nTổng quãng đường $S_1= 16{,}92$ m.\\\\\n\\textbf{Trường hợp 2: Bắt con giun tại $B(3; 6; 0)$.}\n$$MB=\\sqrt{118} \\approx 10{,}86.$$\n$$BC=\\sqrt{96} \\approx 9{,}80.$$\nTổng quãng đường $S_2 = 20{,}66$ m.\\\\\nSo sánh hai kết quả, quãng đường ngắn nhất là $S_1 \\approx 16{,}9$ m.",
            "id": 1767347240857.8594,
            "localImage": null,
            "localPreview": null
        }
    ]
};