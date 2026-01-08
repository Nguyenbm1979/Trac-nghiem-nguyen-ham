window.EXAM_DATA = {
    "title": "Đề thi giữa học kỳ 2, trường THPT, Thực hành sư phạm, HCM, 2025",
    "subject": "Toan",
    "grade": "12",
    "time": 90,
    "password": "9b7c4b231be2223e21cc8a1816b8b9a0",
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
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho mặt phẳng $(P)\\colon 3x-z+2=0$. Véc-tơ nào dưới đây là một véc-tơ pháp tuyến của ($P$)?",
            "options": [
                "$\\overrightarrow{n}=(-1;0;-1)$",
                "$\\overrightarrow{n}=(3;-1;2)$",
                "$\\overrightarrow{n}=(3;0;-1)$",
                "$\\overrightarrow{n}=(3;-1;0)$"
            ],
            "ans": 2,
            "explain": "Một véc-tơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n}=(3;0;-1)$.",
            "id": "2H5N1-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, phương trình nào dưới đây là phương trình mặt phẳng đi qua điểm $M(1;2;-3)$ và có một véc-tơ pháp tuyến là $\\overrightarrow{n}=(1;-2;3)$?",
            "options": [
                "$x-2y+3z+12=0$",
                "$x-2y-3z+6=0$",
                "$x-2y-3z-6=0$",
                "$x-2y+3z-12=0$"
            ],
            "ans": 0,
            "explain": "Phương trình mặt phẳng đi qua điểm $M(1;2;-3)$ và có một véc-tơ pháp tuyến là $\\overrightarrow{n}=(1;-2;3)$ là \\[x-1-2(y-2)+3(z+3)=0\\Leftrightarrow x-2y+3z+12=0. \\]",
            "id": "2H5N1-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tính $\\displaystyle\\int\\mathrm{e}^x\\cdot\\mathrm{e}^{x+1}\\mathrm{\\,d}x$ ta được kết quả nào sau đây?",
            "options": [
                "$\\dfrac{1}{2}\\mathrm{e}^{2x+1}+C$",
                "$\\mathrm{e}^x\\cdot\\mathrm{e}^{x+1}+C$",
                "$2\\mathrm{e}^{2x+1}+C$",
                "$\\dfrac{\\mathrm{e}^{2x+2}}{2x+2}+C$"
            ],
            "ans": 0,
            "explain": "Ta có $\\displaystyle\\int\\mathrm{e}^x\\cdot\\mathrm{e}^{x+1}\\mathrm{\\,d}x=\\displaystyle\\int\\mathrm{e}^{2x}\\cdot\\mathrm{e}\\mathrm{\\,d}x=\\mathrm{e}\\displaystyle\\int\\left(\\mathrm{e}^2\\right)^x\\mathrm{\\,d}x=\\mathrm{e}\\cdot\\dfrac{\\mathrm{e}^{2x}}{\\ln\\mathrm{e}^2}+C=\\dfrac{1}{2}\\mathrm{e}^{2x+1}+C$.",
            "id": "2D4H1-4",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, điểm nàọ dưới đây thuộc đường thẳng $d\\colon \\dfrac{x+1}{-1}=\\dfrac{y-2}{3}=\\dfrac{z-1}{3}$?",
            "options": [
                "$P(-1;2;1)$",
                "$N(-1;3;2)$",
                "$Q(1;-2;-1)$",
                "$M(1;2;1)$"
            ],
            "ans": 0,
            "explain": "Thay điểm $P(-1;2;1)$ vào đường thẳng $d$, ta thấy thỏa mãn phương trình $\\dfrac{x+1}{-1}=\\dfrac{y-2}{3}=\\dfrac{z-1}{3}$.<br> Do đó $P\\in d$.",
            "id": "2H5N2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Biết rằng $\\displaystyle\\int\\limits_0^1\\dfrac{2\\mathrm{e}^{2x}+3}{\\mathrm{e}^x}\\mathrm{\\,d}x=\\dfrac{m\\mathrm{e}^2+n\\mathrm{e}+p}{\\mathrm{e}}$ (với $m,n,p\\in\\mathbb{Z}$). Khi đó $m+2n-p$ bằng",
            "options": [
                "$7$",
                "$1$",
                "$6$",
                "$2$"
            ],
            "ans": 0,
            "explain": "Ta có \\[\\displaystyle\\int\\limits_0^1\\dfrac{2\\mathrm{e}^{2x}+3}{\\mathrm{e}^x} \\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^1\\left(2\\mathrm{e}^x+3\\mathrm{e}^{-x}\\right)\\mathrm{\\,d}x=2\\mathrm{e}^x\\Big|_0^1-3\\mathrm{e}^{-x}\\Big|_0^1=2\\mathrm{e}-2-\\dfrac{3}{\\mathrm{e}}+3=\\dfrac{2\\mathrm{e}^2+\\mathrm{e}-3}{\\mathrm{e}}. \\] Suy ra $m=2$; $n=1$; $p=-3$. Do đó $m+2n-p=2+2+3=7$.",
            "id": "2D4H2-4",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(4;1;-2)$ và $B(5;9;3)$. Phương trình mặt phẳng trung trục của đoạn $AB$ là",
            "options": [
                "$2x+6y-5z+40=0$",
                "$x+8y-5z-41=0$",
                "$x-8y-5z-35=0$",
                "$x+8y+5z-47=0$"
            ],
            "ans": 3,
            "explain": "Gọi $(\\alpha)$ là mặt phẳng trung trực của đoạn thẳng $AB$. Khi đó phương trình mặt phẳng $(\\alpha)$ đi qua trung điểm $I\\left(\\dfrac{9}{2};5;\\dfrac{1}{2}\\right)$ và nhận véc-tơ $\\overrightarrow{n}=\\overrightarrow{AB}=(2;8;5)$ làm véc-tơ pháp tuyến. Do đó, phương trình mặt phẳng $(\\alpha)$ là \\[2\\left(x-\\dfrac{9}{2}\\right)+8(y-5)+5\\left(z-\\dfrac{1}{2}\\right)=0\\Leftrightarrow 2x+8y+5z-47=0. \\]",
            "id": "2H5H1-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)=2+\\cos x$. Khẳng định nào dưới đây đúng?",
            "options": [
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2x+\\sin x+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2x+\\cos x+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=2x-\\sin x+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\sin x+C$"
            ],
            "ans": 0,
            "explain": "Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(2+\\cos x\\right)\\mathrm{\\,d}x=2x+\\sin x+C$.",
            "id": "2D4N1-4",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho đường thẳng $\\Delta$ đi qua điểm $M(2;0;-1)$ và có véc-tơ chỉ phương $\\overrightarrow{a}=(4;-6;2)$. Phương trình tham số của $\\Delta$ là \\def\\dotEX{}",
            "options": [
                "$\\left\\{\\begin{aligned}x=-2+2t\\\\y=-3t\\\\z=1+t. \\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=2+2t\\\\y=-3t\\\\z=-1+t. \\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=4+2t\\\\y=-6-3t\\\\z=2+t. \\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=-2+4t\\\\y=-6t\\\\z=1+2t. \\end{aligned}\\right.$"
            ],
            "ans": 1,
            "explain": "Phương trình tham số của $\\Delta$ đi qua điểm $M(2;0;-1)$ và có véc-tơ chỉ phương $\\overrightarrow{a}=(4;-6;2)$ là \\[\\left\\{\\begin{aligned}x=2+4t\\\\y=-6t\\\\z=-1+2t\\end{aligned}\\right.\\text{ hay }\\left\\{\\begin{aligned}x=2+2t\\\\y=-3t\\\\z=-1+t.\\end{aligned}\\right. \\]",
            "id": "2H5N2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Biết $\\displaystyle\\int\\limits_{-\\tfrac{\\pi}{2}}^{\\tfrac{\\pi}{6}}|\\sin x|\\mathrm{\\,d}x=a-\\sqrt{b}$ ($a$, $b\\in\\mathbb{Q}$). Khi đó $a+4b$ bằng",
            "options": [
                "$8$",
                "$7$",
                "$5$",
                "$10$"
            ],
            "ans": 2,
            "explain": "Ta có \\[\\displaystyle\\int\\limits_{-\\tfrac{\\pi}{2}}^{\\tfrac{\\pi}{6}}|\\sin x|\\mathrm{\\,d}x=-\\displaystyle\\int\\limits_{-\\tfrac{\\pi}{2}}^0\\sin x\\mathrm{\\,d}x+\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}}\\sin x\\mathrm{\\,d}x=\\cos x\\Big|_{-\\tfrac{\\pi}{2}}^0-\\cos x\\Big|_0^{\\tfrac{\\pi}{6}}2-\\dfrac{\\sqrt{3}}{2}=2-\\sqrt{\\dfrac{3}{4}}. \\] Suy ra $a=2$; $b=\\dfrac{3}{4}$. Do đó $a+4b=2+3=5$.",
            "id": "2D4H2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho $\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=1$ và $\\displaystyle\\int\\limits_1^4f(t)\\mathrm{\\,d}t=-3$. Giá trị của $\\displaystyle\\int\\limits_2^4f(u)\\mathrm{\\,d}u$ là",
            "options": [
                "$2$",
                "$4$",
                "$-2$",
                "$-4$"
            ],
            "ans": 3,
            "explain": "Ta có $\\displaystyle\\int\\limits_1^4f(u)\\mathrm{\\,d}u=\\displaystyle\\int\\limits_1^2f(u)\\mathrm{\\,d}u+\\displaystyle\\int\\limits_2^4f(u)\\mathrm{\\,d}u\\Rightarrow\\displaystyle\\int\\limits_2^4f(u)\\mathrm{\\,d}u=\\displaystyle\\int\\limits_1^4f(u)\\mathrm{\\,d}u-\\displaystyle\\int\\limits_1^2f(u)\\mathrm{\\,d}u$.<br> Mà $\\displaystyle\\int\\limits_1^2f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_1^2f(u)\\mathrm{\\,d}u=1$ và $\\displaystyle\\int\\limits_1^4f(t)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_1^4f(u)\\mathrm{\\,d}u=-3$.<br> Suy ra $\\displaystyle\\int\\limits_2^4f(u)\\mathrm{\\,d}u=-3-1=-4$.",
            "id": "2D4N2-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)=\\left\\{\\begin{aligned}3x^2+2&&\\text{khi }x\\leq1\\\\8x-3&&\\text{khi }x>1\\end{aligned}\\right.$. Khi đó giá trị của $\\displaystyle\\int\\limits_{-2}^2f(x)\\mathrm{\\,d}x$ bằng",
            "options": [
                "$0$",
                "$-6$",
                "$24$",
                "$-12$"
            ],
            "ans": 2,
            "explain": "Ta có $\\lim\\limits_{x\\to1^-}f(x)=\\lim\\limits_{x\\to1^-}\\left(3x^2+2\\right)=5$; $\\lim\\limits_{x\\to1^+}f(x)=\\lim\\limits_{x\\to1^+}(8x-3)=5$ và $f(1)=5$.<br> Do đó hàm số $f(x)$ liên tục tại $x_0=1$. Hơn nữa hàm số $f(x)$ liên tục trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$.<br> Suy ra hàm số $f(x)$ liên tục trên $\\mathbb{R}$.<br> Khi đó \\[\\displaystyle\\int\\limits_{-2}^2f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-2}^1\\left(3x^2+2\\right)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_1^2(8x-3)\\mathrm{\\,d}x=\\left(x^3+2x\\right)\\Bigg|_{-2}^1+\\left(4x^2-3x\\right)\\Bigg|_1^2=24. \\]",
            "id": "2D4H2-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(1;2;-1)$, $B(3;0;1)$ và $C(2;2;-2)$. Đường thẳng đi qua $A$ và vuông góc với mặt phẳng $(ABC)$ có phương trình là",
            "options": [
                "$\\dfrac{x-1}{1}=\\dfrac{y-2}{2}=\\dfrac{z+1}{1}$",
                "$\\dfrac{x+1}{1}=\\dfrac{y+2}{2}=\\dfrac{z-1}{1}$",
                "$\\dfrac{x-1}{1}=\\dfrac{y-2}{-2}=\\dfrac{z+1}{3}$",
                "$\\dfrac{x-1}{1}=\\dfrac{y-2}{2}=\\dfrac{z-1}{-1}$"
            ],
            "ans": 0,
            "explain": "Ta có $\\overrightarrow{AB}=(2;-2;2)$ và $\\overrightarrow{AC}=(1;0;-1)$.<br> Một véc-tơ pháp tuyến của mặt phẳng $(ABC)$ là $\\overrightarrow{n}=\\left[\\overrightarrow{AB},\\overrightarrow{AC}\\right]=(2;4;2)$.<br> Vì đường thẳng đi qua $A$ và vuông góc với mặt phẳng $(ABC)$ có phương trình là \\[\\dfrac{x-1}{1}=\\dfrac{y-2}{2}=\\dfrac{z+1}{1}. \\]",
            "id": "2H5H2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho mặt phẳng $(P)\\colon x-2y+z-5=0$. Điểm nào dưới đây thuộc $(P)$?",
            "options": [
                "$Q(2;-1;5)$",
                "$N(-5;0;0)$",
                "$P(0;0;-5)$",
                "$M(1;1;6)$"
            ],
            "ans": 3,
            "explain": "Thay điểm $M(1;1;6)$ vào mặt phẳng $(P)\\colon x-2y+z-5=0$ thỏa mãn.<br> Do đó $M\\in(P)$.",
            "id": "2H5N1-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathcal{K}$. Trong các mệnh đề sau, mệnh đề nào là <b>sai</b>?",
            "options": [
                "$\\left(\\displaystyle\\int f(x)\\mathrm{\\,d}x\\right)'=f(x)$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=F(x)+C$",
                "$\\left(\\displaystyle\\int f(x)\\mathrm{\\,d}x\\right)'=F'(x)$",
                "$\\left(\\displaystyle\\int f(x)\\mathrm{\\,d}x\\right)'=f'(x)$"
            ],
            "ans": 3,
            "explain": "Mệnh đề sai là $\\left(\\displaystyle\\int f(x)\\mathrm{\\,d}x\\right)'=f'(x)$",
            "id": "2D4N1-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Giá trị của $\\displaystyle\\int\\limits_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}}\\cot^2x\\mathrm{\\,d}x$ bằng",
            "options": [
                "$\\dfrac{\\sqrt{3}}{3}-\\dfrac{\\pi}{6}$",
                "$\\dfrac{4\\sqrt{3}}{3}-\\dfrac{\\pi}{3}$",
                "$\\dfrac{2\\sqrt{3}}{3}-\\dfrac{\\pi}{6}$",
                "$\\dfrac{2\\sqrt{3}}{3}-\\dfrac{\\pi}{3}$"
            ],
            "ans": 2,
            "explain": "Ta có \\[\\displaystyle\\int\\limits_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}} \\cot ^2x \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}}\\left(\\cot^2x+1-1\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}}\\left(\\dfrac{1}{\\sin^2x}-1\\right)\\mathrm{\\,d}x=-\\cot x\\Bigg|_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}}-x\\Bigg|_{\\tfrac{\\pi}{6}}^{\\tfrac{\\pi}{3}}=\\dfrac{2\\sqrt{3}}{3}-\\dfrac{\\pi}{6}. \\]",
            "id": "2D4N2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong các khẳng định sau, khẳng định nào <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int x^\\alpha\\mathrm{\\,d}x=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C$",
                "$\\displaystyle\\int\\dfrac{1}{x}\\mathrm{\\,d}x=\\ln|x|+C$",
                "$\\displaystyle\\int\\mathrm{\\,d}x=x+C$",
                "$\\displaystyle\\int0\\mathrm{\\,d}x=C$"
            ],
            "ans": 0,
            "explain": "Khẳng định sai là $\\displaystyle\\int x^\\alpha\\mathrm{\\,d}x=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C$ do thiếu điều kiện $\\alpha\\ne-1$.",
            "id": "2D4N1-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa đồ $Oxyz$, cho đường thẳng $d\\colon \\dfrac{x-1}{5}=\\dfrac{y-2}{-8}=\\dfrac{z+3}{7}$. Véc-tơ nào dưới đây là môt véc-tơ chỉ phương của $d$?",
            "options": [
                "$\\overrightarrow{u_3}=(5;-8;7)$",
                "$\\overrightarrow{u}_4=(7;-8;5)$",
                "$\\overrightarrow{u}_1=(1;2;-3)$",
                "$\\overrightarrow{u}_2=(-1;-2;3)$"
            ],
            "ans": 0,
            "explain": "Một véc-tơ chỉ phương của $d$ là $\\overrightarrow{u_3}=(5;-8;7)$.",
            "id": "2H5N2-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, gọi $H$ là hình chiếu vuông góc của điểm $A(2;-1;-1)$ trên măt phẳng $(\\alpha)\\colon 16x-12y-15z-4=0$. Tính độ dài đoạn thẳng $AH$.",
            "options": [
                "$\\dfrac{11}{5}$",
                "$55$",
                "$\\dfrac{11}{25}$",
                "$\\dfrac{22}{5}$"
            ],
            "ans": 0,
            "explain": "Ta có $AH=\\mathrm{d}\\left(A,(\\alpha)\\right)=\\dfrac{\\left|16\\cdot2+12\\cdot1+15\\cdot1-4\\right|}{\\sqrt{16^2+(-12)^2+(-15)^2}}=\\dfrac{11}{5}$.",
            "id": "2H5N2-6",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho điểm $A(1;-2;3)$ và hai mặt phẳng $(P)\\colon x+y+z+1=0$, $(Q)\\colon x-y+z-2=0$. Phương trình nào dưới đây là phương trình đường thẳng đi qua $A$, đồng thời song song với $(P)$ và $(Q)$? \\def\\dotEX{}",
            "options": [
                "$\\left\\{\\begin{aligned}x=1\\\\y=-2\\\\z=3-2t. \\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=-1+t\\\\y=2\\\\z=-3-t. \\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=1+2t\\\\y=-2\\\\z=3+2t. \\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=1+t\\\\y=-2\\\\z=3-t. \\end{aligned}\\right.$"
            ],
            "ans": 3,
            "explain": "Một véc-tơ pháp tuyến của $(P)$ và $(Q)$ lần lượt là $\\overrightarrow{n}_1=(1;1;1)$ và $\\overrightarrow{n}_2=(1;-1;1)$.<br> Gọi $\\Delta$ là đường thẳng đi qua $A$, đồng thời song song với $(P)$ và $(Q)$ nên một véc-tơ chỉ phương của $\\Delta$ là \\[\\overrightarrow{u}_\\Delta=\\left[\\overrightarrow{n}_1, \\overrightarrow{n}_2\\right]=(2;0;-2). \\] Do đó phương trình $\\Delta$ là $\\left\\{\\begin{aligned}x=1+t\\\\y=-2\\\\z=3-t.\\end{aligned}\\right.$",
            "id": "2H5H2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, mặt phẳng $(\\alpha)$ cắt ba trục tọa độ tại ba điểm $M(8;0;0)$, $N(0;-2;0)$ và $P(0;0;4)$. Phương trình của mặt phẳng ($\\alpha$) là",
            "options": [
                "$(\\alpha)\\colon x-4y+2z=0$",
                "$(\\alpha)\\colon \\dfrac{x}{8}+\\dfrac{y}{-2}+\\dfrac{z}{4}=0$",
                "$(\\alpha)\\colon \\dfrac{x}{4}+\\dfrac{y}{-1}+\\dfrac{z}{2}=1$",
                "$(\\alpha)\\colon x-4y+2z-8=0$"
            ],
            "ans": 3,
            "explain": "Phương trình mặt phẳng $(\\alpha)$ đi qua $3$ điểm $M(8;0;0)$, $N(0;-2;0)$ và $P(0;0;4)$ là \\[\\dfrac{x}{8}+\\dfrac{y}{-2}+\\dfrac{z}{4}=1\\Leftrightarrow x-4y+2z-8=0. \\]",
            "id": "2H5H1-3",
            "point": "0.25"
        },
        {
            "type": "tf",
            "q": "Cho hình chóp $S.ABCD$ có đáy là hình thang vuông tại $A$ và $B$, thỏa mãn điều kiện, $AB=BC=1$, $AD=2$, $SA$ vuông góc với mặt đáy $(ABCD)$, $SA=1$. Gọi $M$, $N$ lần lượt là trung điểm của $SB$, $CD$. Chọn hệ trục tọa độ như hình vẽ bên\n<div style=\"text-align: center;\">\n  <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767861395472_768.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">\n</div>",
            "items": [
                {
                    "sub": "$C(1;1;0)$, $D(0;2;0)$, $S(0;0;1)$",
                    "ans": "T"
                },
                {
                    "sub": "Mặt phẳng $(SAC)$ nhận véc-tơ $\\overrightarrow{n}=(1;-1;0)$ là một véc-tơ pháp tuyến",
                    "ans": "F"
                },
                {
                    "sub": "Đường cao của hình chóp $B.SAC$ có độ dài bằng $\\sqrt{2}$",
                    "ans": "F"
                },
                {
                    "sub": "Đường thẳng $MN$ và đường thẳng $\\Delta\\colon \\left\\{\\begin{aligned}x=2+t\\\\y=4+t\\\\z=1-t \\end{aligned}\\right.$ là hai đường thẳng chéo nhau",
                    "ans": "T"
                }
            ],
            "explain": "Dựa vào hệ trục tọa độ suy ra các đỉnh có tọa độ như sau $A(0;0;0)$,$D (0;2;0)$, $C(1;1;0)$, $B\\ (1;0;0)$, $S\\ (0;0;1)$, $M\\left(\\dfrac{1}{2};0;\\dfrac{1}{2}\\right)$, $N\\left(\\dfrac{1}{2};\\dfrac{3}{2};0\\right)$. <br><b>-</b> Ta có $C(1;1;0)$, $D(0;2;0)$, $S(0;0;1)$. <br><b>-</b> Ta có $\\overrightarrow{SA}=(0;0;-1)$, $\\overrightarrow{SC}=(1;1;-1)$.<br> Mặt phẳng $(SAC)$ có véc-tơ pháp tuyến là \\[\\overrightarrow{n}=\\left[\\overrightarrow{SA}, \\overrightarrow{SC}\\right]=(-1;-1;0). \\] <br><b>-</b> Phương trình mặt phẳng $(SAC)$ là $x+y=0$.<br> Đường cao của hình chóp $B.SAC$ là \\[\\mathrm{d}\\left(B, (SAC)\\right)=\\dfrac{\\left|1\\right|}{\\sqrt{2}}=\\dfrac{1}{\\sqrt{2}}=\\dfrac{\\sqrt{2}}{2}. \\] <br><b>-</b> Một véc-tơ chỉ phương của đường thẳng $MN$ là $\\overrightarrow{u}_{MN}=\\left(0;\\dfrac{3}{2};-\\dfrac{1}{2}\\right)$.<br> Một véc-tơ chỉ phương của đường thẳng $\\Delta$ là $\\overrightarrow{u}_\\Delta=(1;1;1)$.<br> Ta có hai véc-tơ $\\overrightarrow{u}_{MN}$ và $\\overrightarrow{u}_\\Delta$ không cùng phương. Do đó $MN$ cắt $\\Delta$ hoặc chéo nhau.<br> Phương trình $MN$ là $\\left\\{\\begin{aligned}x=\\dfrac{1}{2}\\\\y=3t'\\\\z=\\dfrac{1}{2}-t'.\\end{aligned}\\right.$<br> Xét hệ phương trình $\\left\\{\\begin{aligned}x=\\dfrac{1}{2}\\\\y=3t'\\\\z=\\dfrac{1}{2}-t'\\\\x=2+t\\\\y=4+t\\\\z=1-t\\end{aligned}\\right.\\Leftrightarrow t,t'\\in\\varnothing$.<br> Do đó $MN$ và $\\Delta$ chéo nhau.",
            "id": "2H2N1-2",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Một vật chuyển động trong $4$ giây với vận tốc $v=v(t)$ m/s phụ thuộc vào thời gian $t$ s có đồ thị vận tốc như hình vẽ bên. Trong khoảng thời gian $3$ giây kể từ khi bắt đầu chuyển động, đồ thị đó là một phần của đường parabol đi qua $O(0;0)$, có đỉnh $I(2;9)$ với trục đối xứng song song với trục tung, khoảng thời gian còn lại đồ thị là một đoạn thẳng song song với trục hoành.\n<div style=\"text-align: center;\">\n  <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767861550143_784.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">\n</div>",
            "items": [
                {
                    "sub": "Giá trị của hàm số $v(t)$ khi $t=3$ là $\\dfrac{27}{4}$",
                    "ans": "T"
                },
                {
                    "sub": "Gia tốc của vật tại thời điểm $t=2$ là $9$ m/s$^2$",
                    "ans": "F"
                },
                {
                    "sub": "Quãng đường vật di chuyển được từ thời điểm $t=3$ đến thời điểm $t=4$ là $\\dfrac{27}{4}$ m",
                    "ans": "T"
                },
                {
                    "sub": "Quãng đường mà vật di chuyển được trong $4$ giây này là $22$ m",
                    "ans": "F"
                }
            ],
            "explain": "Xét đồ thị có phần parabol. Đặt $(P)\\colon v(t)=at^2+bt+c$ ($a\\ne0$) với $t\\in[0;3]$.<br> Vì $(P)$ đi qua các điểm $O(0;0)$, đỉnh $I(2;9)$ nên ta có hệ phương trình \\[\\left\\{\\begin{aligned}c=0\\\\-\\dfrac{b}{2a}=2\\\\4a+2b+c=9\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}a=-\\dfrac{9}{4}\\\\b=9.\\end{aligned}\\right. \\] Vậy $v(t)=-\\dfrac{9}{4}t^2+9t$ với $t\\in[0;3]$.<br> <br><b>-</b> Ta có $v(3)=\\dfrac{27}{4}$. <br><b>-</b> Ta có $v'(t)=-\\dfrac{9}{2}t^2+9$.<br> Gia tốc của vật tại thời điểm $t=2$ là $a(2)=-\\dfrac{9}{2}\\cdot2^2+9=-9$ m/s$^2$. <br><b>-</b> Tại thời điểm $t=3$ s suy ra $v(3)=-\\dfrac{9}{4}\\cdot3^2+9\\cdot3=\\dfrac{27}{4}$ m/s.<br> Quãng đường vật di chuyển được từ thời điểm $t=3$ đến $t=4$ là $\\dfrac{27}{4}\\cdot(4-3)=\\dfrac{27}{4}$ m. <br><b>-</b> Quãng đường mà vật di chuyển được trong $4$ giây là \\[S=\\displaystyle\\int\\limits_0^3\\left(-\\dfrac{9}{4}t^2+9t\\right)\\mathrm{\\,d}t+\\dfrac{27}{4}=27\\text{ m }. \\]",
            "id": "2D4V2-6",
            "point": "1"
        },
        {
            "type": "short",
            "q": "Hàm số $y=f(x)$ có đồ thị đi qua điểm $(-1;4)$ và có đạo hàm $f^{\\prime}(x)=3-2x$ với mọi $x\\in\\mathbb{R}$. Tính giá trị của $f(5)$.",
            "ans": "$-102$",
            "explain": "Ta có $f'(x)=3-2x\\Rightarrow f(x)=\\displaystyle\\int\\left(3-2x\\right)\\mathrm{\\,d}x=3x-x^2+C$.<br> Vì hàm số $y=f(x)$ có đồ thị đi qua điểm $(-1;4)\\Rightarrow4=-3-1+C\\Leftrightarrow C=8$.<br> Suy ra $f(x)=3x-x^2+8$. Do đó $f(5)=15-125+8=-102$.",
            "id": "2D4H2-2",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Trong không gian với hệ tọa độ $Oxyz$, cho điểm $A(-2;-1;-2)$ và đường thẳng $d\\colon \\dfrac{x-2}{2}=\\dfrac{y}{3}=\\dfrac{z-1}{2}$. Gọi $\\Delta$ đường thẳng đi qua $A$, vuông góc và cắt $d$. Biết rằng $M(a;b;-4)$ là một điểm thuộc $\\Delta$, hãy tính tổng $P=a+b$.",
            "ans": "$-3$",
            "explain": "Phương trình tham số của đường thẳng $d$ là $\\left\\{\\begin{aligned}x=2+2t\\\\y=3t\\\\z=1+2t.\\end{aligned}\\right.$<br> Gọi $M$ là giao điểm của $\\Delta$ và $d$. Vì $M\\in d$ suy ra $M(2+2t;3t;1+2t)$.<br> Khi đó $\\overrightarrow{AM}=(4+2t;3t+1;3+2t)$. Một véc-tơ chỉ phương của $d$ là $\\overrightarrow{u}_d=(2;3;2)$.<br> Vì $\\Delta$ cắt và vuông góc với $d$ nên \\[\\overrightarrow{AM}\\cdot \\overrightarrow{u}_d=0\\Rightarrow 2(4+2t)+3(3t+1)+2(3+2t)=0\\Leftrightarrow t=-1. \\] Do đó một véc-tơ chỉ phương của $\\Delta$ là $u_\\Delta=(2;-2;1)$.<br> Phương trình $\\Delta$ đi qua điểm $A(-2;-1;-2)$ nhận $\\overrightarrow{u}_\\Delta$ làm véc-tơ chỉ phương là $\\left\\{\\begin{aligned}x=-2+2t\\\\y=-1-2t\\\\z=-2+t.\\end{aligned}\\right.$<br> Vì điểm $M(a;b;-4)\\in\\Delta\\Rightarrow\\left\\{\\begin{aligned}a=-2+2t\\\\b=-1-2t\\\\-4=-2+t\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}t=-2\\\\a=-6\\\\b=3.\\end{aligned}\\right.$<br> Do đó $P=a+b=-6+3=-3$.",
            "id": "2H5V2-3",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Trong không gian với hệ trục tọa độ $Oxyz$, cho hai điểm $A(3;-2;5)$, $B(1;-1;3)$ và mặt phẳng $(P)\\colon x-3y+2z+4=0$. Phương trình của mặt phẳng đi qua hai điểm $A,B$, đồng thời vuông góc $(P)$ là $4x-ay-bz+c=0$. Giá trị của biểu thức $a+2b+3c$ bằng bao nhiêu?",
            "ans": "$39$",
            "explain": "Một véc-tơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n}=(1;-3;2)$.<br> Một véc-tơ chỉ phương của đường thẳng $AB$ là $\\overrightarrow{AB}=(-2;1;-2)$.<br> Vì mặt phẳng cần tìm đi qua hai điểm $A$ và $B$, đồng thời vuông góc với $(P)$ nên một véc-tơ pháp tuyến của mặt phẳng cần tìm là $\\overrightarrow{n}_1=\\left[\\overrightarrow{n},\\overrightarrow{u}\\right]=(4;-2;-5)$.<br> Phương trình mặt phẳng cần tìm là \\[4(x-3)-2(y+2)-5(z-5)=0\\Leftrightarrow 4x-2y-5z+9=0. \\] Suy ra $a=2$, $b=5$, $c=9$. Do đó $a+2b+3c=2+2\\cdot5+3\\cdot9=39$.",
            "id": "2H5H1-3",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Một chất điểm $A$ xuất phát từ $O$, chuyển động thẳng với vận tốc biến thiên theo thời gian bởi quy luật $v(t)=\\dfrac{1}{150}t^2+\\dfrac{59}{75}t$ m/s, trong đó $t$ (s) là khoảng thời gian tính từ lúc $A$ bắt đầu chuyển động. Từ trạng thái nghỉ, một chất điểm $B$ cũng xuất phát từ $O$, chuyển động thẳng cùng hướng với $A$ nhưng chậm hơn $5$ giây so với $A$ và có gia tốc bằng $a$ m/s$^2$ ($a$ là hằng số). Sau khi $B$ xuất phát được $10$ giây thì đuổi kịp $A$. Vận tốc của $B$ tại thời điểm đuổi kịp $A$ bằng bao nhiêu m/s?",
            "ans": "$16$",
            "explain": "Tính từ lúc chất điểm $A$ bắt đầu chuyển động cho đến khi bị chất điểm $B$ bắt kịp thì $A$ đi được $15$ giây, $B$ đi được $12$ giây.<br> Biểu thức vận tốc của chất điểm $B$ có dạng $v_B(t)=\\displaystyle\\int a\\mathrm{\\,d}t=at+C$ mà $v_B(0)=0$ nên $v_B(t)=at$.<br> Từ lúc chất điểm $A$ bắt đầu chuyển động cho đến khi bị chất điểm $B$ bắt kịp thì quãng đường hai chất điểm đi được là bằng nhau. Do đó \\[\\displaystyle\\int\\limits_0^{15}\\left(\\dfrac{1}{150} t^2+\\dfrac{59}{75} t\\right)\\mathrm{\\,d}t=\\displaystyle\\int\\limits_0^{12}at\\mathrm{\\,d}t \\Leftrightarrow 96=72a \\Leftrightarrow a=\\dfrac{4}{3}. \\] Do đó vận tốc của $B$ tại thời điểm đuổi kịp $A$ bằng $v_B(12)=\\dfrac{4}{3}\\cdot12=16$ m/s.",
            "id": "2D4V2-6",
            "point": "0.5"
        }
    ]
};