window.EXAM_DATA = {
    "title": "Đề Ôn Tập Tích Phân, Số 2, Năm 2025-2026",
    "subject": "Toan",
    "grade": "12",
    "time": 90,
    "password": "2afba7e5bf6e676c5798e444f8b1b261",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": true,
    "music": true,
    "allowPrint": true,
    "minTime": 50,
    "start": "2026-01-05T22:15",
    "end": "2026-01-12T21:15",
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
            "q": "Cho hàm số $y=f(x)$ liên tục trên khoảng $K$ và $a$, $b$, $c\\in K$. Mệnh đề nào sau đây <b>sai</b>?",
            "options": [
                "$\\displaystyle \\int\\limits_{a}^{a} f(x)\\mathrm{\\,d}x=0$",
                "$\\displaystyle \\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x=\\displaystyle \\int\\limits_{a}^{b} f(t) \\mathrm{\\,d}t$",
                "$\\displaystyle \\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x=-\\displaystyle \\int\\limits_{b}^{a} f(x) \\mathrm{\\,d}x$",
                "$\\displaystyle \\int\\limits_{a}^{b} f(x) \\mathrm{\\,d}x + \\displaystyle \\int\\limits_{c}^{b} f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_{a}^{c} f(x) \\mathrm{\\,d}x$"
            ],
            "ans": 3,
            "explain": "Mệnh đề sai là $\\displaystyle \\int\\limits_{a}^{b} f(x)\\mathrm{\\,d}x + \\displaystyle \\int\\limits_{c}^{b} f(x) \\mathrm{\\,d}x=\\displaystyle \\int\\limits_{a}^{c} f(x) \\mathrm{\\,d}x$.",
            "id": "2D4N2-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và $F(x)$ là nguyên hàm của $f(x)$, biết $\\displaystyle \\int\\limits_{0}^{9} f(x)\\mathrm{\\,d}x=9$ và $F(0)=3$. Tính $F(9)$.",
            "options": [
                "$F(9)=-6$",
                "$F(9)=6$",
                "$F(9)=12$",
                "$F(9)=-12$"
            ],
            "ans": 2,
            "explain": "Ta có $I=\\displaystyle\\int\\limits_{0}^{9} f(x)\\mathrm{\\,d}x = F(x)\\Big|_0^9 = F(9)- F(0)=9$<br>$\\Leftrightarrow F(9)=9 + F(0)=9 + 3= 12$.",
            "id": "2D4N2-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tính tích phân $I=\\displaystyle\\int\\limits_{0}^{1} x^{2018}(1 + x)\\mathrm{\\,d}x$?",
            "options": [
                "$I=\\dfrac{1}{2017}+\\dfrac{1}{2018}$",
                "$I=\\dfrac{1}{2018}+\\dfrac{1}{2019}$",
                "$I=\\dfrac{1}{2020}+\\dfrac{1}{2021}$",
                "$I=\\dfrac{1}{2019} + \\dfrac{1}{2020}$"
            ],
            "ans": 3,
            "explain": "Ta có $I=\\displaystyle \\int\\limits_{0}^{1} x^{2018}(1 + x) \\mathrm{\\,d}x= \\displaystyle \\int\\limits_{0}^{1} \\left(x^{2018} + x^{2019}\\right) \\mathrm{d}x$<br>$= \\left(\\dfrac{x^{2019}}{2019} + \\dfrac{x^{2020}}{2020}\\right)\\Bigg|_0^1 = \\dfrac{1}{2019}+\\dfrac{1}{2020}$.",
            "id": "2D4N2-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tính $\\displaystyle \\int\\limits_{0}^{1} 2\\mathrm{e}^{x} \\mathrm{\\,d}x$?",
            "options": [
                "$I=\\mathrm{e}^2-2\\mathrm{e}$",
                "$I=2\\mathrm{e}$",
                "$I=2\\mathrm{e}+2$",
                "$I=2\\mathrm{e}-2$"
            ],
            "ans": 3,
            "explain": "Ta có $\\displaystyle \\int\\limits_{0}^{1} 2\\mathrm{e}^{x} \\mathrm{\\,d}x = 2\\mathrm{e}^x\\Big|_0^1=2\\mathrm{e}-2$.",
            "id": "2D4N2-4",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho $a\\in \\left(0;\\dfrac{\\pi}{2}\\right)$. Tính $J=\\displaystyle \\int\\limits_{0}^{a} \\dfrac{29}{\\cos^2 x} \\mathrm{\\,d}x$ theo $a$.",
            "options": [
                "$J=-29\\tan a$",
                "$J=\\dfrac{1}{29}\\tan a$",
                "$J=29\\cot a$",
                "$J=29\\tan a$"
            ],
            "ans": 3,
            "explain": "Ta có $J=\\displaystyle \\int\\limits_{0}^{a} \\dfrac{29}{\\cos^2 x}\\mathrm{\\,d}x=29\\tan x\\Big|_0^a $<br>$= 29\\tan a - 29\\tan 0 = 29\\tan a$.",
            "id": "2D4N2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tích phân $I=\\displaystyle \\int\\limits_{-1}^{2}\\left|x^2 - 2x\\right|\\mathrm{d}x$ có giá trị là",
            "options": [
                "$I=\\dfrac{8}{3}$",
                "$I=\\dfrac{4}{3}$",
                "$I=0$",
                "$I=-\\dfrac{4}{3}$"
            ],
            "ans": 0,
            "explain": "Ta có $x^2 - 2x=0 \\Leftrightarrow x=0$ hoặc $x=2$.<br> Bảng xét dấu\n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767749056531_121.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 100%;\"> \n $I= \\displaystyle \\int\\limits_{-1}^{2} \\left|x^2 - 2x\\right| \\mathrm{d}x$<br>$ = \\displaystyle \\int\\limits_{-1}^{0} \\left(x^2 - 2x\\right) \\mathrm{d}x - \\displaystyle \\int\\limits_{0}^{2} \\left(x^2 - 2x\\right) \\mathrm{d}x$<br>$ = \\left(\\dfrac{x^3}{3} - x^2\\right)\\bigg|_{-1}^0 - \\left(\\dfrac{x^3}{3} - x^2\\right)\\bigg|_{0}^2$ <br> $ = \\left[0 - \\left(-\\dfrac{1}{3}-1\\right)\\right] - \\left[\\left(\\dfrac{8}{3}-4\\right)-0\\right] = \\dfrac{8}{3}. $",
            "id": "2D4H2-5",
            "point": "0.25",
            "solImg": ""
        },
        {
            "type": "mcq",
            "q": "Tính tích phân $I=\\displaystyle \\int\\limits_{0}^{\\tfrac{\\pi}{4}} \\sin x \\mathrm{\\,d}x$?",
            "options": [
                "$\\dfrac{2+\\sqrt{2}}{2}$",
                "$\\dfrac{2-\\sqrt{2}}{2}$",
                "$\\dfrac{\\sqrt{2}}{2}$",
                "$-\\dfrac{\\sqrt{2}}{2}$"
            ],
            "ans": 1,
            "explain": "Ta có $I=\\displaystyle \\int\\limits_{0}^{\\tfrac{\\pi}{4}} \\sin x \\mathrm{\\,d}x=-\\cos x \\bigg|_0^{\\tfrac{\\pi}{4}} $<br>$= - \\cos \\left(\\dfrac{\\pi}{4}\\right)+\\cos 0= -\\dfrac{\\sqrt{2}}{2}+1=\\dfrac{2-\\sqrt{2}}{2}$.",
            "id": "2D4N2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tính tích phân $I=\\displaystyle \\int\\limits_{1}^{2}\\dfrac{x^2+4x}{x}\\mathrm{\\,d}x$?",
            "options": [
                "$I=\\dfrac{29}{2}$",
                "$I=-\\dfrac{11}{2}$",
                "$I=\\dfrac{11}{2}$",
                "$I=-\\dfrac{29}{2}$"
            ],
            "ans": 2,
            "explain": "Ta có $I=\\displaystyle \\int\\limits_{1}^{2} \\dfrac{x^2+4x}{x}\\mathrm{\\,d}x= \\int\\limits_{1}^{2}(x+4)\\mathrm{d}x=\\dfrac{11}{2}$.",
            "id": "2D4N2-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho tích phân $I=\\displaystyle \\int\\limits_{0}^{\\tfrac{\\pi}{2}}(4x-1+\\cos x)\\mathrm{d}x =\\pi\\left(\\dfrac{\\pi}{a} -\\dfrac{1}{b}\\right)+c$, $(a$, $b$, $c\\in \\mathbb{Q})$. Tính $a-b+c$.",
            "options": [
                "$1$",
                "$-2$",
                "$\\dfrac{1}{3}$",
                "$\\dfrac{1}{2}$"
            ],
            "ans": 0,
            "explain": "Ta có $I= \\displaystyle \\int\\limits_{0}^{\\tfrac{\\pi}{2}} \\left(4x - 1 + \\cos x\\right) \\mathrm{d}x$<br>$= \\left(2x^2 - x + \\sin x\\right)\\Big|_0^{\\tfrac{\\pi}{2}} <br>= 2\\cdot \\left(\\dfrac{\\pi}{2}\\right)^2 - \\dfrac{\\pi}{2} + \\sin \\left(\\dfrac{\\pi}{2}\\right) $<br>$= \\dfrac{\\pi^2}{2} - \\dfrac{\\pi}{2} + 1 $<br>$= \\pi\\left(\\dfrac{\\pi}{2}-\\dfrac{1}{2}\\right)+1. $<br>\nSuy ra $a=2$, $b=2$, $c=1$. <br> Vậy $a-b+c=2-2+1=1$.",
            "id": "2D4N2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho $I=\\displaystyle \\int\\limits_{0}^{1}\\left(4x-2m^2\\right)\\mathrm{d}x$. Có bao nhiêu giá trị nguyên của $m$ để $I+6>0$?",
            "options": [
                "$1$",
                "$5$",
                "$2$",
                "$3$"
            ],
            "ans": 3,
            "explain": "Ta có $I=\\displaystyle \\int\\limits_{0}^{1}\\left(4x-2m^2\\right)\\mathrm{d}x= \\left(2x^2-2m^2 x\\right)\\bigg|_0^1=-2m^2+2$.<br> \nKhi đó $I+6 > 0\\Leftrightarrow-2m^2+2+6 > 0$<br>\n$\\Leftrightarrow-m^2+4 > 0 \\Leftrightarrow -2 < m < 2$.<br> Mà $m$ là số nguyên nên $m \\in\\{-1;0;1\\}$.<br> Vậy có $3$ giá trị nguyên của $m$ thỏa mãn yêu cầu.",
            "id": "2D4H2-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho $\\displaystyle \\int\\limits_{1}^{2} \\left[3f(x) + 2g(x)\\right]\\mathrm{d}x=1$, $\\displaystyle \\int\\limits_{1}^{2} \\left[2f(x) - g(x)\\right]\\mathrm{d}x=-3$. Khi đó $\\displaystyle \\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x$ bằng",
            "options": [
                "$\\dfrac{11}{7}$",
                "$-\\dfrac{5}{7}$",
                "$\\dfrac{6}{7}$",
                "$\\dfrac{16}{7}$"
            ],
            "ans": 1,
            "explain": "Ta có $\\displaystyle \\int\\limits_{1}^{2} \\left[3f(x) + 2g(x)\\right] \\mathrm{d}x = 1 \\Leftrightarrow \\displaystyle 3\\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x + \\displaystyle 2\\int\\limits_{1}^{2} g(x) \\mathrm{\\,d}x= 1$.<br> Và $\\displaystyle \\int\\limits_{1}^{2} \\left[2f(x) - g(x)\\right] \\mathrm{d}x = -3 \\Leftrightarrow \\displaystyle 2\\int\\limits_{1}^{2} 2f(x) \\mathrm{\\,d}x - \\displaystyle \\int\\limits_{1}^{2} g(x) \\mathrm{\\,d}x = -3$.<br> Đặt $a = \\displaystyle \\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x$, $b = \\displaystyle \\int\\limits_{1}^{2} g(x) \\mathrm{\\,d}x$ ta có hệ phương trình $$\\left\\{\\begin{aligned}3a+2b=1\\\\2a-b=-3\\\\\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}a=-\\dfrac{5}{7}\\\\b=\\dfrac{11}{7}.\\end{aligned}\\right.$$ Vậy $\\displaystyle \\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x=\\dfrac{5}{7}$.",
            "id": "2D4H2-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Một vật chuyển động chậm với vận tốc $v(t)=160-10t$ (m/s). Quãng đường mà vật di chuyển được từ thời điểm $t=0$ (s) đến thời điểm mà vật dừng lại là",
            "options": [
                "$160$ (m)",
                "$1280$ (m)",
                "$0$ (m)",
                "$144$ (m)"
            ],
            "ans": 1,
            "explain": "Vật dừng lại đồng nghĩa với $v(t)=0 \\Leftrightarrow 160-10t=0 \\Leftrightarrow t=16$ (s).<br> Quãng đường vật đi được là $s(t)=\\displaystyle \\int\\limits_{0}^{16}(160-10t) \\mathrm{d}t = \\left(160t-5t^2\\right)\\bigg|_0^{16}=1280$ (m).",
            "id": "2D4V2-6",
            "point": "0.25"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $\\displaystyle \\int\\limits_{-1}^{10} f(x)\\mathrm{\\,d}x=15$,<br> $\\displaystyle \\int\\limits_{3}^{5} f(x) \\mathrm{\\,d}x=-2$, $\\displaystyle \\int\\limits_{-1}^{12} f(x) \\mathrm{\\,d}x=5$.",
            "items": [
                {
                    "sub": "$\\displaystyle \\int\\limits_{10}^{-1} 2f(x)\\mathrm{\\,d}x=30$",
                    "ans": "F"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{10}^{12} \\left[f(x)-2\\right] \\mathrm{d}x=-12$",
                    "ans": "F"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{-1}^{3} f(x) \\mathrm{\\,d}x + \\int\\limits_{5}^{10} f(x) \\mathrm{\\,d}x=17$",
                    "ans": "T"
                },
                {
                    "sub": "Biết rằng $f(x)>0$, $\\forall x>3$; $f(x)<0$, $\\forall x<3$ và $\\displaystyle \\int\\limits_{-1}^{12} \\left|f(x)\\right|\\mathrm{d}x=5$. Khi đó $\\displaystyle \\int\\limits_{-1}^{3} f(x)\\mathrm{\\,d}x - \\int\\limits_{5}^{12} f(x)\\mathrm{\\,d}x=3$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> Sai. Vì $ \\displaystyle \\int\\limits_{10}^{-1} 2f(x) \\mathrm{\\,d}x = -2\\int\\limits_{-1}^{10} f(x) \\mathrm{\\,d}x = -2\\cdot 15=-30$. <br><b>-</b> Sai. Vì $ \\displaystyle \\int\\limits_{10}^{12} \\left[f(x)-2\\right] \\mathrm{d}x $<br>$= \\int\\limits_{10}^{12} f(x) \\mathrm{\\,d}x - \\int\\limits_{10}^{12} 2 \\mathrm{\\,d}x $<br>$= \\int\\limits_{-1}^{12} f(x) \\mathrm{\\,d}x - \\int\\limits_{-1}^{10} f(x) \\mathrm{\\,d}x - 4 $<br>$= 5-15-4 = -14.$ <br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{-1}^{3} f(x) \\mathrm{\\,d}x + \\int\\limits_{5}^{10} f(x) \\mathrm{\\,d}x = \\int\\limits_{-1}^{10} f(x) \\mathrm{\\,d}x - \\int\\limits_{3}^{5} f(x) \\mathrm{\\,d}x = 15 - (-2) = 17$. <br><b>-</b> Sai.<br> Ta có $f(x)>0$, $\\forall x>3$; $f(x)<0$, $\\forall x<3$.<br> Suy ra $\\displaystyle \\int\\limits_{-1}^{12} \\left|f(x)\\right|\\mathrm{d}x= -\\int\\limits_{-1}^{3} f(x)\\mathrm{\\,d}x+\\int\\limits_{3}^{5} f(x)\\mathrm{\\,d}x + \\int\\limits_{5}^{12} f(x)\\mathrm{\\,d}x=5$.<br> Khi đó<br> \\begin{align*} \\displaystyle \\int\\limits_{-1}^{3} f(x) \\mathrm{\\,d}x - \\int\\limits_{5}^{12} f(x) \\mathrm{\\,d}x &= \\int\\limits_{3}^{5} f(x) \\mathrm{\\,d}x - 5<br> &= -2-5 <br> &= -7. \\end{align*}",
            "id": "2D4H2-1",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $f(x)=\\left\\{\\begin{aligned}&\\dfrac{4x^2-3}{x} \\text{ khi } x\\ge 1\\\\&ax+b  \\text{ khi } -2 < x < 1\\\\&x^2+4x-4 \\text{ khi }  x \\le -2.\\end{aligned}\\right.$",
            "items": [
                {
                    "sub": "$\\displaystyle \\int\\limits_{-5}^{-2} f(x) \\mathrm{\\,d}x = -15$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{3}^{4} f(x) \\mathrm{\\,d}x = 14 +3\\ln 3 - 6\\ln 2$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{0}^{1} f(x) \\mathrm{\\,d}x = a+b$",
                    "ans": "F"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{-3}^{0} f(x) \\mathrm{\\,d}x = \\dfrac{-53}{3}$",
                    "ans": "T"
                }
            ],
            "explain": "<br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{-5}^{-2} f(x) \\mathrm{\\,d}x =\\int\\limits_{-5}^{-2} \\left(x^2+4x-4\\right) \\mathrm{d}x = -15$. <br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{3}^{4} f(x) \\mathrm{\\,d}x = \\int\\limits_{3}^{4} \\dfrac{4x^2-3}{x} \\mathrm{\\,d}x = \\int\\limits_{3}^{4} \\left(4x - \\dfrac{3}{x} \\right) \\mathrm{d}x = 14 +3\\ln 3 - 6\\ln 2$. <br><b>-</b> Sai. Vì $\\displaystyle \\int\\limits_{0}^{1} f(x) \\mathrm{\\,d}x =\\int\\limits_{0}^{1}(ax+b)\\mathrm{d}x=\\left(\\dfrac{ax^2}{2} + bx\\right)\\bigg|_0^1=\\dfrac{a}{2}+b\\ne a+b$.<br> (Chỉ đúng với $a=0$). <br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{-3}^{0} f(x) \\mathrm{\\,d}x= \\int\\limits_{-3}^{-2} \\left(x^2+4x-4\\right)\\mathrm{d}x+\\int\\limits_{-2}^{0} (ax+b)\\mathrm{d}x$.<br> Do hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ nên $$\\left\\{\\begin{aligned}\\lim\\limits_{x\\to 1^-} f(x) = \\lim\\limits_{x\\to 1^+} f(x)\\\\\\lim\\limits_{x\\to -2^+} f(x) = \\lim\\limits_{x\\to -2^-} f(x)\\\\\\end{aligned}\\right.\\Rightarrow \\left\\{\\begin{aligned}a+b=1\\\\-2a+b=-8\\\\\\end{aligned}\\right. \\Rightarrow a=3;\\, b=-2.$$ Suy ra $\\displaystyle \\int\\limits_{-3}^{0} f(x) \\mathrm{\\,d}x = \\int\\limits_{-3}^{-2} \\left(x^2+4x-4\\right)\\mathrm{d}x+\\int\\limits_{-2}^{0} (3x-2)\\mathrm{d}x=\\dfrac{-53}{3}$.",
            "id": "2D4H2-2",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $f(x)$; $g(x)$ thỏa mãn $\\displaystyle \\int\\limits_{2}^{6} f(x) \\mathrm{\\,d}x= 3$; $\\displaystyle \\int\\limits_{2}^{6} g(x)\\mathrm{\\,d}x=-2$.",
            "items": [
                {
                    "sub": "$\\displaystyle \\int\\limits_{2}^{6} \\left[f(x)+g(x)\\right]\\mathrm{,d}x=1$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{2}^{6} \\left[3f(x)-g(x)-3\\right]\\mathrm{d}x=10$",
                    "ans": "F"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{2}^{6} \\left[3\\mathrm{e}^x-2f(x)\\right]\\mathrm{d}x= 3\\mathrm{e}^6-3\\mathrm{e}^2-6$",
                    "ans": "T"
                },
                {
                    "sub": "Biết $\\displaystyle \\int\\limits_{2}^{6}\\left[3g(x)-\\dfrac{2x-3}{x^2}\\right]\\mathrm{d}x =a+b\\ln 3$, với $a$; $b\\in\\mathbb{Q}$. Khi đó $a^2+12b=-8$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{2}^{6}\\left[f(x)+g(x)\\right] \\mathrm{d}x=\\displaystyle\\int\\limits_{2}^{6} f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_{2}^{6} g(x) \\mathrm{\\,d}x=3-2=1$. <br><b>-</b> Sai. Vì $\\displaystyle \\int\\limits_{2}^{6}\\left[3f(x)-g(x)-3\\right]\\mathrm{d}x $<br>$= 3\\displaystyle\\int\\limits_{2}^{6} f(x) \\mathrm{\\,d}x-\\displaystyle\\int\\limits_{2}^{6} g(x) \\mathrm{\\,d}x - \\displaystyle\\int\\limits_{2}^{6} 3 \\mathrm{\\,d}x $<br>$ =  3\\cdot 3-(-2)-12=-1\\ne 10. $<br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{2}^{6} \\left[3\\mathrm{e}^x-2f(x)\\right] \\mathrm{\\,d}x $<br>$= 3\\displaystyle\\int\\limits_{2}^{6} \\mathrm{e}^x \\mathrm{\\,d}x - 2\\displaystyle\\int\\limits_{2}^{6} f(x) \\mathrm{\\,d}x = 3\\mathrm{e}^6-3\\mathrm{e}^2-6$. <br><b>-</b> Sai. Ta có $ \\displaystyle \\int\\limits_{2}^{6} \\left[3g(x)-\\dfrac{2x-3}{x^2}\\right] \\mathrm{d}x $<br>$ = \\ 3\\displaystyle\\int\\limits_{2}^{6} g(x)\\mathrm{\\,d}x- \\displaystyle\\int\\limits_{2}^{6} \\dfrac{2x-3}{x^2} \\mathrm{\\,d}x=-6- \\left(2\\ln\\left|x\\right|+\\dfrac{3}{x}\\right)\\bigg|_2^6 $<br>$ = -5 + 2\\ln 3. $ Suy ra $a=-5$; $b=2$.<br> Vậy $a^2+12b=25+24=49\\ne 25$.",
            "id": "2D4H2-4",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$, đồ thị hàm số $(C)\\colon y=f'(x)$ trên đoạn $[-3;6]$ là đường gấp khúc như hình vẽ. Khi đó \n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767750091369_18.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 70%;\"> ",
            "items": [
                {
                    "sub": "$\\displaystyle \\int\\limits_{-3}^{-1} f'(x)\\mathrm{\\,d}x=-2$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle \\int\\limits_{0}^{1} f'(x)\\mathrm{\\,d}x=\\dfrac{3}{2}$",
                    "ans": "T"
                },
                {
                    "sub": "$f(2)-f(6)=4$",
                    "ans": "F"
                },
                {
                    "sub": "$f(5)+f(-3)-2f(2)=-10$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> Đúng.<br> Ta có $A(-3;-2)$, $B(2;3)$ $\\Rightarrow AB\\colon y=x+1$.<br> Khi đó $\\displaystyle \\int\\limits_{-3}^{-1} f'(x)\\mathrm{\\,d}x= \\displaystyle\\int\\limits_{-3}^{-1} (x+1)\\mathrm{\\,d}x=-2$. <br><b>-</b> Đúng. Vì $\\displaystyle \\int\\limits_{0}^{1} f'(x) \\mathrm{\\,d}x= \\displaystyle\\int\\limits_{0}^{1}(x+1)\\mathrm{\\,d}x=\\dfrac{3}{2}$. <br><b>-</b> Sai.<br> Ta có $B(2;3)$, $E(5;0)\\Rightarrow BC\\colon y=-x+5$.<br> Khi đó $\\displaystyle \\int\\limits_{2}^{6} f'(x)\\mathrm{\\,d}x= \\displaystyle\\int\\limits_{2}^{6}(-x+5) \\mathrm{\\,d}x = 4$.<br> Vì vậy $f(2)-f(6)=-\\displaystyle \\int\\limits_{2}^{6} f'(x)\\mathrm{\\,d}x=-4$. <br><b>-</b> Sai.<br> Ta có $\\displaystyle \\int\\limits_{-3}^{2} f'(x)\\mathrm{\\,d}x= \\displaystyle\\int\\limits_{-3}^{2} (x+1)\\mathrm{\\,d}x=\\dfrac{5}{2}=f(2)-f(-3)$.<br> Mặt khác $\\displaystyle \\int\\limits_{2}^{5} f'(x)\\mathrm{\\,d}x= \\displaystyle\\int\\limits_{2}^{5}(-x+5)\\mathrm{\\,d}x=\\dfrac{9}{2}=f(5)-f(2)$.<br> Vì vậy $f(5)+f(-3)-2f(2)=\\dfrac{9}{2}-\\dfrac{5}{2}=2$.",
            "id": "2D4V2-2",
            "point": "1",
            "img": ""
        },
        {
            "type": "short",
            "q": "Cho $\\displaystyle \\int\\limits_{1}^{4}\\sqrt{\\dfrac{1}{4x}+\\dfrac{\\sqrt{x}+ \\mathrm{e}^x}{\\sqrt{x}\\cdot \\mathrm{e}^{2x}}}\\mathrm{\\,d}x=a+\\mathrm{e}^b-\\mathrm{e}^c$ với $a$, $b$, $c$ là các số nguyên. Tính giá trị của biểu thức $S=a+b+c$.",
            "ans": "-4",
            "explain": "Ta có $\\displaystyle \\int\\limits_{1}^{4} \\sqrt{\\dfrac{1}{4x} + \\dfrac{\\sqrt{x} + \\mathrm{e}^x}{\\sqrt{x}\\cdot \\mathrm{e}^{2x}}} \\mathrm{\\,d}x $<br>$= \\displaystyle\\int\\limits_{1}^{4} \\sqrt{\\left(\\dfrac{1}{2\\sqrt{x}}\\right)^2 + 2\\dfrac{1}{2\\sqrt{x}\\cdot \\mathrm{e}^x}+\\left(\\dfrac{1}{\\mathrm{e}^x}\\right)^2} \\mathrm{\\,d}x$<br>$= \\displaystyle\\int\\limits_{1}^{4}\\sqrt{\\left(\\dfrac{1}{2\\sqrt{x}} + \\dfrac{1}{\\mathrm{e}^x}\\right)^2}\\mathrm{d}x$<br>$=\\displaystyle\\int\\limits_{1}^{4}\\left(\\dfrac{1}{2\\sqrt{x}}+\\dfrac{1}{\\mathrm{e}^x}\\right) \\mathrm{\\,d}x$<br>$=\\left(\\sqrt{x}-\\mathrm{e}^{-x}\\right)\\bigg|_1^4$<br>$=1-\\mathrm{e}^{-4}+\\mathrm{e}^{-1}$<br>$=a+\\mathrm{e}^b-\\mathrm{e}^c. $<br> $\\Rightarrow \\left\\{\\begin{aligned}a=1\\\\b=-1\\\\c=-4.\\end{aligned}\\right.$<br> Vậy $a+b+c=1+(-1)+(-4)=-4$.",
            "id": "2D4V2-2",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Tốc độ chuyển động của thang máy từ tầng $1$ lên tầng cao nhất theo thời gian $t$ (giây) được cho bởi công thức $$v(t) = \\left\\{\\begin{aligned}&t \\text{ khi   }\\ 0 \\le t \\le 2\\\\&2 \\text{ khi   } \\ 2 < t \\le 20\\\\&12-0{,}5t \\text{ khi   }\\ 20 < t \\le 24.\\end{aligned}\\right.$$ Tính vận tốc trung bình của thang máy.",
            "ans": "$1{,}75$",
            "explain": "Quãng đường chuyển động của thang máy là<br> $s=\\displaystyle \\int\\limits_{0}^{24} v(t)\\mathrm{\\,d}t $<br>$= \\displaystyle\\int\\limits_{0}^{2} v(t)\\mathrm{\\,d}t + \\displaystyle\\int\\limits_{2}^{20} v(t)\\mathrm{\\,d}t + \\displaystyle\\int\\limits_{20}^{24} v(t)\\mathrm{\\,d}t$<br>$ = \\displaystyle\\int\\limits_{0}^{2} t\\mathrm{\\,d}t +\\displaystyle\\int\\limits_{2}^{20} 2 \\mathrm{\\,d}t+\\displaystyle\\int\\limits_{20}^{24} (12-0{,}5t)\\mathrm{d}t = 42$.<br> Tốc độ trung bình của thang máy là $v_{tb}=\\dfrac{s}{t}=\\dfrac{42}{24}=1{,}75$ (m/s).",
            "id": "2D4V2-6",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Biết $\\displaystyle \\int\\limits_{0}^{\\tfrac{\\pi}{2}} \\left(x-1+\\sin 2x\\right) \\mathrm{d}x = \\pi \\left(\\dfrac{\\pi}{a} - \\dfrac{1}{b}\\right) + 1$, $(a$, $b\\in \\mathbb{Q})$. Tính $a+2b$.",
            "ans": "$12$",
            "explain": "Ta có $ \\displaystyle \\int\\limits_{0}^{\\tfrac{\\pi}{2}} (x-1+\\sin 2x) \\mathrm{d}x $<br>$= \\left(\\dfrac{1}{2}x^2-x-\\dfrac{1}{2}\\cos 2x\\right)\\bigg|_0^{\\tfrac{\\pi}{2}}$<br>$=\\dfrac{1}{2}\\cdot \\left(\\dfrac{\\pi}{2}\\right)^2 - \\dfrac{\\pi}{2} - \\dfrac{1}{2} \\cos \\left(2\\cdot \\dfrac{\\pi}{2}\\right) + \\dfrac{1}{2}$<br>$=\\dfrac{\\pi^2}{8}-\\dfrac{\\pi}{2}+1$<br>$=\\pi\\left(\\dfrac{\\pi}{8}-\\dfrac{1}{2}\\right)+1$<br> Suy ra $a=8$; $b=2$.<br> Vậy $a+2b=8+2\\cdot 2=12$.",
            "id": "2D4H2-3",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Cho $M$, $N$ là các số thực, xét hàm số $f(x)=M\\cdot \\sin \\pi x + N\\cdot \\cos \\pi x$ thỏa mãn $f(1)=3$ và $\\displaystyle \\int\\limits_{0}^{\\tfrac{1}{2}} f(x) \\mathrm{\\,d}x= -\\dfrac{1}{\\pi}$. Tính $f'\\left(\\dfrac{1}{4}\\right)$. (Kết quả làm tròn đến hàng phần mười).",
            "ans": "$11{,}1$",
            "explain": "Ta có $f(1)=3\\Leftrightarrow M\\cdot \\sin \\pi+N\\cdot \\cos \\pi=3\\Leftrightarrow N=-3$.<br> Mặt khác <br> $ \\displaystyle \\int\\limits_{0}^{\\tfrac{1}{2}} f(x) \\mathrm{\\,d}x = -\\dfrac{1}{\\pi} $<br>$\\Leftrightarrow \\int\\limits_{0}^{\\tfrac{1}{2}} \\left(M\\cdot \\sin \\pi x + N \\cdot \\cos \\pi x\\right) \\mathrm{d}x = -\\dfrac{1}{\\pi}$<br>$\\Leftrightarrow \\left(-\\dfrac{M}{\\pi}\\cos \\pi x - \\dfrac{3}{\\pi} \\sin \\pi x\\right)\\bigg|_0^{\\tfrac{1}{2}} = -\\dfrac{1}{\\pi}$<br>$\\Leftrightarrow -\\dfrac{3}{\\pi} + \\dfrac{M}{\\pi} = -\\dfrac{1}{\\pi}$<br>$\\Leftrightarrow M = 2. $ Ta được $f(x) = 2\\cdot \\sin \\pi x - 3\\cdot \\cos \\pi x$ nên $f'(x) = 2\\pi \\cos \\pi x + 3\\pi \\sin \\pi x$.<br> Vậy $f'\\left(\\dfrac{1}{4}\\right) = \\dfrac{5\\pi \\sqrt{2}}{2} \\approx 11{,}1$.",
            "id": "2D4V2-3",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Ba Tí muốn làm cửa sắt được thiết kế như hình bên dưới. Vòm cổng có hình dạng là một Parabol. Giá $1$ m$^2$ cửa sắt là $660\\,000$ đồng. Cửa sắt có giá (nghìn đồng) là bao nhiêu? \n<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767750156377_34.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 60%;\"> \n",
            "ans": "$6050$",
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767750166185_146.png\" style=\"display: block; margin-left: auto; margin-right: auto; width: 60%;\">\nTừ hình vẽ ta chia cửa rào sắt ra thành $2$ phần như trên.<br> Khi đó $S = S_1 + S_2 = S_1 + 5\\cdot 1{,}5 = S_1 + 7{,}5$.<br> Để tính $S_1$ ta vận dụng kiến thức tính diện tích hình phẳng của tích phân.<br> Gắn hệ trục $Oxy$ trong đó $O$ trung với trung điểm của $AB$, $OB\\subset Ox$, $OC \\subset Oy$.<br> Theo đề bài ta có đường cong có dạng hình Parabol. Giả sử $(P)\\colon y=ax^2+bx+c$.<br> Khi đó $\\left\\{\\begin{aligned}A\\left(-\\dfrac{5}{2}; 0\\right)\\in (P)\\\\B\\left(\\dfrac{5}{2}; 0\\right)\\in (P)\\\\C\\left(0;\\dfrac{1}{2}\\right)\\in (P)\\end{aligned}\\right. \\Leftrightarrow\\left\\{\\begin{aligned}\\dfrac{25}{4}a-\\dfrac{5}{2}b+c=0\\\\\\dfrac{25}{4}a+ \\dfrac{5}{2}b+c=0\\\\c=\\dfrac{1}{2}\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned}a= -\\dfrac{2}{25}\\\\b = 0\\\\c=\\dfrac{1}{2}.\\end{aligned}\\right.$<br> $\\Rightarrow (P) \\colon y = -\\dfrac{2}{25} x^2 + \\dfrac{1}{2}$.<br> Diện tích $S_2 = 2\\displaystyle\\int\\limits_{0}^{2{,}5} \\left(-\\dfrac{2}{25} x^2 + \\dfrac{1}{2}\\right) \\mathrm{d}x = \\dfrac{10}{6}\\ (\\mathrm{m}^2)$.<br> $\\Rightarrow S = \\dfrac{55}{6}$ (m$^2$).<br> Vậy giá tiền cửa sắt là $\\dfrac{55}{6} \\cdot 660\\,000= 6050$ (nghìn đồng).",
            "id": "2D4V2-6",
            "point": "0.5",
            "solImg": "",
            "img": ""
        },
        {
            "type": "short",
            "q": "Một ô tô đang chạy đều với vận tốc $15$ (m/s) thì phía trước xuất hiện chướng ngại vật nên người lái đạp phanh gấp. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với gia tốc $-a$ (m/s$^2$). Tìm giá trị của $a$ biết ô tô chuyển động thêm được $20$ (m) thì dừng hẳn. (Kết quả làm tròn đến hàng phần trăm).",
            "ans": "$5{,}63$",
            "explain": "Gọi $x(t)$ là hàm biểu diễn quãng đường, $v(t)$ là hàm vận tốc.<br> Ta có $\\displaystyle \\int\\limits_{0}^{t} (-a) \\mathrm{\\,d}x = -at \\Rightarrow v(t) = -at + 15$.<br> Mặt khác $x(t)-x(0)=\\displaystyle \\int\\limits_{0}^{t}v(t)\\mathrm{\\,d}x =\\displaystyle \\int\\limits_{0}^{t}(-at+15)\\mathrm{d}x=-\\dfrac{1}{2}at^2 + 15t$.<br> $\\Rightarrow x(t)=-\\dfrac{1}{2}at^2 + 15t$.<br> Ta có $\\left\\{\\begin{aligned}v(t)=0\\\\x(t)=20\\end{aligned}\\right.\\Leftrightarrow\\left\\{\\begin{aligned}-at+15=0\\\\-\\dfrac{1}{2}at^2 + 15t = 20\\end{aligned}\\right.\\Rightarrow -\\dfrac{15}{2}t+15t=20 \\Rightarrow t=\\dfrac{8}{3}$.<br> $\\Rightarrow a=\\dfrac{45}{8}\\approx 5{,}63$.",
            "id": "2D4V2-6",
            "point": "0.5"
        }
    ]
};