window.EXAM_DATA = {
    "title": "Bài tập phương trình mặt phẳng",
    "subject": "Toan",
    "grade": "12",
    "time": 45,
    "password": "",
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
            "q": "Trong không gian với hệ tọa độ $ Oxyz $, cho mặt phẳng $(P):-2x+y-3z+1=0$. Tìm một véc-tơ pháp tuyến của mặt phẳng $(P)$.",
            "options": [
                "$\\vec{n}=(-2;-1;3)$",
                "$\\vec{n}=(-2;1;3)$",
                "$\\vec{n}=(2;-1;-3)$",
                "$\\vec{n}=(4;-2;6)$"
            ],
            "ans": 3,
            "explain": "Theo đề bài $(P)$ có $ 1 $ véc-tơ pháp tuyến $\\vec{n'}=(-2;1;-3)$. Trong đó véc-tơ $\\vec{n}=(4;-2;6)$ cùng phương với $\\vec{n'}$ ($ \\vec{n} = -2 \\vec{n'} $). Nên $\\vec{n}=(4;-2;6) $ cũng là $ 1 $ véc-tơ pháp tuyến của mặt phẳng $ (P) $.",
            "id": "2-GHK2-39-LientruongTHPT-NgheAn-18-L1"
        },
        {
            "type": "mcq",
            "q": "%[Thi Thử, Phan Đình Phùng, Hà Tĩnh 2018]Trong không gian với hệ tọa độ $ Oxyz, $ véc-tơ pháp tuyến của mặt phẳng $ (Oxz) $ là",
            "options": [
                "$ \\overrightarrow{n}=(1;0;0) $",
                "$ \\overrightarrow{n}=(0;0;1) $",
                "$ \\overrightarrow{n}=(1;0;1) $",
                "$ \\overrightarrow{n}=(0;1;0) $"
            ],
            "ans": 3,
            "explain": "Vì $ Oy\\perp (Oxz) $ nên $\\overrightarrow{n}=(0;1;0) $ là một véc-tơ pháp tuyến của mặt phẳng $ (Oxz). $",
            "id": "2H3Y2-2"
        },
        {
            "type": "mcq",
            "q": "%[THPT 19-5 Kim Bôi, lần 1, 2018 - 2019]Trong không gian với hệ trục tọa độ $Oxyz$, cho mặt phẳng $(P) \\colon \\dfrac{x}{3} + \\dfrac{y}{2} + \\dfrac{z}{1}=1$. Véc-tơ nào dưới đây là véc-tơ pháp tuyến của $(P)$?",
            "options": [
                "$\\vec{n} = \\left(1;\\dfrac{1}{2};\\dfrac{1}{3}\\right)$",
                "$\\vec{n}=(2;3;6)$",
                "$\\vec{n} = (6;3;2)$",
                "$\\vec{n} = (3;2;1)$"
            ],
            "ans": 1,
            "explain": "Ta có $(P) \\colon \\dfrac{x}{3} + \\dfrac{y}{2} + \\dfrac{z}{1}=1$. Suy ra $(P) \\colon 2x+3y+6z=6$.<br> Do đó ta có véc-tơ pháp tuyến của $(P)$ là $\\vec{n}=(2;3;6)$.",
            "id": "2H3Y2-2"
        },
        {
            "type": "mcq",
            "q": "%[KSCL L2, Yên Phong 2, Bắc Ninh 2018]Trong không gian $Oxyz$ cho hai điểm $A(2;0;-1)$, $B(1;1;0)$ và $(\\alpha)$ là mặt phẳng trung trực của đoạn thẳng $AB$. Véc-tơ nào sau đây là một véc-tơ pháp tuyến của $(\\alpha)$?",
            "options": [
                "$\\vec{n}(1;-1;-1)$",
                "$\\vec{n}(1;1;-1)$",
                "$\\vec{n}(1;-1;1)$",
                "$\\vec{n}(1;1;1)$"
            ],
            "ans": 0,
            "explain": "Do $(\\alpha)$ là mặt phẳng trung trực của đoạn thẳng $AB$ nên $(\\alpha)$ nhận $\\vec{AB}(-1;1;1)$ làm véc-tơ pháp tuyến.<br> Suy ra $\\vec{n}(1;-1;-1)=-\\vec{AB}$ cũng là véc-tơ pháp tuyến của $(\\alpha)$.",
            "id": "2H3Y2-2"
        },
        {
            "type": "mcq",
            "q": "%[Đề TT lần 1, Bắc Thăng Long, Hà Nội, 2018]Trong không gian với hệ tọa độ $Oxyz$, cho mặt phẳng $(\\alpha): x+y+z-6=0$. Điểm nào dưới đây <b>không</b> thuộc mặt phẳng $(\\alpha)$?",
            "options": [
                "$M(1; -1; 1)$",
                "$Q(3; 3; 0)$",
                "$N(2; 2; 2)$",
                "$P(1; 2; 3)$"
            ],
            "ans": 0,
            "explain": "Ta có $1+(-1)+1-6\\neq 0\\Rightarrow$ Tọa độ điểm $M$ không thỏa mãn phương trình mặt phẳng $(\\alpha)$ nên điểm $M$ không thuộc mặt phẳng $(\\alpha)$.",
            "id": "2H3Y2"
        },
        {
            "type": "mcq",
            "q": "%[Đề thi thử THPTQG lần 2 THPT Thoại Ngọc Hầu, An Giang, năm 2019]Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $M(1;0;0)$, $N(0;2;0)$, $P(0;0;3)$. Tìm một véc-tơ pháp tuyến của mặt phẳng $(MNP)$.",
            "options": [
                "$\\vec{n}=(6;3;2)$",
                "$\\vec{n}=(1;2;3)$",
                "$\\vec{n}=(-6;1;3)$",
                "$\\vec{n}=(-1;-2;6)$"
            ],
            "ans": 0,
            "explain": "Phương trình mặt phẳng $(MNP)$ là $\\dfrac{x}{1}+\\dfrac{y}{2}+\\dfrac{z}{3}=1$ hay $6x+3y+2z-6=0$ nên $\\vec{n}=(6;3;2)$ là một véc-tơ pháp tuyến của mặt phẳng $(MNP)$.",
            "id": "2H3Y2-2"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử, THPT Phan Đình Phùng - Đắc Lắc, 2019]Trong không gian $Oxyz$, cho mặt phẳng $(P)\\colon 2x+3y-z+4=0$. Biết $\\overrightarrow{n}=(1;b;c)$ là một véc-tơ pháp tuyến của $(P)$. Tổng $b+c$ bằng",
            "options": [
                "$ 2 $",
                "$ 1 $",
                "$ 4 $",
                "$ 0 $"
            ],
            "ans": 1,
            "explain": "Mặt phẳng $(P)$ có một véc-tơ pháp tuyến $\\overrightarrow{n}_{(P)}=(2;3;-1)=2\\left(1;\\dfrac{3}{2};-\\dfrac{1}{2}\\right)$.<br> Do đó $\\overrightarrow{n}=\\left(1;\\dfrac{3}{2};-\\dfrac{1}{2}\\right)$, suy ra $b=\\dfrac{3}{2},c=-\\dfrac{1}{2}$. Vậy $b+c=\\dfrac{3}{2}-\\dfrac{1}{2}=1$.",
            "id": "2H3Y2-2"
        },
        {
            "type": "mcq",
            "q": "%[Đề TT lần 1, Bắc Thăng Long, Hà Nội, 2018]Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(2; -1; 3)$, $B(4; 0; 1)$, $C(-10; 5; 3)$. Véc-tơ nào dưới đây là véc-tơ pháp tuyến của mặt phẳng $(ABC)$?",
            "options": [
                "$\\vec{n_3}=(1; 8; 2)$",
                "$\\vec{n_1}=(1; 2; 0)$",
                "$\\vec{n_4}=(1; -2; 2)$",
                "$\\vec{n_2}=(1; 2; 2)$"
            ],
            "ans": 3,
            "explain": "Ta có $\\overrightarrow{AB}=(2; 1; -2), \\overrightarrow{AC}=(-12; 6; 0)\\Rightarrow [\\overrightarrow{AB}, \\overrightarrow{AC}]=(12; 24; 24)=2\\vec{n_2}$. Vậy mặt phẳng $(ABC)$ nhận $\\vec{n_2}=(1; 2; 2)$ là véc-tơ pháp tuyến.",
            "id": "2H3B2"
        },
        {
            "type": "mcq",
            "q": "%[GHK2, NguyenDinhChieu-TienGiang, lần 1, 19]Trong không gian $Oxyz$, cho hai điểm $A(-1;2;3)$ và $B(3;-2;1)$. Mặt phẳng trung trực của đoạn $AB$ có phương trình là",
            "options": [
                "$2x-2y-z+4=0$",
                "$2x+2y-z=0$",
                "$2x+2y-z+4=0$",
                "$2x-2y-z=0$"
            ],
            "ans": 3,
            "explain": "Mặt phẳng trung trực của đoạn $AB$ đi qua trung điểm $I(1;0;2)$ của đoạn $AB$ và nhận véc-tơ $\\overrightarrow{AB}=(4;-4;-2)$ làm véc-tơ pháp tuyến nên có phương trình $$4(x-1)-4y-2(z-2)=0\\Leftrightarrow 2x-2y-z=0.$$",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[Lần 4 trường THPT Yên Khánh A, Ninh Bình 2019]Trong không gian $Oxyz$, cho đường thẳng $(d) \\colon \\dfrac{x-1}{2}=\\dfrac{y-2}{-1}=\\dfrac{z-3}{2}$. Mặt phẳng $(P)$ vuông góc với $(d)$ có véc-tơ pháp tuyến là",
            "options": [
                "$\\overrightarrow{n}(1;2;3)$",
                "$\\overrightarrow{n}(2;-1;2)$",
                "$\\overrightarrow{n}(1;4;1)$",
                "$\\overrightarrow{n}(2;1;2)$"
            ],
            "ans": 1,
            "explain": "Véc-tơ chỉ phương của đường thẳng $(d)$ là $\\overrightarrow{u_d}=(2;-1;2)$.<br> Mặt phẳng $(P)$ vuông góc với đường thẳng $(d)$ nên có véc-tơ pháp tuyến $\\overrightarrow{n_P}=\\overrightarrow{u_d}=(2;-1;2)$.<br> Vậy véc-tơ pháp tuyến của $(P)$ là $\\overrightarrow{n}(2;-1;2)$.",
            "id": "2H3B2-2"
        },
        {
            "type": "mcq",
            "q": "%[HK2 (2017-2018), THPT Tân Hiệp, Kiên Giang]Trong không gian với hệ tọa độ $Oxyz$, viết phương trình mặt phẳng $(P)$ qua điểm $M\\left(x_0;y_0;z_0\\right)$ và nhận $\\vec{n}\\left(A;B;C\\right)$ làm véc-tơ pháp tuyến.",
            "options": [
                "$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$",
                "$A(x+x_0)+B(y+y_0)+C(z+z_0)=0$",
                "$A(x-x_0)+B(y-y_0)+C(z-z_0)=1$",
                "$A(x+x_0)+B(y+y_0)+C(z+z_0)=1$"
            ],
            "ans": 0,
            "explain": "Áp dụng công thức về phương trình mặt phẳng khi biết véc-tơ pháp tuyến và một điểm thuộc mặt phẳng.",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[HK2-Sở Bến Tre - 2018]Trong không gian với hệ trục toạ độ $Oxyz$, cho mặt phẳng $(P)$ đi qua gốc toạ độ và nhận $\\overrightarrow{n}=(3;2;1)$ là véctơ pháp tuyến. Phương trình của mặt phẳng $(P)$ là",
            "options": [
                "$3x+2y+z-14=0$",
                "$3x+2y+z=0$",
                "$3x+2y+z+2=0$",
                "$x+2y+3z=0$"
            ],
            "ans": 1,
            "explain": "Phương trình của mặt phẳng $(P)$ là $$3(x-0)+2(y-0)+1(z-0)=0\\Leftrightarrow 3x+2y+z=0.$$",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[Thi HK2, THPT An Phước, Ninh Thuận, 2018]Trong không gian với hệ tọa độ $Oxyz$, phương trình nào dưới đây là phương trình mặt phẳng đi qua điểm $M(1;2;-3)$và có một véc-tơ pháp tuyến $\\vec{n}=(1;-2;3)$?",
            "options": [
                "$x-2y-3z+6=0$",
                "$x-2y+3z-12=0$",
                "$x-2y-3z-6=0$",
                "$x-2y+3z+12=0$"
            ],
            "ans": 3,
            "explain": "Mặt phẳng đi qua điểm $M(1;2;-3)$và có một véc-tơ pháp tuyến $\\vec{n}=(1;-2;3)$ có phương trình \\begin{equation*} 1\\cdot (x-1)-2\\cdot (y-2)+3 \\cdot (z+3)=0 \\Leftrightarrow x-2y+3z+12=0. \\end{equation*}",
            "id": "2H3Y2-2"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L2, Chuyên Thái Bình, 2019]Trong không gian với hệ trục tọa độ $Oxyz$, cho điểm $A(1;-1;2)$ và mặt phẳng $(P)\\colon 2x-y+z+1=0$. Mặt phẳng $(Q)$ đi qua điểm $A$ và song song với $(P)$. Phương trình mặt phẳng $(Q)$ là",
            "options": [
                "$(Q)\\colon 2x-y+z-5=0$",
                "$(Q)\\colon 2x-y+z=0$",
                "$(Q)\\colon x+y+z-2=0$",
                "$(Q)\\colon 2x+y-z+1=0$"
            ],
            "ans": 0,
            "explain": "Do $(Q)\\parallel (P)$ nên véc-tơ pháp tuyến $\\vec{n}_{_P}$ của $(P)$ cũng là một véc-tơ pháp tuyến của $(Q)$.<br> Do đó $(Q)\\colon 2(x-1)-(y+1)+(z-2)=0\\Leftrightarrow 2x-y+z-5=0$.",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử lần 2, THPT chuyên Lê Quý Đôn-Điện Biên, 2019]Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(-1;0;0)$, $B(0;3;0)$, $C(0;0;4)$. Phương trình nào dưới đây là phương trình của $(ABC)$?",
            "options": [
                "$\\dfrac{x}{1} + \\dfrac{y}{3} + \\dfrac{z}{4}= 1$",
                "$\\dfrac{x}{1} - \\dfrac{y}{3} - \\dfrac{z}{4}= 1$",
                "$\\dfrac{x}{4} + \\dfrac{y}{3} + \\dfrac{z}{-1}= 1$",
                "$\\dfrac{x}{1} - \\dfrac{y}{3} - \\dfrac{z}{4}= -1$"
            ],
            "ans": 3,
            "explain": "$(ABC)\\colon \\dfrac{x}{-1}+\\dfrac{y}{3}+\\dfrac{z}{4}=1\\Leftrightarrow \\dfrac{x}{1}-\\dfrac{y}{3}-\\dfrac{z}{4}= -1$.",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[GHK2, Sở GD-ĐT Bắc Giang, 2019]Trong không gian $Oxyz$, cho hai điểm $A(1;1;2)$ và $B(2;0;1)$. Mặt phẳng đi qua $A$ và vuông góc với $AB$ có phương trình là",
            "options": [
                "$x+y-z=0$",
                "$x-y-z-2=0$",
                "$x+y+z-4=0$",
                "$x-y-z+2=0$"
            ],
            "ans": 3,
            "explain": "Ta có $\\overrightarrow{AB}=(1;-1;-1)$ là VTPT của mặt phẳng, suy ra phương trình mặt phẳng qua $A$ và vuông góc với $AB$ là<br> $1\\cdot(x-1)-1\\cdot(y-1)-1\\cdot(z-2)=0\\Leftrightarrow x-y-z+2=0$.",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L2, trường chuyên Trần Phú-Hải Phòng, 2019]Trong không gian $Oxyz$, cho điểm $M(8; -2; 4)$. Gọi $A$, $B$, $C$ lần lượt là hình chiếu của $M$ trên các trục $Ox$, $Oy$, $Oz$. Phương trình mặt phẳng đi qua ba điểm $A$, $B$ và $C$ là",
            "options": [
                "$x-4y+2z-8=0$",
                "$x-4y+2z-18=0$",
                "$x+4y+2z-8=0$",
                "$x+4y-2z-8=0$"
            ],
            "ans": 0,
            "explain": "Ta có $A(8; 0; 0)$, $B(0; -2; 0)$, $C(0; 0; 4)$.<br> Phương trình theo đoạn chắn của mặt phẳng $(ABC)$ là $$\\dfrac{x}{8}+\\dfrac{y}{-2}+\\dfrac{z}{4}=1\\Leftrightarrow x-4y+2z-8=0.$$ Vậy phương trình mặt phẳng $(ABC)$ là $x-4y+2z-8=0$.",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề thi thử THPT Quốc gia 2018 môn Toán trường THPT Kim Liên – Hà Nội lần 2]Trong không gian $Oxyz$, phương trình nào dưới đây là phương trình mặt phẳng đi qua $M\\left(1;-1;2\\right)$ và vuông góc với đường thẳng $\\Delta:\\dfrac{x+1}{2} = \\dfrac{y-2}{-1} = \\dfrac{z}{3}$.",
            "options": [
                "$2x-y+3z-9 = 0$",
                "$2x-y+3z+9 = 0$",
                "$2x-y+3z-6 = 0$",
                "$2x+y+3z-9 = 0$"
            ],
            "ans": 0,
            "explain": "Mặt phẳng đi qua $M\\left(1;-1;2\\right)$ và vuông góc với đường thẳng $\\Delta$ nên có VTPT là $\\overrightarrow n \\left(2;-1;3\\right)$.<br> Phương trình mặt phẳng là: $2\\left(x-1\\right)-\\left(y+1\\right)+3\\left(z-2\\right) = 0$ hay $2x-y+3z-9 = 0$.",
            "id": "2H3Y2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề thi thử THPT Cẩm Xuyên, Hà Tĩnh, lần 2, 2017-2018]Trong không gian $Oxyz$, mặt phẳng $(P)$ đi qua điểm $A\\left(2;3;3\\right)$ và song song với giá của hai véc-tơ $\\overrightarrow{a}=\\left(1;0;2\\right)$ và $\\overrightarrow{b}=\\left(-1;3;1\\right)$ có phương trình là",
            "options": [
                "$(P)\\colon x+2y+3z+14=0$",
                "$(P)\\colon x+2y-12=0$",
                "$(P)\\colon 2x+y-z-4=0$",
                "$(P)\\colon 2x+y-z-2=0$"
            ],
            "ans": 2,
            "explain": "Ta có $\\left[\\overrightarrow{a}, \\overrightarrow{b}\\right]= \\left(-6;-3;3\\right)$.<br> Suy ra mặt phẳng $(P)$ đi qua $A\\left(2;3;3\\right)$ và có véc-tơ pháp tuyến $\\overrightarrow{n}=\\left(2;1;-1\\right)$.<br> $\\Rightarrow (P)\\colon 2\\left(x-2\\right)+1\\left(y-3\\right)-1\\left(z-3\\right)=0$ hay $(P)\\colon 2x+y-z-4=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT L2, Tây Thụy Anh Thái Bình, 2018]Trong không gian $Oxyz$ cho điểm $A(4;-3;7)$ và $B(2;1;3)$. Viết phương trình mặt phẳng trung trực của đoạn $AB$.",
            "options": [
                "$x+2y+2z+15=0$",
                "$x-2y+2z+15=0$",
                "$x+2y+2z-15=0$",
                "$x-2y+2z-15=0$"
            ],
            "ans": 3,
            "explain": "Ta có $\\overrightarrow{AB}(-2;4;-4)$ trung điểm $AB$ là $M(3;-1;5)$.<br> Mặt phẳng trung trực của $AB$ là $-2(x-3)+4(y+1)-4(z-5)=0\\Leftrightarrow x-2y+2z-15=0.$",
            "id": "2H3B2-2"
        },
        {
            "type": "mcq",
            "q": "%[Đề thi học kì II, Ngô Quyền-Quảng Ninh, 2018]Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(3;0;-1)$, $B(1;-1;3)$, $C(0;1;3)$. Viết phương trình mặt phẳng đi qua ba điểm $A, B, C$.",
            "options": [
                "$8x+4y+5z-19=0$",
                "$10x+3y+z-19=0$",
                "$2x-y+z-3=0$",
                "$10x-3y-z-21=0$"
            ],
            "ans": 0,
            "explain": "Ta có $\\overrightarrow{AB}=(-2;-1;4)$ và $\\overrightarrow{AC}=(-3;1;4)$.<br> Mặt phẳng $(ABC)$ có một véc-tơ pháp tuyến là $\\overrightarrow{n}=[\\overrightarrow{AB}, \\overrightarrow{AC}]=(-8;-4;-5)$.<br> Từ đó phương trình mặt phẳng $(ABC)$ là $8x+4y+5z-19=0$.",
            "id": "2H3B2-2"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử lần 2, THPT Nguyễn Đức Cảnh, 2019]Trong không gian $ Oxyz $, trục $ Ox $ song song với mặt phẳng có phương trình nào?",
            "options": [
                "$ x+by+cz+d=0 $ với $ (b^2+c^2 \\ne 0) $",
                "$ y+z=0 $",
                "$ by+cz+1=0 $ với $ (b^2+c^2 \\ne 0) $",
                "$ x+1=0$"
            ],
            "ans": 2,
            "explain": "Gọi phương trình mặt phẳng cần tìm là $(P)\\colon Ax+By+Cz+D=0 $ với $ A^2+B^2+C^2 \\ne 0 $.<br> Do $ O(0;0;0) \\notin (P)$ nên $ D \\ne 0 $.<br> Mặt khác $ (P) \\parallel Ox$ nên $ \\overrightarrow{n}_P \\cdot \\overrightarrow{i} =0$, suy ra $ A\\cdot 1 +B\\cdot 0+C\\cdot 0=0\\Leftrightarrow A=0 $. <br> Vậy phương trình mặt phẳng $ (P) $ có dạng $ By+Cz+D=0 \\Rightarrow \\dfrac{B}{D}y+\\dfrac{C}{D}z+1=0$.<br> Đặt $ b=\\dfrac{B}{D} $, $ c=\\dfrac{C}{D} $, vì $ B^2+C^2 \\ne 0 $ nên $ b^2+c^2 \\ne 0 $. Phương trình mặt phẳng $ (P) $ viết lại như sau $ by+cz+1=0 $ với $ b^2+c^2 \\ne 0 $.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề kiểm tra giữa học kỳ I THPT Nguyễn Khuyến,2018-2019]Trong không gian với hệ tọa độ $Oxyz$, cho mặt phẳng $(P)\\colon x - 2z + 1=0$. Chọn câu đúng nhất trong các nhận xét sau.",
            "options": [
                "$(P)$ đi qua gốc tọa độ $O$",
                "$(P)$ song song với $(Oxy)$",
                "$(P)$ vuông góc với trục $Oz$",
                "$(P)$ song song với trục $Oy$"
            ],
            "ans": 3,
            "explain": "Ta có véc-tơ pháp tuyến của $(P)$ là $\\overrightarrow{n}=(1;0;-2)$ và trục $Oy$ có véc-tơ chỉ phương là $\\overrightarrow{j}=(0;1;0)$.<br> Vì $\\overrightarrow{n}\\cdot \\overrightarrow{j}=0$ nên $\\left[\\begin{aligned} Oy\\subset (P) \\\\ Oy\\parallel (P)\\end{aligned}\\right.$. Mặt khác $O\\not\\in (P)$, do đó $Oy\\parallel (P)$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đánh giá NLGV - Yên Phong 1 - Bắc Ninh]Trong không gian với hệ tọa độ $Oxyz$, cho $A(1;-1;2)$; $B(2;1;1)$ và mặt phẳng $(P)\\colon x+y+z+1=0$. Mặt phẳng $(Q)$ chứa $A$, $B$ và vuông góc với mặt phẳng $(P)$. Mặt phẳng $(Q)$ có phương trình là",
            "options": [
                "$3x-2y-z-3=0$",
                "$x+y+z-2=0$",
                "$-x+y=0$",
                "$3x-2y-z+3=0$"
            ],
            "ans": 0,
            "explain": "Ta có $\\overrightarrow{AB}=(1;2;-1)$. $(P)$ có véc-tơ pháp tuyến là $\\overrightarrow{n}_P=(1;1;1)$.<br> Lại có $(Q)$ chứa $A,B$ và vuông góc với $(P)$ nên nhận $\\overrightarrow{n}=\\left[\\overrightarrow{AB},\\overrightarrow{n}_P\\right]=(3;-2;-1)$ làm véc-tơ pháp tuyến.<br> Suy ra phương trình $(Q)$ là $3(x-1)-2(y+1)-(z-2)=0\\Leftrightarrow 3x-2y-z-3=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề kiểm tra giữa học kỳ I THPT Nguyễn Khuyến,2018-2019]Trong không gian với hệ tọa độ $Oxyz$, cho $A(1;-1;5)$, $B(0;0;1)$. Mặt phẳng chứa $A$, $B$ và song song với $Oy$ có phương trình là",
            "options": [
                "$2x+z-3=0$",
                "$x-4z+2=0$",
                "$4x-z+1=0$",
                "$4x-z-1=0$"
            ],
            "ans": 2,
            "explain": "Ta có $\\overrightarrow{AB}=(-1;1;-4)$, $\\overrightarrow{j}=(0;1;0)\\Rightarrow \\left[\\overrightarrow{AB};\\overrightarrow{j}\\right]=(4;0;-1)$.<br> Mặt phẳng đi qua $A$, $B$ và song song với $Oy$ có véc-tơ pháp tuyến là $\\overrightarrow{n}=(4;0;-1).$<br> Phương trình mặt phẳng cần tìm là $4x-z+1=0$ (thỏa mãn song song với $Oy$).",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề kiểm tra giữa học kỳ I THPT Nguyễn Khuyến,2018-2019]Trong không gian với hệ tọa độ $(Oxyz)$, mặt phẳng $(P)$ qua điểm $A(1;-3;2)$ và vuông góc với hai mặt phẳng $(\\alpha)\\colon x+3=0$, $(\\beta)\\colon z-2=0$ có phương trình là",
            "options": [
                "$y+3=0$",
                "$y-2=0$",
                "$2y-3=0$",
                "$2x-3=0$"
            ],
            "ans": 0,
            "explain": "Ta có véc-tơ pháp tuyến của $(\\alpha)$, $(\\beta)$ lần lượt là $\\overrightarrow{n}_1=(1;0;0)$, $\\overrightarrow{n}_2=(0;0;1)$.<br> Vì $(P)$ vuông góc với $(\\alpha)$ và $(\\beta)$ nên $\\overrightarrow{n}=\\left[\\overrightarrow{n}_2;\\overrightarrow{n}_1\\right]=(0;1;0)$ là véc-tơ pháp tuyến của $(P)$.<br> Khi đó $(P)\\colon y+3=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[THPT PhuCu-HungYen-Lan1-2018]Trong không gian $Oxyz $, cho hai điểm $A(1;2;1)$, $B(7;-2;3)$. Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình là",
            "options": [
                "$3x-2y+z-14=0$",
                "$3x-2y+z-12=0$",
                "$3x-2y+z-8=0$",
                "$3x-2y+z-22=0$"
            ],
            "ans": 0,
            "explain": "Mặt phẳng trung trực của đoạn thẳng $AB$ có véc-tơ pháp tuyến $\\overrightarrow{n}=\\overrightarrow{AB}=(6;-4;2)$ và đi qua điểm $I(4;0;2)$ cho nên có phương trình $3(x-4)-2y+z-2=0\\Leftrightarrow 3x-2y+z-14=0.$",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT, Chuyên Trần Phú, Hải Phòng, lần 2, 2017-2018]Trong không gian với hệ tọa độ $Oxyz$, viết phương trình mặt phẳng tiếp xúc với mặt cầu $(S)\\colon x^2+y^2+z^2-2x-4y-6z-2=0$ và song song với mặt phẳng $(\\alpha)\\colon 4x+3y-12z+10=0$.",
            "options": [
                "$\\left[\\begin{aligned}4x+3y-12z+26=0\\\\4x+3y-12z-78=0\\end{aligned}\\right.$",
                "$\\left[\\begin{aligned}4x+3y-12z-26=0\\\\4x+3y-12z-78=0\\end{aligned}\\right.$",
                "$\\left[\\begin{aligned}4x+3y-12z-26=0\\\\4x+3y-12z+78=0\\end{aligned}\\right.$",
                "$\\left[\\begin{aligned}4x+3y-12z+26=0\\\\4x+3y-12z+78=0\\end{aligned}\\right.$"
            ],
            "ans": 2,
            "explain": "Phương trình mặt phẳng $(P)$ song song với $(\\alpha)$ có dạng $4x+3y-12z+c=0$. Mặt cầu $(S)$ có tâm $I(1;2;3)$, bán kính $r=4$ nên $(P)$ tiếp xúc với $(S)$ khi và chỉ khi \\begin{align*} 4= d\\left( I,(P) \\right)=\\dfrac{\\left| c-26 \\right|}{13}\\Leftrightarrow \\left[\\begin{aligned}c=78<br>c=-26.\\end{aligned}\\right. \\end{align*} Vậy có hai mặt phẳng thỏa mãn bài toán là $4x+3y-12z+78=0$, $4x+2y-12z-26=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề HK2, 2018, THPT Đa Phúc - Hà Nội]%%[2H3B2-3 Trong không gian với hệ tọa độ $Oxyz$, cho mặt cầu $(S) \\colon (x-1)^2+(y-2)^2+(z+1)^2=9$ và điểm $A(3;4;0)$ thuộc $(S)$. Phương trình mặt phẳng tiếp diện của $(S)$ tại $A$ là",
            "options": [
                "$x+y+z-7=0$",
                "$2x-2y+z+2=0$",
                "$2x+2y+z-14=0$",
                "$2x-2y-z+2=0$"
            ],
            "ans": 2,
            "explain": "Mặt cầu $(S)$ có tâm $I(1;2;-1)$. Khi đó $\\overrightarrow{IA} = (2;2;1)$. <br> Mặt phẳng tiếp diện của $(S)$ tại $A$ nhận $\\overrightarrow{IA}$ là véc-tơ pháp tuyến. Do đó phương trình mặt phẳng tiếp diện đó là $2(x-3) +2(y-4) +y=0 \\Leftrightarrow 2x+2y+z-14=0.$",
            "id": ""
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L1, Star Education HCM, 2019]Trong không gian với hệ trục tọa độ $Oxyz$ cho điểm $G(2;1;1)$. Gọi $(P)$ là mặt phẳng đi qua điểm $G$ và cắt các trục $Ox, Oy, Oz$ lần lượt tại $A, B, C$ sao cho $G$ là trọng tâm tam giác $ABC$. Phương trình mặt phẳng $(P)$ là",
            "options": [
                "$x+2y+2z-12=0$",
                "$x+2y+2z+6=0$",
                "$2x+y+z-6=0$",
                "$ 2x+4y+4z-12=0$"
            ],
            "ans": 3,
            "explain": "Gọi $A(a;0;0), B(0;b;0), C(0;0;c)$ lần lượt là giao điểm của $(P)$ với trục $Ox, Oy, Oz$. <br> Khi đó phương trình mặt phẳng $(P)$ có dạng $ \\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1.$<br> Do $G(2;1;1)$ là trọng tâm $\\triangle ABC$ nên $$\\begin{cases} x_A+x_B+x_C=3x_G\\\\ y_A+y_B+y_C=3y_G \\\\ z_A+z_B+z_C=3z_G. \\end{cases} \\Leftrightarrow \\begin{cases} a=6\\\\ b=3 \\\\ c=3. \\end{cases} $$ Vậy $(P)\\colon 2x+4y+4z-12=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[KSCL L2, Yên Phong 2, Bắc Ninh 2018]Trong không gian $Oxyz$ cho điểm $H(1;2;-3)$. Viết phương trình mặt phẳng $(\\alpha)$ đi qua $H$ và cắt các trục tọa độ $Ox,Oy,Oz$ tại $A,B,C$ sao cho $H$ là trực tâm của tam giác $ABC$.",
            "options": [
                "$\\dfrac{x}{1}+\\dfrac{y}{2}+\\dfrac{z}{-3}=1$",
                "$x+2y+3z+14=0$",
                "$x+2y-3z-14=0$",
                "$x+y+z=0$"
            ],
            "ans": 2,
            "explain": "Giả sử $A(a;0;0)$, $B(0;b;0)$, $C(0;0;c), abc\\neq 0$.<br> Khi đó $(\\alpha)\\colon \\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1$.<br> Ta có $\\vec{HA}=(a-1;-2;3)$, $\\vec{HB}=(-1;b-2;3)$, $\\vec{BC}=(0;-b;c)$ và $\\vec{AC}=(-a;0;c)$.<br> $H$ là trực tâm của $\\triangle ABC\\Rightarrow \\left\\{\\begin{aligned}\\vec{HA}\\cdot\\vec{BC}=0\\\\\\vec{HB}\\cdot\\vec{AC}=0\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}2b+3c=0\\\\a+3c=0\\end{aligned}\\right.\\Rightarrow a=2b=-3c$.<br> Mặt khác $H\\in (\\alpha)\\Rightarrow \\dfrac{1}{a}+\\dfrac{2}{b}-\\dfrac{3}{c}=1$.<br> Suy ra $\\dfrac{1}{-3c}+\\dfrac{4}{-3c}-\\dfrac{3}{c}=1\\Leftrightarrow 14=-3c\\Leftrightarrow c=-\\dfrac{14}{3}\\Rightarrow a=14,b=7$.<br> Vậy $(\\alpha)\\colon \\dfrac{x}{14}+\\dfrac{y}{7}+\\dfrac{z}{-\\dfrac{14}{3}}=1$ hay $(\\alpha)\\colon x+2y-3z-14=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT, THPT Nghèn, Hà Tĩnh, lần 2, 2018]Trong không gian $Oxyz,$ gọi $(P)$ là mặt phẳng chứa trục $Ox$ và vuông góc với mặt phẳng $(Q)\\colon x+y+z-3=0.$ Phương trình mặt phẳng $(P)$ là",
            "options": [
                "$y-z-1=0$",
                "$y-2z=0$",
                "$y+z=0$",
                "$y-z=0$"
            ],
            "ans": 3,
            "explain": "$(Q)$ có một véc-tơ pháp tuyến là $\\vec{n}(1; 1; 1)$. Từ giả thiết, ta suy ra $(P)$ có một véc-tơ pháp tuyến là $[\\vec{n}; \\vec{i}]=(0; 1; -1).$ Do $(P)$ đi qua gốc tọa độ $O$ nên phương trình của $(P)$ là $y-z=0.$",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[HKII, Tam Quan - Bình Định, 2018]Cho $A\\left(1;2;3\\right)$, mặt phẳng $(P)\\colon x+y+z-2=0$. Mặt phẳng $(Q)$ song song với mặt phẳng $(P)$ và $(Q$) cách điểm $A$ một khoảng bằng $3\\sqrt{3}$. Phương trình mặt phẳng $(Q)$ là",
            "options": [
                "$x+y+z+3=0$ và $x+y+z-3=0$",
                "$x+y+z+3=0$ và $x+y+z+15=0$",
                "$x+y+z+3=0$ và $x+y+z-15=0$",
                "$x+y+z+3=0$ và $x+y-z-15=0$"
            ],
            "ans": 2,
            "explain": "Do $(Q)\\parallel (P)\\Rightarrow (Q)\\colon x+y+z+d=0,\\quad d\\neq -2$.<br> Mà $d\\left(A,(Q)\\right)=3\\sqrt{3}\\Leftrightarrow |6+d|=9 \\Leftrightarrow \\left[\\begin{aligned}d=3\\\\d=-15.\\end{aligned}\\right.$<br> Vậy $(Q_1)\\colon x+y+z+3=0$ và $(Q_2)\\colon x+y+z-15=0$.",
            "id": "2H3B2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT, Chuyên Trần Phú, Hải Phòng, lần 2, 2017-2018]%[Vũ Nguyễn Hoàng Anh, 12EX8] Trong không gian với hệ tọa độ $Oxyz$, cho các điểm $A(-1;-2;0)$, $B(0;-4;0)$, $C(0;0;-3)$. Phương trình mặt phẳng $(P)$ nào dưới đây đi qua $A$, gốc tọa độ $O$ và cách đều hai điểm $B$ và $C$?",
            "options": [
                "$(P)\\colon 2x-y+3z=0$",
                "$(P)\\colon 6x-3y+5z=0$",
                "$(P)\\colon 2x-y-3z=0$",
                "$(P)\\colon -6x+3y+4z=0$"
            ],
            "ans": 3,
            "explain": "Vì $(P)$ đi qua $O$ nên phương trình mặt phẳng $(P)$ có dạng $ax+by+cz=0$ ($a^2+b^2+c^2>0$). Vì $A\\in (P)$ và $B$, $C$ cách đều $(P)$ nên \\begin{align*} \\left\\{\\begin{aligned}-a-2b=0<br>\\left| 4b \\right|=\\left| 3c \\right|\\end{aligned}\\right. \\end{align*} Chọn $a=-6$, ta có $b=3$, suy ra $c=\\pm 4$. Vậy có hai mặt phẳng thỏa mãn là $-6x+3y-4z=0$ hoặc $-6x+3y+4z=0$.",
            "id": "2H3K2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT, THPT Nghèn, Hà Tĩnh, lần 2, 2018]%[Vinhhop Tran, 12EX-9]Trong không gian $Oxyz$, cho điểm $M(-1;0;3)$. Hỏi có bao nhiêu mặt phẳng $(P)$ đi qua điêm $M$ và cắt các trục $Ox$, $Oy$, $Oz$ lần lượt tại $A$, $B$, $C$ sao cho $3OA=2OB=OC\\neq 0?$",
            "options": [
                "$3$",
                "$8$",
                "$4$",
                "$2$"
            ],
            "ans": 3,
            "explain": "Từ giả thiết, ta có thể coi $A(2a; 0; 0),$ $B(0; 3b; 0),$ $C(0; 0; 6c)$ (với $|a|=|b|=|c|\\ne 0$). Khi đó, phương trình mặt phẳng $(P)$ là $\\dfrac x{2a}+\\dfrac y{3b}+\\dfrac z{6c}=1.$<br> Do $(P)$ đi qua $M(-1; 0; 3)$ nên $-\\dfrac1{2a}+\\dfrac1{2c}=1.$ Theo trên, $c=\\pm a,$ kết hợp với phương trình vừa thu được, ta suy ra $a=-1, c=1.$<br> Cũng theo trên, $b=\\pm a$, nên có 2 giá trị của $b$. Suy ra có 2 bộ $(a, b, c)$ thỏa mãn, hay có 2 mặt phẳng thỏa yêu cầu đề bài.",
            "id": "2H3K2-3"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử, Thực hành Sư phạm - Đồng Nai, 2018]%[Đinh Thanh Hoàng, Dự án 12EX-11]Trong không gian với hệ trục tọa độ $Oxyz$ cho hai điểm $A(0; 0; 3)$, $M(1; 2; 0)$. Viết phương trình mặt phẳng $(P)$ đi qua $A$ và cắt $Ox$, $Oy$ lần lượt tại $B$, $C$ sao cho tam giác $ABC$ có trọng tâm thuộc đường thẳng $AM$.",
            "options": [
                "$(P)\\colon 6x + 3y + 4z + 2 = 0$",
                "$(P)\\colon 6x + 3y + 4z - 2 = 0$",
                "$(P)\\colon 6x + 3y + 4z - 12 = 0$",
                "$(P)\\colon 6x + 3y + 4z + 12 = 0$"
            ],
            "ans": 2,
            "explain": "Giả sử $B(b; 0; 0)$, $C(0; c; 0)$. Khi đó trọng tâm tam giác $ABC$ là $G\\left(\\dfrac{b}{3}; \\dfrac{c}{3}; 1\\right)$.<br> Ta có $\\overrightarrow{AG} = \\left(\\dfrac{b}{3}; \\dfrac{c}{3}; -2\\right)$, $\\overrightarrow{AM} = (1; 2; -3)$.<br> Vì $G$ thuộc đường thẳng $AM$ nên hai véc-tơ $\\overrightarrow{AG}$, $\\overrightarrow{AM}$ cùng phương. Do đó, ta có $$\\dfrac{b}{3} = \\dfrac{c}{6} = \\dfrac{2}{3} \\Leftrightarrow \\left\\{\\begin{aligned}b = 2 \\\\c = 4.\\end{aligned}\\right.$$ Vậy phương trình mặt phẳng $(P)$ là $\\dfrac{x}{2} + \\dfrac{y}{4} + \\dfrac{z}{3} = 1 \\Leftrightarrow 6x + 3y + 4z - 12 = 0$.",
            "id": "2H3K2-3"
        },
        {
            "type": "mcq",
            "q": "%[2-HK2-23-THPT BÙI THỊ XUÂN -TP.HCM-2021]%[Huỳnh Đức Vũ, dự án 12-EX-12-2021]Trong không gian $Oxyz$, cho mặt phẳng $(P)$ cắt các trục tọa độ lần lượt tại các điểm $A$, $B$ và $C$. Biết trực tâm của tam giác $ABC$ là $H(3;-1;1)$. Phương trình mặt phẳng $(P)$ là",
            "options": [
                "$3x-y+z-11=0$",
                "$3x-y+z+1=0$",
                "$x-y+3z-7=0$",
                "$x+3y-z+1=0$"
            ],
            "ans": 0,
            "explain": "<b>CÁCH 1.</b><br> Giả sử mặt phẳng $(P)$ cắt các trục tọa độ $Ox$, $Oy$, $Oz$ lần lượt tại các điểm $A(a;0;0)$, $B(0;b;0)$ và $C(0;0;c)$, điều kiện $a,\\,b,\\,c\\ne 0$. Khi đó $\\overrightarrow{AH}=(3-a;-1;1)$, $\\overrightarrow{BH}=(3;-1-b;1)$, $\\overrightarrow{BC}=(0;-b;c)$, $\\overrightarrow{AC}=(-a;0;c)$.<br> Mặt phẳng $(P)$ có phương trình theo đoạn chắn là $\\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1$.<br> $H(3;-1;1),\\; H\\in(P)\\Leftrightarrow\\dfrac{3}{a}-\\dfrac{1}{b}+\\dfrac{1}{c}=1$.<br> $H(3;-1;1)$ là trực tâm $\\triangle ABC \\Leftrightarrow \\left\\{\\begin{aligned} H\\in(P)\\\\\\overrightarrow{AH}\\cdot\\overrightarrow{BC}=0\\\\\\overrightarrow{BH}\\cdot\\overrightarrow{AC}=0\\end{aligned}\\right.\\Leftrightarrow\\left\\{\\begin{aligned} \\dfrac{3}{a}-\\dfrac{1}{b}+ \\dfrac{1}{c}=1\\\\ b+c=0\\\\-3a+c=0\\\\ \\end{aligned}\\right.\\Leftrightarrow\\left\\{\\begin{aligned}a=\\dfrac{11}{3}\\\\ b=-11\\\\ c=11.\\end{aligned}\\right.$<br> Khi đó $(P)\\colon \\dfrac{3}{11}x-\\dfrac{1}{11}y+\\dfrac{1}{11}z=1$ hay $(P)\\colon 3x-y+z-11=0$. <br> <b>CÁCH 2</b>. Vì tứ diện $OABC$ là tứ diện vuông tại $O$ nên $H$ là trực tâm của tam giác $ABC$ khi và chỉ khi $H$ là hình chiếu của $O$ trên mặt phẳng $(ABC)$.<br> Do đó, mặt phẳng $(P)$ thỏa mãn đề bài, là mặt phẳng qua $H$ và nhận véc-tơ <br> $\\overrightarrow{OH}=(3;1;-1)$ làm véc-tơ pháp tuyến.<br> Vậy phương trình của mặt phẳng $(P)$ là $3x-y+z-11=0$. [IMG]",
            "id": "-stealth"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L3, Diễn Châu 3, Nghệ An, 2018]%[Nguyễn Thành Tiến, dự án 12EX11]Trong không gian $Oxyz$, cho mặt cầu $(S)\\colon \\left(x-1\\right)^2+\\left(y-2\\right)^2+\\left(z-3\\right)^2=9$ và đường thẳng $d\\colon \\dfrac{x+1}{2}=\\dfrac{y}{1}=\\dfrac{z+1}{1}$. Phương trình mặt phẳng $(P)$ chứa $d$ và cắt $\\left(S\\right)$ theo một đường tròn có bán kính bằng $3$ là",
            "options": [
                "$x-3y+z+2=0$",
                "$2x-6y+2z+3=0$",
                "$-x+3y-z+2=0$",
                "$-2x+6y-2z+1=0$"
            ],
            "ans": 0,
            "explain": "Gọi $\\overrightarrow{n}_{P}\\left(A;B;C\\right)\\, \\left(A^2+B^2+C^2>0\\right)$ là véc-tơ pháp tuyến của mặt phẳng $\\left(P\\right)$. Khi đó phương trình mặt phẳng $\\left(P\\right)$ có dạng $Ax+By+Cz+D=0$.<br> Gọi $I,R$ lần lượt là tâm và bán kính mặt cầu $\\left(S\\right)$ $\\Rightarrow I\\left(1;2;3\\right)$ và $R=3$.Vì mặt phẳng $\\left(P\\right)$ cắt $\\left(S\\right)$ theo một đường tròn có bán kính bằng $3$ nên $I\\in \\left(P\\right)$ $\\Rightarrow A+2B+3C+D=0 (1) $<br> Mà $d \\subset \\left(P\\right)$ nên $\\left\\{\\begin{aligned} \\overrightarrow{u}_{d}\\cdot \\overrightarrow{n}_{P}=0 \\\\ M_0\\left(-1;0;1\\right) \\in \\left(P\\right)\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned} 2A+B+C=0\\quad (2) \\\\ -A-C+D=0.\\quad (3)\\end{aligned}\\right.$<br> Lấy $(1)+(3)$ ta được $2B+2C+2D=0\\Leftrightarrow B+C+D=0\\Leftrightarrow D=-B-C. \\quad (4)$<br> Thay $(4)$ vào $(1)$ và kết hợp với (2) có<br> \\begin{displaymath} \\left\\{\\begin{aligned} A+2B+3C-B-C=0 <br> 2A+B+C=0\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned} A+B+2C=0 \\quad (5) <br> 2A+B+C=0.\\quad (2)\\end{aligned}\\right. \\end{displaymath} Lấy $(5)-(2)$ ta được: $-A+C=0\\Leftrightarrow A=C$.<br> Chọn $A=C=1\\Rightarrow B=-3,\\, D=2$.<br> Vậy phương trình mặt phẳng $\\left(P\\right)$ là $x-3y+z+2=0$.",
            "id": "2H3K2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT Sở Ninh Bình 2018]%[TranTony, 12EX-11]Trong không gian với hệ tọa độ $Oxyz$, cho đường thẳng $d\\colon \\dfrac{x}{10}=\\dfrac{y+2}{8}=\\dfrac{z-1}{1}$ và mặt cầu $(S)\\colon x^2+y^2+z^2+2x-6y+4z-15=0$. Mặt phẳng chứa $d$, tiếp xúc với $(S)$ và cắt trục $Oz$ tại điểm có cao độ lớn hơn $3$ có phương trình là",
            "options": [
                "$2x-3y+4z-10=0$",
                "$2x-3y+4z-12=0$",
                "$3x-4y+2z-12=0$",
                "$3x-4y+2z-10=0$"
            ],
            "ans": 3,
            "explain": "$(S)\\colon x^2+y^2+z^2+2x-6y+4z-15=0\\Leftrightarrow (x+1)^2+(y-3)^2+(z+2)^2=29$ suy ra $(S)$ có tâm $I(-1;3;-2)$, bán kính $R=\\sqrt{29}$. Đường thẳng $d$ đi qua $M(0;-2;1)$ và có véc-tơ chỉ phương $\\vec{u}=(10;8;1)$.<br> Gọi $(P)$ là mặt phẳng cần lập, $\\vec{n}(a;b;c)$ là véc-tơ pháp tuyến của $(P)$ ($a^2+b^2+c^2\\neq 0$).<br> $(P)$ chứa $d$ nên $\\vec{n}\\cdot\\vec{u}=0\\Leftrightarrow 10a+8b+c=0\\Leftrightarrow c=-10a-8b$\\hfill (1)<br> $(P)$ chứa $d$ nên $(P)$ đi qua $M$ suy ra $(P)$ có phương trình $$a(x-0)+b(y+2)+c(z-1)=0\\Leftrightarrow ax+by+cz+2b-c=0.$$ $(P)$ tiếp xúc $(S)$ nên d$(I,d)=R\\Leftrightarrow\\dfrac{|-a+3b-2c+2b-c|}{\\sqrt{a^2+b^2+c^2}}=\\sqrt{29}$<br> $\\Leftrightarrow |a-5b+3c|=\\sqrt{29}\\sqrt{a^2+b^2+c^2}$ $\\Leftrightarrow |a-5b-30a-24b|=\\sqrt{29}\\sqrt{a^2+b^2+(-10a-8b)^2}$ (theo (1)) $\\Leftrightarrow 36a^2+51ab+18b^2=0\\Leftrightarrow (3a+2b)(4a+3b)=0\\Leftrightarrow\\left[\\begin{aligned}3a+2b=0\\\\4a+3b=0.\\end{aligned}\\right.$<br> Với $3a+2b=0$, ta chọn $a=2,b=-3\\Rightarrow c=4$, suy ra $(P)\\colon 2x-3y+4z-12=0$. Khi đó $(P)$ cắt trục $Oz$ tại điểm có cao độ $z=3$, không thỏa mãn.<br> Với $4a+3b=0$, ta chọn $a=3,b=-4\\Rightarrow c=2$, suy ra $(P)\\colon 3x-4y+2z-10=0$. Khi đó $(P)$ cắt trục $Oz$ tại điểm có cao độ $z=5$, thỏa mãn.<br> Vậy $(P)\\colon 3x-4y+2z-10=0$.",
            "id": "2H3K2-3"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L1, Đặng Thúc Hứa, Nghệ An, 2018]%%[Nguyễn Văn Vũ, 12EX-8] Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A\\left(0;2;-2\\right)$, $B\\left(2;2;-4\\right)$. Giả sử $I\\left(a;b;c\\right)$ là tâm đường tròn ngoại tiếp tam giác $OAB$. Tính $T=a^2+b^2+c^2$.",
            "options": [
                "$T=8$",
                "$T=2$",
                "$T=6$",
                "$T=14$"
            ],
            "ans": 0,
            "explain": "Ta có $\\overrightarrow{OA}=\\left(0;2;-2\\right)$, $\\overrightarrow{OB}=\\left(2;2;-4\\right)\\Rightarrow \\left[\\overrightarrow{OA},\\overrightarrow{OB}\\right]=\\left(-4;-4;-4\\right)$.<br> Mặt phẳng $\\left(OAB\\right)$ đi qua $O$ và có vec-tơ pháp tuyến $\\overrightarrow{n}=-\\dfrac{1}{4}\\left[\\overrightarrow{OA},\\overrightarrow{OB}\\right]=(1;1;1)$ nên có phương trình $x+y+z=0$.<br> $\\overrightarrow{AI}=\\left(a;b-2;c+2\\right)$, $\\overrightarrow{BI}=\\left(a-2;b-2;c+4\\right)$, $\\overrightarrow{OI}=\\left(a;b;c\\right)$.<br> Theo giả thiết $\\left\\{\\begin{aligned} AI=BI \\\\ AI=OI \\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned} a^2+{\\left(c+2\\right)}^2={\\left(a-2\\right)}^2+{\\left(c+4\\right)}^2 \\\\ {\\left(b-2\\right)}^2+{\\left(c+2\\right)}^2=b^2+c^2 \\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned} a-c=4&(1)\\\\-b+c=-2&(2)\\end{aligned}\\right.$<br> Mặt khác $I\\in \\left(OAB\\right)\\Rightarrow a+b+c=0\\;(3)$.<br> Giải hệ gồm $(1)$, $(2)$ và $(3)$ ta được $a=2, b=0, c=-2$.<br> Vậy $I\\left(2;0;-2\\right)\\Rightarrow T=a^2+b^2+c^2=8$.",
            "id": "2H3K2-4"
        },
        {
            "type": "mcq",
            "q": "%[KSCL (2017-2018) lần 4,Thanh Miện 2,Hải Dương]%[Chu Đức Minh, dự án EX9]Trong không gian với hệ trục tọa độ $Oxyz$, cho điểm $A(3; 1; 2)$, $B(-3; - 1; 0)$ và mặt phẳng $(P) \\colon x + y + 3z - 14 = 0$. Điểm $M(a; b; c)$ thuộc mặt phẳng $(P)$ sao cho $\\triangle MAB$ vuông tại $M$. Tính giá trị $a + b + 2c$.",
            "options": [
                "$5$",
                "$12$",
                "$10$",
                "$11$"
            ],
            "ans": 2,
            "explain": "$\\bullet$ $\\vec{MA} = (x - 3; y - 1; z - 2)$, $\\vec{MB}=(x + 3; y + 1; z)$. <br>Tam giác $MAB$ vuông tại $M$ nên $\\vec{MA}\\cdot \\vec{MB}= 0 \\Leftrightarrow x^2 + y^2 + z^2 - 2z - 10 = 0$. <br>Do đó $M$ thuộc mặt cầu $(S)$ tâm $I(0;0;1)$ bán kính $R = \\sqrt{11}$. <br> $\\bullet$ Ta có $\\mathrm{d}(I,(P)) = \\dfrac{11}{\\sqrt{11}} = \\sqrt{11}$ nên $(P)$ tiếp xúc với $(S)$. Do đó điểm $M$ là tiếp điểm của $(P)$ và mặt cầu $(S)$. <br> $\\bullet$ Gọi $\\Delta$ là đường thẳng đi qua $I$ và vuông góc với $(P) \\Leftrightarrow \\Delta \\colon \\left\\{\\begin{aligned} x= t \\\\y = t & \\\\z = 1 + 3t\\end{aligned}\\right.$. <br>Ta có $t + t + 3(1 + 3t)-14 = 0 \\Leftrightarrow t = 1$ nên $M(1;1;4)$. Vậy $a+ b + 2c = 10$.",
            "id": "2H3K2-4"
        },
        {
            "type": "mcq",
            "q": "%[Thi Thử L4, Chuyên Phan Bội Châu, Nghệ An, 2018]%[Nguyễn Hữu Nhân, dự án (12EX-10)]Trong không gian tọa độ $Oxyz$ cho $A(1;1;-1)$, $B(2;3;1)$, $C(5;5;1)$. Đường phân giác trong góc $A$ của $\\triangle ABC$ cắt mặt phẳng $(Oxy)$ tại $M(a;b;0)$. Tính $3b-a$.",
            "options": [
                "$6$",
                "$5$",
                "$3$",
                "$0$"
            ],
            "ans": 1,
            "explain": "Ta có $AB= \\sqrt{(2-1)^2+ (3-1)^2+ (1+1)^2}=3$, $AC= \\sqrt{ (5-1)^2 +(5-1)^2 +(1+1)^2}=6.$ <br> Gọi $D$ là chân đường phân giác trong góc $A$ của $\\triangle ABC$. Ta có $\\dfrac{DB}{DC} = \\dfrac{AB}{AC} =\\dfrac{1}{2}. $ <br> Gọi tọa độ của $D$ là $(x,y,z)$. Khi đó $\\vec{DB} = (2-x;3-y;1-z)$ và $\\vec{DC} = (5-x;5-y;1-z)$. <br> Vì $D$ nằm giữa $B$ và $C$ nên ta có \\begin{eqnarray*} \\vec{DC} = -2\\vec{DB} \\Leftrightarrow \\left\\{\\begin{aligned} 5-x =-2(2-x) <br>5-y =-2(3-y) <br>1-z =-2(1-z) \\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}x=3 <br>y=\\dfrac{11}{3} <br>z=1. \\end{aligned}\\right. \\end{eqnarray*} Ta có $\\vec{AD} = \\left(2; \\dfrac{8}{3}; 2\\right)$ và $\\vec{AM} = \\left( a-1;b-1;1\\right)$. <br> Điểm $M$ thuộc vào đường thẳng $AD$ khi và chi khi $\\vec{AM}$ cùng phương với $\\vec{AD}$. Điều này tương đương với \\begin{eqnarray*} \\dfrac{a-1}{2} =\\dfrac{b-1}{\\frac{8}{3}} =\\dfrac{1}{2} \\Leftrightarrow \\left\\{\\begin{aligned}a=2 <br>b=\\dfrac{7}{3}.\\end{aligned}\\right. \\end{eqnarray*} Vậy $3b-a = 7-2=5$.",
            "id": "2H3K2-4"
        },
        {
            "type": "mcq",
            "q": "%[Thi Thử Sở Đà Nẵng 2018]%[Phan Hoàng Anh - 12-EX-10]Cho hình chóp $S.ABCD$ có đáy là hình thang vuông tại $A$ và $B$ với $AB=BC=a$, $AD=2a$. Biết $SA$ vuông góc với mặt phẳng $(ABCD)$ và $SA=a\\sqrt{5}$. Côsin của góc tạo bởi hai mặt phẳng $(SBC)$ và $(SCD)$ bằng",
            "options": [
                "$\\dfrac{2\\sqrt{21}}{21}$",
                "$\\dfrac{\\sqrt{21}}{12}$",
                "$\\dfrac{\\sqrt{21}}{6}$",
                "$\\dfrac{\\sqrt{21}}{21}$"
            ],
            "ans": 2,
            "explain": "Xét hình chóp $S.ABCD$ trong hệ tọa độ $Oxyz$ như hình vẽ. Khi đó ta có <br> \\begin{tabular}{ccc} $A(0;0;0)$, & $B(a;0;0)$, & $D(0;2a;0)$,<br> $S\\left(0;0;a\\sqrt{5}\\right)$, & $M(0;a;0)$, & $C(a;a;0)$ \\end{tabular}<br> Ta có $\\overrightarrow{BC}=(0;a;0)$, $\\overrightarrow{SB}=\\left(a;0;-a\\sqrt{5}\\right)$<br> $\\Rightarrow\\overrightarrow{n}_{(SBC)}=\\left[\\overrightarrow{BC},\\overrightarrow{SB}\\right]=\\left(-a^2\\sqrt{5};0;-a^2\\right)$.<br> Ta có $\\overrightarrow{CD}=(-a;a;0)$, $\\overrightarrow{SC}=\\left(a;a;-a\\sqrt{5}\\right)$<br> $\\Rightarrow\\overrightarrow{n}_{(SCD)}=\\left[\\overrightarrow{CD},\\overrightarrow{SC}\\right]=\\left(-a^2\\sqrt{5};-a^2\\sqrt{5};-2a^2\\right)$. [IMG] Ta có $\\cos\\left[(SBC),(SCD)\\right]=\\dfrac{\\left|\\overrightarrow{n}_{(SBC)}\\cdot\\overrightarrow{n}_{(SCD)}\\right|}{\\left|\\overrightarrow{n}_{(SBC)}\\right|\\cdot\\left|\\overrightarrow{n}_{(SCD)}\\right|}=\\dfrac{\\left|5a^4+2a^4\\right|}{a^2\\sqrt{6}\\cdot a^2\\sqrt{14}}=\\dfrac{\\sqrt{21}}{6}$.",
            "id": "2H3K2-5"
        },
        {
            "type": "mcq",
            "q": "%[2_TT_96_THPTQuangTri lan 1 2018]%[Đào Trung Kiên, dự án(12EX-10)]Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $AB=a$, $BC=2a$, cạnh $SA$ vuông góc với mặt đáy $(ABC)$ và $SA=3a$. Gọi $\\alpha$ là góc giữa hai mặt phẳng $(SAC)$ và $(SBC)$. Tính $\\sin\\alpha$.",
            "options": [
                "$\\sin\\alpha=\\dfrac{1}{3}$",
                "$\\sin\\alpha=\\dfrac{\\sqrt{4138}}{120}$",
                "$\\sin\\alpha=\\dfrac{\\sqrt{13}}{7}$",
                "$\\sin\\alpha=\\dfrac{\\sqrt{7}}{5}$"
            ],
            "ans": 3,
            "explain": "Dựng hệ trục toạ độ $Oxyz$ với $O$ trùng $A$, tia $Ox$ cùng hướng với tia $BC$, tia $Oy$ trùng tia $AB$, tia $Oz$ trùng với tia $AS$.<br> Ta có $A(0;0;0)$, $B(0; a;0)$, $C(2a;a;0)$, $S(0;0;3a)$ khi đó ta tính được $(SAC)$ có véc-tơ pháp tuyến $\\vec{n}=(0;-2;0)$, $(SBC)$ có véc-tơ pháp tuyến $\\vec{m}=(0;3;1)$.<br> Từ đó tính được $\\cos\\alpha=\\dfrac{\\left|\\vec{n}\\cdot\\vec{m}\\right|}{\\left|\\vec{n}\\right|\\left|\\vec{m}\\right|}=\\dfrac{3\\sqrt{2}}{5}$. Suy ra $\\sin\\alpha=\\dfrac{\\sqrt{7}}{5}$. [IMG]",
            "id": "2H3K2-5"
        },
        {
            "type": "mcq",
            "q": "%[HK2 (2017-2018),Sở GD Quảng Trị]%[Phan Minh Tâm ex9]Trong không gian $ Oxyz, $ cho mặt cầu $ (S) $ có phương trình $ x^2+y^2+z^2-2x+2y+1=0 $. Viết phương trình $ (P) $ đi qua hai điểm $ A(0;-1;1) $ và $ B(1;-2;1) $ đồng thời cắt mặt cầu $ (S) $ theo giao tuyến là một đường tròn có chu vi bằng $ \\sqrt{2}\\pi. $",
            "options": [
                "$ x+y+3z-2=0$, $ x+y-5z+6=0 $",
                "$ x+y+3z-2=0$, $ x+y+z=0 $",
                "$ x+y-3z+4=0$, $ x+y-z+2=0 $",
                "$ x+y+1=0$, $ x+y+4z-3=0 $"
            ],
            "ans": 3,
            "explain": "Giả sử mặt phẳng $ (P) $ có dạng $ Ax+By+Cz+D=0 $ trong đó $ A^2+B^2+C^2\\ne 0 $.<br> Mặt cầu $ (S) $ có tâm $ I(1;-1;0) $; bán kính $ R=1. $ Đường tròn giao tuyến có bán kính $ r=\\dfrac{\\sqrt{2}}{2} $.<br> Suy ra, $ \\mathrm{d}\\left(I,(P)\\right) =\\sqrt{R^2-r^2}=\\dfrac{\\sqrt{2}}{2}$<br> Do mặt phẳng $ (P) $ đi qua hai điểm $ A $ và $ B $ nên ta có $ \\left\\{\\begin{aligned}-B+C+D=0\\\\A-2B+C+D=0\\end{aligned}\\right.\\Rightarrow \\left\\{\\begin{aligned}A=B\\\\B=C+D.\\end{aligned}\\right. $<br> Mặt khác, $ \\mathrm{d}\\left(I,(P)\\right) =\\dfrac{\\left|A-B+D\\right|}{\\sqrt{A^2+B^2+C^2}} = \\dfrac{\\left|A-C\\right|}{\\sqrt{2A^2+C^2}}\\cdot$ <br> Suy ra, $\\dfrac{\\left|A-C\\right|}{\\sqrt{2A^2+C^2}}=\\dfrac{\\sqrt{2}}{2} \\Leftrightarrow 2C^2-8AC=0 \\Leftrightarrow \\left[\\begin{aligned}C=0\\\\C=4A.\\end{aligned}\\right. $ <br><b>-</b> Với $ C=0 \\Rightarrow A=B=D $. <br>Chọn $ A = 1 $, ta được phương trình mặt phẳng $ (P_1) $ là $ x+y+1=0. $ <br><b>-</b> Với $ C=4A\\colon $<br>Chọn $ A=1 \\Rightarrow B = 1, C=4,D=-3 $ ta được phương trình $ (P_2)\\colon x+y+4z-3=0. $",
            "id": "2H3K2-6"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L2, Liên trường THPT Nghệ An, 2018]%[Đinh Thanh Hoàng, 12EX-9]Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha)$ đi qua điểm $M(1; 2; 1)$ và cắt các tia $Ox$, $Oy$, $Oz$ lần lượt tại $A$, $B$, $C$ sao cho độ dài $OA$, $OB$, $OC$ theo thứ tự lập thành một cấp số nhân có công bội bằng $2$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$.",
            "options": [
                "$\\dfrac{4}{\\sqrt{21}}$",
                "$\\dfrac{\\sqrt{21}}{21}$",
                "$\\dfrac{3\\sqrt{21}}{7}$",
                "$9\\sqrt{21}$"
            ],
            "ans": 2,
            "explain": "Giả sử $A(a; 0; 0)$, $B(0; b; 0)$, $C(0; 0; c)$ với $a$, $b$, $c > 0$.<br> Phương trình mặt phẳng $(\\alpha)$ có dạng $\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1$.<br> Ta có $(\\alpha)$ đi qua điểm $M(1; 2; 1)$ nên ta có $\\dfrac{1}{a} + \\dfrac{2}{b} + \\dfrac{1}{c} = 1$. \\hfill $(*)$<br> Vì $OA$, $OB$, $OC$ theo thứ tự lập thành một cấp số nhân có công bội bằng $2$ nên $c = 2b = 4a$. Thay vào $(*)$, ta được $$\\dfrac{1}{a} + \\dfrac{2}{2a} + \\dfrac{1}{4a} = 1 \\Leftrightarrow \\dfrac{9}{4a} = 1 \\Leftrightarrow a = \\dfrac{9}{4}.$$ Suy ra phương trình mặt phẳng $(\\alpha)$ là $\\dfrac{x}{1} + \\dfrac{y}{2} + \\dfrac{z}{4} = \\dfrac{9}{4} \\Leftrightarrow 4x + 2y + z - 9 = 0$.<br> Vậy $d\\left(O, (\\alpha)\\right) = \\dfrac{|-9|}{\\sqrt{4^2 + 2^2 + 1^2}} = \\dfrac{3\\sqrt{21}}{7}$.",
            "id": "2H3K2-6"
        },
        {
            "type": "mcq",
            "q": "%[Nguyễn Tâm Phục]%Câu 36 Trong không gian với hệ tọa độ $Oxyz$, cho hai đường thẳng $d_{1}\\colon \\dfrac{x-1}{2}=\\dfrac{y}{-1}=\\dfrac{z+2}{1}$ và<br> $d_{2}\\colon \\dfrac{x+1}{1}=\\dfrac{y-1}{7}=\\dfrac{z-3}{-1}$ . Đường vuông góc chung của $d_{1}$ và $d_{2}$ lần lượt cắt $d_{1}, d_{2}$ tại $A$ và $B$. Diện tích tam giác $OAB$ bằng",
            "options": [
                "$\\dfrac{\\sqrt{6}}{4}$",
                "$\\dfrac{\\sqrt{3}}{2}$",
                "$\\sqrt{6}$",
                "$\\dfrac{\\sqrt{6}}{2}$"
            ],
            "ans": 3,
            "explain": "$d_{1}$ có véc-tơ chỉ phương là $\\vec{u}_{d_1}=(2 ;-1 ; 1)$.<br> $d_2$ có véc-tơ chỉ phương là $\\vec{u}_{d_2}=(1 ; 7 ;-1)$.<br> Ta có $A \\in d_1$ suy ra $A(1+2 a ;-a ;-2+a)$ .<br> Tương tự $B \\in d_{2}$ suy ra $B(-1+b ; 1+7 b ; 3-b)$.<br> Từ đó ta có $\\vec{A B}=(-2+b-2 a ; 1+7 b+a ; 5-b-a)$.<br> Ta có \\begin{eqnarray*} &&\\left\\{\\begin{aligned}A B \\perp d_{1} <br>A B \\perp d_{2} \\end{aligned}\\right. <br> &\\Rightarrow & \\left\\{\\begin{aligned}\\vec{A B} \\cdot \\vec{u}_{d_1}=0 <br>\\vec{A B} \\cdot \\vec{u}_{d_2}=0\\end{aligned}\\right.<br> &\\Leftrightarrow & \\left\\{\\begin{aligned}2(-2+b-2 a)-1(1+7 b+a)+1(5-b-a)=0 <br> 1(-2+b-2 a)+7(1+7 b+a)-1(5-b-a)=0\\end{aligned}\\right. <br> &\\Leftrightarrow & \\left\\{\\begin{aligned} -6 a-6 b=0 <br>6 a+51 b=0\\end{aligned}\\right. <br> &\\Leftrightarrow & \\left\\{\\begin{aligned}a=0 <br>b=0.\\end{aligned}\\right. \\end{eqnarray*} Suy ra $A(1 ; 0 ;-2), B(-1 ; 1 ; 3)$.<br> Lại có $\\left [\\vec{O A} ; \\vec{O B}\\right ]=(2 ;-1 ; 1) $.<br> Khi đó $ S_{O A B}=\\dfrac{1}{2}\\left | \\left [ \\vec{O A} ; \\vec{O B}\\right ] \\right |=\\dfrac{1}{2} \\cdot \\sqrt{2^{2}+(-1)^{2}+1^{2}}=\\dfrac{\\sqrt{6}}{2}$.",
            "id": "2H3G1-2"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử L2, Thực Hành Cao Nguyên, Tây Nguyên, 2018]%[Tuan Nguyen, Dự án (12EX-11)]Trong không gian với hệ tọa độ $Oxyz$, mặt phẳng $(P)$ chứa điểm $M(1;-2;4)$, cắt các tia $Ox, Oy, Oz$ lần lượt tại các điểm $A,B,C$ sao cho $2OA=3OB=4OC$, có phương trình dạng $x+ay+bz+c=0$. Khi đó tổng $2a+b+c$ bằng",
            "options": [
                "$-7$",
                "$-\\dfrac{15}{4}$",
                "$\\dfrac{1}{2}$",
                "$-1$"
            ],
            "ans": 3,
            "explain": "Giả sử $A(m;0;0), B(0;n;0), C(0;0;p),\\quad (m,n,p>0)$ là giao điểm của $(P)$ với các tia $Ox, Oy, Oz$. Khi đó $OA=m, OB=n, OC=p$ và phương trình mặt phẳng $(P)$ $$\\dfrac{x}{m}+\\dfrac{y}{n}+\\dfrac{z}{p}=1\\qquad (*)$$ Vì $2OA=3OB=4OC$ nên $2m=3n=4p\\Leftrightarrow n=\\dfrac{2}{3}m, p=\\dfrac{m}{2}$. Lại có $(P)$ đi qua điểm $M(1;-2;4)$, thay vào $(*)$ ta có phương trình $$\\dfrac{1}{m}-\\dfrac{2}{\\frac{2m}{3}}+\\dfrac{4}{\\frac{m}{2}}=1\\Leftrightarrow m=6\\Rightarrow n=4, p=3.$$ Vậy $(P)\\colon \\dfrac{x}{6}+\\dfrac{y}{4}+\\dfrac{z}{3}=1$ hay $(P)\\colon x+\\dfrac{3}{2}y+2z-6=0$. Vậy $2a+b+c=2\\cdot \\dfrac{3}{2}+2-6=-1$.",
            "id": "2H3K2-3"
        },
        {
            "type": "mcq",
            "q": "%[KSCL tháng 3, Trần Phú-Yên Lạc, Vĩnh Phúc, 2018]%[Đức Nguyễn, dự án 12EX-8] Biết rằng có $n$ mặt phẳng với phương trình tương ứng là $(P_i):x+a_iy+b_iz+c_i=0(i=1,2,...n)$ đi qua $M(1;2;3)$ (nhưng không đi qua $O$) và cắt các trục tọa độ $Ox,$$Oy,Oz$ theo thứ tự tại $A,B,C$ sao cho hình chóp $O.ABC$ là hình chóp đều. Tính tổng $S=a_1+a_2+...+a_n$",
            "options": [
                "$S=3$",
                "$S=1$",
                "$S=-4$",
                "$S=-1$"
            ],
            "ans": 3,
            "explain": "Giả sử $A(a;0;0)$, $B(0;b;0)$, $C(0;0;c)$, với $a,b,c\\neq 0$. Khi đó trọng tâm của tam giác $ABC$ là $G\\left(\\dfrac{a}{3};\\dfrac{b}{3};\\dfrac{c}{3}\\right)$, mặt phẳng $(P_i)$ có dạng : $\\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1\\Leftrightarrow x+\\dfrac{a}{b}y+\\dfrac{a}{c}z-a=0$<br> Theo bài ra $(P_i)$ đi qua $M(1;2;3)$ nên ta có $1+\\dfrac{2a}{b}+\\dfrac{3a}{c}-a=0\\quad (1)$.<br> Mặt khác, vì $O.ABC$ là hình chóp đều nên tam giác $ABC$ đều nên <br> $AB=BC=AC\\Leftrightarrow \\sqrt{a^2+b^2}=\\sqrt{a^2+c^2}=\\sqrt{b^2+c^2}\\Leftrightarrow a^2=b^2=c^2$, kết hợp với $(1)$ ta có các trường hợp sau <br><b>-</b> $a=b=c\\Rightarrow a=1+2+3=6$ nên $(P_1):x+y+z-6=0$ <br><b>-</b> $a=b=-c\\Rightarrow a=1+2-3=0$ không thỏa yêu cầu. <br><b>-</b> $a=-b=c\\Rightarrow a=1-2+3=2$ nên $(P_2):x-y+z-2=0$ <br><b>-</b> $a=-b=-c\\Rightarrow a=1-2-3=-5$ nên $(P_3):x-y-z+5=0$ <br><b>-</b> $-a=-b=c\\Rightarrow a=1+2-3=0$, không thỏa yêu cầu <br><b>-</b> $-a=b=-c\\Rightarrow a=1-2+3=2$ nên $(P):x-y+z-2=0$ trùng với $(P_2)$ <br><b>-</b> $-a=b=c\\Rightarrow a=1-2-3=-5$ nên $(P):x-y-z+5=0$ trùng với $(P_3)$ <br><b>-</b> $-a=-b=-c\\Rightarrow a=1+2+3=6$ nên $(P):x+y+z-6=0$ trùng với $(P_1)$ Vậy $S=a_1+a_2+a_3=1-1-1=-1$.",
            "id": "2H3G2-3"
        },
        {
            "type": "mcq",
            "q": "%[TT lần 2, Đinh Tiên Hoàng - Ninh Bình - 2018]%[Vũ Văn Trường, dự án(12EX-8)] Trong không gian với hệ tọa độ $Oxyz$, cho điểm $M(1;2;3)$. Hỏi có bao nhiêu mặt phẳng $(P)$ đi qua $M$ và cắt các trục $x'Ox, y'Oy, z'Oz$ lần lượt tại các điểm $A, B, C$ sao cho $OA=OB=2OC\\neq 0$?",
            "options": [
                "$3$",
                "$5$",
                "$4$",
                "$6$"
            ],
            "ans": 2,
            "explain": "Đặt $A(a;0;0)$, $B(0;b;0)$, $C(0;0;c)$ với $abc\\ne 0$. Phương trình mặt phẳng $(P)$ đi qua ba điểm $A,B,C$ có dạng $\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1$. Do $OA = OB = 2OC$ nên ta có $|a|= |b| = 2|c|$. Suy ra $a = \\pm 2c, b =\\pm 2c$. <br><b>-</b> Nếu $a = 2c$ và $b = 2c$ thì mặt phẳng $(P)$ có dạng $\\dfrac{x}{2c} + \\dfrac{y}{2c} + \\dfrac{z}{c} = 1$. Vì $(P)$ đi qua $M$ nên $$\\dfrac{1}{2c} + \\dfrac{2}{2c} + \\dfrac{3}{c} = 1 \\Leftrightarrow \\dfrac{9}{2c} = 1 \\Leftrightarrow c = \\dfrac{9}{2}.$$ Ta có $(P)\\colon x + y +2z - 9 =0$. <br><b>-</b> Nếu $a = 2c$ và $b = -2c$ thì mặt phẳng $(P)$ có dạng $\\dfrac{x}{2c} + \\dfrac{y}{-2c} + \\dfrac{z}{c} = 1$. Vì $(P)$ đi qua $M$ nên $$\\dfrac{1}{2c} - \\dfrac{2}{2c} + \\dfrac{3}{c} = 1 \\Leftrightarrow \\dfrac{5}{2c} = 1 \\Rightarrow c = \\dfrac{5}{2}.$$ Ta có $(P)\\colon x - y +2z - 5 =0$. <br><b>-</b> Nếu $a = -2c$ và $b = 2c$ thì mặt phẳng $(P)$ có dạng $\\dfrac{x}{-2c} + \\dfrac{y}{2c} + \\dfrac{z}{c} = 1$. Vì $(P)$ đi qua $M$ nên $$-\\dfrac{1}{2c} + \\dfrac{2}{2c} + \\dfrac{3}{c} = 1 \\Leftrightarrow \\dfrac{7}{2c} = 1 \\Rightarrow c = \\dfrac{7}{2}.$$ Ta có $(P)\\colon -x + y +2z - 7 =0$. <br><b>-</b> Nếu $a = -2c$ và $b = -2c$ thì mặt phẳng $(P)$ có dạng $\\dfrac{x}{-2c} + \\dfrac{y}{-2c} + \\dfrac{z}{c} = 1$. Vì $(P)$ đi qua $M$ nên $$-\\dfrac{1}{2c} - \\dfrac{2}{2c} + \\dfrac{3}{c} = 1 \\Leftrightarrow \\dfrac{3}{2c} = 1 \\Rightarrow c = \\dfrac{3}{2}.$$ Ta có $(P)\\colon -x - y +2z - 3 =0$. Vậy có bốn mặt phẳng thỏa yêu cầu bài toán.",
            "id": "2H3G2-3"
        },
        {
            "type": "mcq",
            "q": "%[Đề KSCL, Số 2 An Nhơn, Bình Định 2018]%[Nguyễn Thị Kiều Ngân, dự án 12EX-10]Trong không gian với hệ tọa độ $Oxyz$, gọi $(P)$ là mặt phẳng đi qua điểm $M(4;1;1)$, cắt các tia $Ox$, $Oy$, $Oz$ lần lượt tại $A$, $B$, $C$ sao cho biểu thức $OA+OB+OC$ đạt giá trị nhỏ nhất. Mặt phẳng $(P)$ đi qua điểm nào dưới đây?",
            "options": [
                "$(2;0;2)$",
                "$(2;2;0)$",
                "$(2;1;1)$",
                "$(0;2;2)$"
            ],
            "ans": 3,
            "explain": "Gọi $A(a;0;0)$, $B(0;b;0)$, $C(0;0;c)$.<br> Mặt phẳng $(P) \\colon \\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1$.<br> Điểm $M(4;1;1) \\in (P)$ nên $\\dfrac{4}{a}+\\dfrac{1}{b}+\\dfrac{1}{c}=1$.<br> Ta có $OA+OB+OC=a+b+c$.<br> Áp dụng bất đẳng thức Bu-nhi-a-xcốp-ki, ta được \\begin{eqnarray*} \\left( \\dfrac{\\sqrt{4}}{\\sqrt{a}} \\cdot \\sqrt{a} +\\dfrac{\\sqrt{1}}{\\sqrt{b}} \\cdot \\sqrt{b} +\\dfrac{\\sqrt{1}}{\\sqrt{c}} \\cdot \\sqrt{c} \\right)^2 & \\le & \\left( \\dfrac{4}{a} +\\dfrac{1}{b} +\\dfrac{1}{c} \\right) (a+b+c)<br> \\Leftrightarrow 16 & \\le & a+b+c. \\end{eqnarray*} Dấu $``=\"$ xảy ra khi và chỉ khi $\\dfrac{\\sqrt{4}}{a} =\\dfrac{1}{b} =\\dfrac{1}{c} \\Leftrightarrow \\left\\{\\begin{aligned}a=8\\\\b=4\\\\c=4.\\end{aligned}\\right.$<br> Khi đó $(P) \\colon \\dfrac{x}{8}+\\dfrac{y}{4}+\\dfrac{z}{4}=1$. <br><b>-</b> Thay tọa độ $(2;0;2)$ vào phương trình $(P)$ ta được $\\dfrac{2}{8}+\\dfrac{0}{4}+\\dfrac{2}{4} \\ne 1$. <br><b>-</b> Thay tọa độ $(2;2;0)$ vào phương trình $(P)$ ta được $\\dfrac{2}{8}+\\dfrac{2}{4}+\\dfrac{0}{4} \\ne 1$. <br><b>-</b> Thay tọa độ $(2;1;1)$ vào phương trình $(P)$ ta được $\\dfrac{2}{8}+\\dfrac{1}{4}+\\dfrac{1}{4} \\ne 1$. <br><b>-</b> Thay tọa độ $(0;2;2)$ vào phương trình $(P)$ ta được $\\dfrac{0}{8}+\\dfrac{2}{4}+\\dfrac{2}{4} = 1$. Vậy mặt phẳng $(P)$ đi qua điểm có tọa độ $(0;2;2)$.",
            "id": "2H3G2-3"
        },
        {
            "type": "mcq",
            "q": "%[Thi thử THPTQG 2018 Lần 2 - THPT Chuyên Lê Khiết - Quảng Ngãi - Mã đề 165]%[Lục Hán Tường - Dự án 12-EX11-18]Trong không gian với hệ toạ độ $ Oxyz $, viết phương trình mặt phẳng $ (P) $ đi qua điểm $ M\\left(1;2;3\\right) $ và cắt các tia $ Ox $, $ Oy $, $ Oz $ lần lượt tại các điểm $ A $, $ B $, $ C $ sao cho $ T = \\dfrac{1}{OA^2} + \\dfrac{1}{OB^2} + \\dfrac{1}{OC^2} $ đạt giá trị nhỏ nhất.",
            "options": [
                "$ (P) \\colon 6x - 3y + 2z - 6 = 0 $",
                "$ (P) \\colon 6x + 3y + 2z - 18 = 0 $",
                "$ (P) \\colon x + 2y + 3z - 14 = 0 $",
                "$ (P) \\colon 3x + 2y + z - 10 = 0 $"
            ],
            "ans": 2,
            "explain": "Gọi $ A(a;0;0) $, $ B(0;b;0) $ và $ C(0;0;c) $ là ba điểm thuộc $ Oxyz $. Ta có mặt phẳng $ (P) $ đi qua các điểm $ A $, $ B $, $ C $ có phương trình là \\begin{align*} \\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1. \\end{align*} Mà $ (P) $ đi qua điểm $ M\\left(1;2;3\\right) $ nên \\begin{align*} \\dfrac{1}{a} + \\dfrac{2}{b} + \\dfrac{3}{c} = 1. \\end{align*} Do đó, áp dụng bất đẳng thức Bunyakovsky ta được \\begin{align*} & \\left(\\dfrac{1}{a} + \\dfrac{2}{b} + \\dfrac{3}{c}\\right)^2 \\leqslant \\left(1^2 + 2^2 + 3^2\\right) \\left(\\dfrac{1}{a^2} + \\dfrac{1}{b^2} + \\dfrac{1}{c^2}\\right) <br> & \\Leftrightarrow \\dfrac{1}{a^2} + \\dfrac{1}{b^2} + \\dfrac{1}{c^2} \\geqslant \\dfrac{1}{14} \\Leftrightarrow \\dfrac{1}{OA^2} + \\dfrac{1}{OB^2} + \\dfrac{1}{OC^2} \\geqslant \\dfrac{1}{14}. \\end{align*} Dấu đẳng thức xảy ra khi và chỉ khi \\begin{align*} \\left\\{\\begin{aligned} \\dfrac{1}{a} + \\dfrac{2}{b} + \\dfrac{3}{c} = 1<br> \\dfrac{1}{\\dfrac{1}{a}} = \\dfrac{2}{\\dfrac{1}{b}} = \\dfrac{3}{\\dfrac{1}{c}} \\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned} \\dfrac{1}{a} + \\dfrac{2}{b} + \\dfrac{3}{c} = 1<br> a = 2b = 3c \\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned} a = 14 <br> b = 7 <br> c = \\dfrac{14}{3} \\end{aligned}\\right. \\Leftrightarrow (P) \\colon \\dfrac{x}{14} + \\dfrac{y}{7} + \\dfrac{3z}{14} = 1. \\end{align*} Vậy $ \\min T = \\dfrac{1}{14} \\Leftrightarrow (P) \\colon x + 2y + 3z - 14 = 0 $.",
            "id": "2H3G2-8"
        },
        {
            "type": "mcq",
            "q": "%[HK2 - SGD Kon Tum - 21]%[Hoàng Thanh Phương - EX12]Trong không gian $Oxyz$, cho mặt phẳng $(P)\\colon 4x-3y-1=0$ và hai điểm $A(3;-3;-1)$, $B(9;5;-1)$. Gọi $M$ là điểm thay đổi nằm trên mặt phẳng $(P)$ sao cho tam giác $ABM$ vuông tại $M$. Gọi $S_1$, $S_2$ tương ứng là giá trị nhỏ nhất và giá trị lớn nhất của diện tích tam giác $MAB$. Tính giá trị biểu thức $T=S_2-S_1$.",
            "options": [
                "$T=5$",
                "$T=45$",
                "$T=1$",
                "$T=10$"
            ],
            "ans": 0,
            "explain": "[IMG] Ta có $\\left\\{\\begin{aligned}\\overrightarrow{AB}=(6;8;0)\\\\\\overrightarrow{n}_{(P)}=(4;-3;0)\\end{aligned}\\right.\\Rightarrow \\overrightarrow{AB}\\cdot \\overrightarrow{n}_{(P)}\\Rightarrow AB\\parallel (P)$.<br> Gọi $I$ là trung điểm $AB$, ta có $I(6;1;-1)$, $AB=10$, $\\mathrm{d}(I,(P))=\\dfrac{|24-3-1|}{\\sqrt{4^2+3^2}}=4$.<br> Vậy mặt cầu đường kính $AB$ cắt mặt phẳng $(P)$ theo đường tròn $(C)$ có tâm $J$ và bán kính $r=3$, với $J$ là hình chiếu của $I$ lên mặt phẳng $(P)$.<br> Ta có diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}AB\\cdot \\mathrm{d}(M,AB)$.<br> Kẻ $MH\\perp AB$. Ta có tam giác $MHI$ vuông tại $H$ nên $MH\\le MI=5$ không đổi, vậy diện tích tam giác $ABC$ đạt giá trị lớn nhất khi $MH=MI$, tức là tam giác $MAB$ vuông cân tại $M$.<br> Khi đó $MA=MB=\\dfrac{AB}{\\sqrt{2}}=5\\sqrt{2}$.<br> Diện tích lớn nhất của tam giác $MAB$ là $S_2=\\dfrac{1}{2}(5\\sqrt{2})^2=25$.<br> Mặt khác, ta có $MH\\ge \\mathrm{d}(AB,(P))=IJ=4$, nên diện tích của tam giác $ABC$ đạt giá trị nhỏ nhất khi $MH=IJ=4$.<br> Khi đó $S_1=\\dfrac{1}{2}\\cdot 4\\cdot 10=20$.<br> Vậy $S_2-S_1=5$.",
            "id": "2H3G1-4"
        },
        {
            "type": "mcq",
            "q": "[TN THPT 2022, mã đề 101, Câu 42]%[BCTuan, dự án 12EX8-2022]Trong không gian $Oxyz$, cho điểm $A(1;2;-2)$. Gọi $(P)$ là mặt phẳng chứa trục $Ox$ sao cho khoảng cách từ $A$ đến $(P)$ lớn nhất. Phương trình của $(P)$ là",
            "options": [
                "$2y+z=0$",
                "$2y-z=0$",
                "$y+z=0$",
                "$y-z=0$"
            ],
            "ans": 3,
            "explain": "Gọi $K$ là hình chiếu vuông góc của điểm $A(1;2;-2)$ lên trục $Ox$. <br> Khi đó $K(1;0;0)$ và $\\overrightarrow{AK}=(0;-2;2)$. <br> Gọi $H$ là hình chiếu của $A$ lên mặt phẳng $(P)$. <br> Ta có $\\mathrm{\\,d}(A,(P))=AH \\le AK=2\\sqrt{2}$. <br> Suy ra $\\max \\mathrm{d}(A,(P))=2\\sqrt{2}$, đạt được khi $H \\equiv K(1;0;0)$. <br> Khi đó mặt phẳng $(P)$ qua $O(0;0;0)$ có một véc-tơ pháp tuyến là $\\overrightarrow{AK}=(0;-2;2)$. <br> [IMG] Nên phương trình mặt phẳng $(P)$ là $$0 (x-1)-2(y-0)+2(z-0)=0 \\Leftrightarrow y-z=0.$$ Vậy $(P)\\colon y-z=0$.",
            "id": "2H3K2-6"
        },
        {
            "type": "mcq",
            "q": "[TN THPT 2022 mã đề 101-Câu 49]%[BCTuan, dự án 12EX8-2022]Trong không gian $Oxyz$, cho mặt cầu $(S)$ tâm $I(1;3;9)$ bán kính bằng $3$. Gọi $M$, $N$ là hai điểm lần lượt thuộc hai trục $Ox$, $Oz$ sao cho đường thẳng $MN$ tiếp xúc với $(S)$, đồng thời mặt cầu ngoại tiếp tứ diện $OIMN$ có bán kính bằng $\\dfrac{13}{2}\\cdot$ Gọi $A$ là tiếp điểm của $MN$ và $(S)$, giá trị $AM\\cdot AN$ bằng",
            "options": [
                "$39$",
                "$12 \\sqrt{3}$",
                "$18$",
                "$28\\sqrt{3}$"
            ],
            "ans": 1,
            "explain": "Đặt $M(a;0;0)$ và $N(0;0;b)$.<br> { Nhận xét:} $(S)$ tiếp xúc $(Oxz)$ mà $MN \\subset (Oxz)$ tiếp xúc $(S)$.<br> Suy ra $MN$ tiếp xúc $(S)$ tại tiếp điểm của $(S)$ và $(Oxz) \\Rightarrow A(1;0;9)$. \\[\\left\\{\\begin{aligned}\\overrightarrow{AM}=(a-1;0;-9)\\\\\\overrightarrow{AN}=(-1;0;b-9)\\end{aligned}\\right. \\Rightarrow \\dfrac{a-1}{-1}=\\dfrac{-9}{b-9}\\Rightarrow(a-1)(b-9)=9.\\] Khi đó $OIMN$ có $\\triangle OMN$ vuông tại $O$, $(IMN) \\perp (OMN)$ \\ (do $IA \\subset (IMN)$, $IA \\perp (OMN)$).<br> Suy ra bán kính mặt cầu ngoại tiếp $OIMN$ bằng bán kính đường tròn ngoại tiếp $\\triangle IMN$ bằng $\\dfrac{13}{2}$.<br> Suy ra $\\dfrac{1}{2}\\cdot 3\\cdot MN=\\dfrac{IM\\cdot IN\\cdot MN}{4\\cdot \\dfrac{13}{2}} \\Leftrightarrow IM\\cdot IN=39$. \\quad (1)<br> Mà $IM=\\sqrt{(a-1)^2+3^2+9^2}=\\sqrt{(a-1)^2+90}$, $IN=\\sqrt{1^2+3^2+(b-9)^2}=\\sqrt{10+\\dfrac{81}{(a-1)^2}}$.<br> Thay vào $(1)$ ta được: $\\left[(a-1)^2+90\\right]\\left[10+\\dfrac{81}{(a-1)^2}\\right]=1521 \\Leftrightarrow (a-1)^2=27$.<br> Ta có $\\left\\{\\begin{aligned}AM=\\sqrt{(a-1)^2+81}=\\sqrt{108}=6\\sqrt{3}\\\\AN=\\sqrt{1+(b-9)^2}=\\sqrt{1+3}=2\\end{aligned}\\right.$, suy ra $AM\\cdot AN=12\\sqrt{3}$.",
            "id": "2H3G3-7"
        },
        {
            "type": "mcq",
            "q": "[TN THPT 2021-Lần 1-Mã đề 101, Câu 49]%[Đào-V- Thủy]Trong không gian $Oxyz$, cho hai điểm $A(1;-3;-4)$ và $B(-2;1;2)$. Xét hai điểm $M$ và $N$ thay đổi thuộc mặt phẳng $(Oxy)$ sao cho $MN=2$. Giá trị lớn nhất của $\\left| AM-BN\\right|$ bằng",
            "options": [
                "$3\\sqrt{5}$",
                "$\\sqrt{61}$",
                "$\\sqrt{13}$",
                "$\\sqrt{53}$"
            ],
            "ans": 3,
            "explain": "[IMG] Vì $z_A \\cdot z_B<0$ nên $A$, $B$ nằm khác phía so với mặt phẳng $(Oxy)$.<br> Gọi $H$, $K$ lần lượt là hình chiếu vuông góc của $A$, $B$ lên mặt phẳng $(Oxy)$.<br> Suy ra $H(1;-3;0)$, $K(-2;1;0)$ $\\Rightarrow \\vec{HK}=(-3;4;0)$ và $HK=5$.<br> Gọi $A_1$ là điểm đối xứng của $A$ qua $(Oxy)$ $\\Rightarrow A_1(1;-3;4)$.<br> Gọi $A_2$ là điểm thỏa mãn $\\vec{A_1A_2}=\\vec{MN}$ $\\Rightarrow A_1A_2=2$.<br> Do đó $A_2$ thuộc đường tròn $(C)$ nằm trong mặt phẳng song song với $(Oxy)$ và có tâm $A_1$, bán kính $R=2$.<br> Khi đó $\\left| AM-BN\\right| = \\left| A_1M-BN\\right| = \\left| A_2N-BN\\right| \\le A_2B$.<br> Dấu ``='' xảy ra và $A_2B$ đạt giá trị lớn nhất khi $\\vec{A_1A_2}$ ngược hướng với $\\vec{HK}$.<br> Suy ra $\\vec{A_1A_2}= -\\dfrac{A_1A_2}{HK} \\cdot \\vec{HK} = \\left( \\dfrac{6}{5}; -\\dfrac{8}{5}; 0\\right) \\Rightarrow A_2 \\left( \\dfrac{11}{5}; -\\dfrac{23}{5}; 4\\right) \\Rightarrow A_2B= \\sqrt{53}$.<br> Vậy giá trị lớn nhất của $\\left| AM-BN\\right|$ bằng $\\sqrt{53}$.",
            "id": "2H3G3-8"
        },
        {
            "type": "mcq",
            "q": "[TN THPT Lần 2, mã đề 101, 2021, câu 49]%[Lý Văn Hoàng]Trong không gian $Oxyz$, cho mặt cầu $(S) \\colon (x-3)^2 +(y-2)^2 +(z-1)^2=1$. Có bao nhiêu điểm $M$ thuộc $(S)$ sao cho tiếp diện của $(S)$ tại $M$ cắt trục $Ox$, $Oy$ lần lượt tại các điểm $A(a;0;0)$, $B(0;b;0)$ mà $a$, $b$ là các số nguyên dương và $\\widehat{AMB}=90^\\circ$.",
            "options": [
                "$2$",
                "$1$",
                "$3$",
                "$4$"
            ],
            "ans": 0,
            "explain": "Mặt cầu $(S)$ có tâm $I(3;2;1)$ và bán kính $R=1$.<br> Ta có <br><b>-</b> $IA^2 = (a-3)^2 +2^2 +1^2 =a^2 -6a+14$; <br><b>-</b> $IB^2=3^2 +(b-2)^2+1^2=b^2-4b+14$. Gọi $M$ là tiếp điểm thỏa mãn bài toán $IM=R=1$. [IMG] Vì tiếp diện của mặt cầu $(S)$ tại $M$ cắt trục $Ox$, $Oy$ lần lượt tại các điểm $A$, $B$ nên ta có $\\widehat{IMA} =\\widehat{IMB}=90^\\circ$.<br> Suy ra \\begin{multicols}{2} <br><b>-</b> $MA^2=IA^2 -IM^2 =a^2 -6a+13$; <br><b>-</b> $MB^2=IB^2 - IM^2 =b^2 -4b+13$. \\end{multicols} Ta lại có $AB^2 = a^2 +b^2$ và $\\widehat{AMB}=90^\\circ$ nên $AB^2 =MA^2 +MB^2$.<br> hay $a^2 +b^2 =a^2 -6a+13+b^2 -4b+13 \\Rightarrow 3a+2b=13$. <br> Mặt khác với $a$, $b$ là các số nguyên dương cho nên $0 <a \\le 4$; $0<b\\le5$.<br> Ta có bảng giá trị của $a$ và $b$ tương ứng như dưới [IMG] <b>Thử lại</b> <br> <b>Trường hợp 1:</b> $A(1;0;0)$ và $B(0;5;0)$.<br> Gọi $(P)$ là tiếp diện của $(S)$ đi qua $A$, $B$ cắt $Oz$ tại $C(0;0;c)$, $c \\ne 0$ có phương trình <br> \\centerline{$(P) \\colon \\dfrac{x}{1} + \\dfrac{y}{5} + \\dfrac{z}{c}-1=0$.} $(P)$ tiếp xúc với mặt cầu $(S)$ nên $\\dfrac{\\left|\\dfrac{3}{1} + \\dfrac{2}{5} + \\dfrac{1}{c} -1 \\right|}{\\sqrt{1+ \\dfrac{1}{25} + \\dfrac{1}{c^2}}} =1 \\Leftrightarrow \\dfrac{144}{25} + \\dfrac{24}{5c} + \\dfrac{1}{c^2} = \\dfrac{26}{25} + \\dfrac{1}{c^2} \\Leftrightarrow c=\\dfrac{60}{59}$.<br> Như vậy trường hợp này có $1$ điểm $M$ thỏa mãn.<br> <b>Trường hợp 2:</b> $A(3;0;0)$ và $B(0;2;0)$.<br> Gọi $(P)$ là tiếp diện của $(S)$ đi qua $A$, $B$ cắt $Oz$ tại $C(0;0;c)$, $c \\ne 0$ có phương trình <br> \\centerline{$(P) \\colon \\dfrac{x}{3}+ \\dfrac{y}{2} + \\dfrac{z}{c} -1=0$.} $(P)$ tiếp xúc với mặt cầu $(S)$ nên $ \\dfrac{\\left| 1+1 +\\dfrac{1}{c}-1 \\right|}{\\sqrt{\\dfrac{1}{9} + \\dfrac{1}{4} + \\dfrac{1}{c^2}}} =1 \\Rightarrow 1+ \\dfrac{2}{c} +\\dfrac{1}{c^2} = \\dfrac{13}{36} + \\dfrac{1}{c^2} \\Rightarrow c= -\\dfrac{72}{23}$.<br> Như vậy trường hợp này có $1$ điểm $M$ thỏa mãn.<br> Vậy có tất cả $2$ điểm $M$ thỏa mãn.",
            "id": "2H3G2-7"
        },
        {
            "type": "mcq",
            "q": "[TT SGD Thái Bình - 22, Câu 42]%[Hoàng Thanh Phương - 12-EX7-2022]Trong không gian $Oxyz$, cho mặt cầu $(S)\\colon (x-1)^2+(y+2)^2+(z-3)^2=27$. Gọi $(\\alpha)$ là mặt phẳng đi qua hai điểm $A(0;0;-4)$; $B(2;0;0)$ và cắt $(S)$ theo giao tuyến là đường tròn $(C)$ sao cho khối nón có đỉnh là tâm của $(S)$ và đáy là đường tròn $(C)$ có thể tích lớn nhất. Biết rằng $(\\alpha)\\colon ax+by-z+c=0$. Khi đó $a-b+c$ bằng",
            "options": [
                "$5$",
                "$-5$",
                "$8$",
                "$-4$"
            ],
            "ans": 3,
            "explain": "Mặt cầu $(S)$ có tâm $I(1;-2;3)$ và $R=3\\sqrt{3}$. <br> Gọi chiều cao và bán kính của khối nón cần tìm lần lượt là $r$ và $h$, ta có $r^2+h^2=(3\\sqrt{3})^2\\Leftrightarrow r^2=27-h^2$ và $0<h<3\\sqrt{3}$. <br> Thể tích của khối nón cần tìm là $$V=\\dfrac{1}{3}\\pi r^2h=\\dfrac{1}{3}\\pi h (27-h^2)=\\pi \\left(9h-\\dfrac{1}{3}h^3\\right).$$ Có $V'=\\pi (9-h^2)=0\\Leftrightarrow \\left[\\begin{aligned}h=3~(\\text{thỏa mãn})\\\\h=-3~(\\text{không thỏa mãn}).\\end{aligned}\\right.$ [IMG] Lập bảng biến thiên của hàm số $V(h)$ trên $(0;3\\sqrt{3})$ [IMG] Vậy thế tích khối nón cần tìm đạt giá trị lớn nhất khi $h=3$. <br> Ta có $(\\alpha)\\colon ax+by-z+c=0$ đi qua hai điểm $A(0;0;-4)$; $B(2;0;0)$ nên $c=-4$ và $a=2$. <br> Mặt khác, $\\mathrm{d}(I,(\\alpha))=3$ nên ta có \\begin{eqnarray*} & &\\dfrac{|2\\cdot 1+b\\cdot (-2)-3-4|}{\\sqrt{2^2+b^2+(-1)^2}}=3 <br> &\\Leftrightarrow &(-2b-5)^2=9(b^2+5)<br> &\\Leftrightarrow &5b^2-20b+20=0\\Leftrightarrow b=2. \\end{eqnarray*} Vậy phương trình mặt phẳng $(\\alpha)$ là $2x+2y-z-4=0$, nên $a-b+c=2-2-4=-4$.",
            "id": "2H3G3-8"
        }
    ]
};