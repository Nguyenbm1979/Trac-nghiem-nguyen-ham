window.EXAM_DATA = {
    "title": "Đề Ôn Tập Nguyên Hàm, Số 2, Năm 2025-2026",
    "subject": "Toan",
    "grade": "12",
    "time": 60,
    "password": "2afba7e5bf6e676c5798e444f8b1b261",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": true,
    "music": true,
    "allowPrint": false,
    "minTime": 0,
    "start": "2026-01-08T07:08",
    "end": "2026-01-10T07:40",
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
            "q": "Họ nguyên hàm của hàm số $f(x)=3x^2+1$ là",
            "options": [
                "$x^3+C$",
                "$\\dfrac{x^3}{3}+x+C$",
                "$6x+C$",
                "$x^3+x+C$"
            ],
            "ans": 3,
            "explain": "$\\displaystyle\\int(3x^2+1)\\mathrm{d}x=x^3+x+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Hàm số nào sau đây là một nguyên hàm của hàm số $y=12x^5$?",
            "options": [
                "$y=12x^4$",
                "$y=60x^4$",
                "$y=12x^6+5$",
                "$y=2x^6+3$"
            ],
            "ans": 3,
            "explain": "Ta có $\\displaystyle\\int{12x^5\\mathrm{d}\\,x}=12\\cdot\\dfrac{x^6}{6}+C=2x^6+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tìm họ nguyên hàm $F(x)$ của hàm số $f(x)=\\dfrac{1}{x}$.",
            "options": [
                "$F(x)=\\ln \\left| x \\right|+C$",
                "$F(x)=\\ln x+C$",
                "$F(x)=\\ln \\left| x \\right|$",
                "$F(x)=-\\dfrac{1}{x^2}+C$"
            ],
            "ans": 0,
            "explain": "Áp dụng công thức nguyên hàm của hàm số ta có $\\displaystyle\\int{\\frac{1}{x}\\mathrm{d}\\,x}=\\ln \\left| x \\right|+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Mệnh đề nào <b>sai</b> trong các mệnh đề sau?",
            "options": [
                "$\\displaystyle\\int\\cos x\\,\\mathrm{d}x=\\sin x+C$",
                "$\\displaystyle\\int \\sin x \\, \\mathrm{d}x=\\cos x+C$",
                "$\\displaystyle\\int{\\dfrac{1}{\\cos^2x}\\, \\mathrm{d}x=\\tan x+C}$",
                "$\\displaystyle\\int{\\dfrac{1}{\\sin^2x}\\, \\mathrm{d}x=-\\cot x+C}$"
            ],
            "ans": 1,
            "explain": "Từ bảng nguyên hàm của các hàm cơ bản suy ra $\\displaystyle\\int \\sin x \\, \\mathrm{d}x=\\cos x+C$ sai",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Tìm nguyên hàm của hàm số $f(x)=7^x$.",
            "options": [
                "$\\displaystyle\\int 7^x\\mathrm{d}\\,x=\\dfrac{7^{x+1}}{x+1}+C$",
                "$\\displaystyle\\int 7^x\\mathrm{d}\\,x=7^x\\ln 7+C$",
                "$\\displaystyle\\int 7^x \\mathrm{d}\\,x=\\dfrac{7^x}{\\ln 7}+C$",
                "$\\displaystyle\\int 7^x\\mathrm{d}\\,x=7^{x+1}+C$"
            ],
            "ans": 2,
            "explain": "Áp dụng công thức nguyên $\\displaystyle\\int a^x\\mathrm{d}\\,x=\\dfrac{a^x}{\\ln a}+C \\Rightarrow \\displaystyle  \\int 7^x\\mathrm{d}\\,x=\\dfrac{7^x}{\\ln 7}+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Nguyên hàm của hàm số $F(x)=2^x+x$ là",
            "options": [
                "$2^x+\\dfrac{x^2}{2}+C$",
                "$2^x+x^2+C$",
                "$\\dfrac{2^x}{\\ln 2}+x^2+C$",
                "$\\dfrac{2^x}{\\ln 2}+\\dfrac{x^2}{2}+C$"
            ],
            "ans": 3,
            "explain": "Ta có $\\displaystyle\\int (2^x+x)\\,\\mathrm{d}\\,x=\\dfrac{2^x}{\\ln 2}+\\dfrac{1}{2} x^2+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "$\\displaystyle\\int (3^x+4^x)\\mathrm{d}\\,x$ bằng",
            "options": [
                "$\\dfrac{3^x}{\\ln 3}+\\dfrac{4^x}{\\ln 4}+C$",
                "$\\dfrac{3^x}{\\ln 4}+\\dfrac{4^x}{\\ln 3}+C$",
                "$\\dfrac{4^x}{\\ln 3}-\\dfrac{3^x}{\\ln 4}+C$",
                "$\\dfrac{3^x}{\\ln 3}-\\dfrac{4^x}{\\ln 4}+C$"
            ],
            "ans": 0,
            "explain": "Áp dụng công thức $\\displaystyle\\int a^x\\,\\mathrm{d}x=\\frac{a^x}{\\ln a}+C$.<br>Ta có $\\displaystyle\\int(3^x+4^x)\\mathrm{d}\\,x =\\int 3^x\\mathrm{d}\\,x+\\int 4^x\\mathrm{d}\\,x=\\dfrac{3^x}{\\ln 3}+\\dfrac{4^x}{\\ln 4}+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Họ nguyên hàm của hàm số $f(x)=\\mathrm{e}^x+2x$ là",
            "options": [
                "$\\dfrac{1}{x+1}\\mathrm{e}^x+x^2+C$",
                "$\\mathrm{e}^x+2x^2+C$",
                "$\\mathrm{e}^x+x^2+C$",
                "$\\mathrm{e}^x+\\dfrac{1}{2} x^2+C$"
            ],
            "ans": 2,
            "explain": "Ta có $\\displaystyle\\int(\\mathrm{e}^x+2x)\\mathrm{d}\\,x=\\int\\mathrm{e}^x\\mathrm{d}\\,x+\\int 2x\\mathrm{d}\\,x=\\mathrm{e}^x+x^2+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong các mệnh đề sau, mệnh đề nào <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int\\sin x\\mathrm{d}x=\\cos x+C$",
                "$\\displaystyle\\int 2x\\mathrm{d}x=x^2+C$",
                "$\\displaystyle\\int \\mathrm{e}^x\\mathrm{d}x=\\mathrm{e}^x+C$",
                "$\\displaystyle\\int \\dfrac{1}{x}\\mathrm{d}x=\\ln \\left| x \\right|+C$"
            ],
            "ans": 0,
            "explain": "$\\displaystyle\\int{\\sin x\\mathrm{d}x}=-\\cos x+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Khẳng định nào sau đây là <b>sai</b>?",
            "options": [
                "Mọi hàm số $f(x)$ liên tục trên đoạn $[a;b]$ đều có nguyên hàm trên đoạn $[a;b]$",
                "$\\displaystyle\\int x^\\alpha \\mathrm{d}x=\\dfrac{x^{\\alpha +1}}{\\alpha +1}+C$ ($C$ là hằng số, $\\alpha $ là hằng số)",
                "$\\displaystyle\\int \\mathrm{e}^x\\mathrm{d}x=\\mathrm{e}^x+C$ ($C$ là hằng số)",
                "$\\displaystyle\\int{\\dfrac{1}{x}\\mathrm{d}x=\\ln \\left| x \\right|+C}$ ($C$ là hằng số) với $x\\ne 0$"
            ],
            "ans": 1,
            "explain": "$\\displaystyle\\int x^{\\alpha} \\mathrm{d}\\,x=\\dfrac{x^{\\alpha +1}}{\\alpha +1}+C$ ($C$ là hằng số, $\\alpha $ là hằng số và $\\alpha \\ne -1$).",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Hàm số nào dưới đây là một nguyên hàm của hàm số $f(x)=\\sqrt{x}-1$ trên $(0;+\\infty)$?",
            "options": [
                "$F(x)=\\dfrac{1}{2\\sqrt{x}}$",
                "$F(x)=\\dfrac{1}{2\\sqrt{x}}-x$",
                "$F(x)=\\dfrac{2}{3}\\sqrt[3]{x^2}-x+1$",
                "$F(x)=\\dfrac{2}{3}\\sqrt{x^3}-x+2$"
            ],
            "ans": 3,
            "explain": "Ta có : $\\displaystyle\\int (\\sqrt{x}-1)\\mathrm{d}x=\\frac{2}{3}\\sqrt{x^3}-x+C$.",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Một vật chuyển động với gia tốc $a(t)=\\dfrac{3}{t+1}$ (m/s$^2$), trong đó $t$ là khoảng thời gian tính từ thời điểm ban đầu. Vận tốc ban đầu của vật là $6$(m/s). Hỏi vận tốc của vật tại giây thứ $8$ là bao nhiêu?",
            "options": [
                "$12{,}6$ (m/s)",
                "$12{,}2$ (m/s)",
                "$6{,}6$ (m/s)",
                "$12{,}4$ (m/s)"
            ],
            "ans": 0,
            "explain": "Vận tốc của vật tại thời điểm t được tính theo công thức<br>$$v(t)=\\int a(t)\\mathrm{d}t=\\displaystyle \\int \\dfrac{3}{t+1}\\mathrm{d} t=3\\ln (t+1)+C.$$<br>Do vận tốc ban đầu của vật bằng $6$ (m/s) nên ta có:<br>$$v(0)=3\\ln (0+1)+C=6\\Rightarrow C=6\\Rightarrow v(t)=3\\ln (t+1)+6.$$<br>Vận tốc chuyển động của vật tại giây thứ $8$ là:<br>$$v(8)=3\\ln (8+1)+6=3\\ln 9+6\\approx 12{,}6 \\text{ (m/s)}.$$",
            "point": "0.25"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $f(x)=\\sin \\dfrac{x}{2}$ và hàm số $g(x)=\\cos \\dfrac{x}{2}$ .",
            "items": [
                {
                    "sub": "$F(x)=2\\cos \\dfrac{x}{2}$  là một nguyên hàm của hàm số $f(x)$",
                    "ans": "F"
                },
                {
                    "sub": "$G(x)=2\\sin \\dfrac{x}{2}+\\dfrac{1}{2}$  là một nguyên hàm của hàm số $g(x)$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\left[ f(x)-g(x) \\right]^2 \\mathrm{d}x=x+\\cos x+C$ ($C$ là một hằng số)",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\dfrac{1}{[2f(x)\\cdot g(x)]^2}\\mathrm{d}x=-\\cot x+C$ ($C$ là một hằng số)",
                    "ans": "T"
                }
            ],
            "explain": "<ul>\n<li>Vì $F'(x)=-\\sin \\dfrac{x}{2},\\forall x\\in R$ nên  $F(x)=2\\cos \\dfrac{x}{2}$  không là một nguyên hàm của hàm số $F(x)$ trên $\\mathbb{R}$.  Sai</li>\n<li>Vì $G'(x)=\\cos \\dfrac{x}{2}, \\forall x\\in \\mathbb{R}$ nên  $G(x)=2\\sin \\dfrac{x}{2}+\\dfrac{1}{2}$ là một nguyên hàm của hàm số $g(x)$ trên $R$.  Đúng</li>\n<li>$\\displaystyle\\int [f(x)-g(x)]^2\\mathrm{d}x=\\int \\left( \\sin\\dfrac{x}{2}-\\cos\\frac{x}{2} \\right)^2\\mathrm{d}x$<br>\n$=\\int \\left(\\sin ^2\\frac{x}{2}-2\\sin\\frac{x}{2}\\cos\\frac{x}{2}+\\cos^2\\frac{x}{2}\\right)\\mathrm{d}x$<br>\n$=\\int( 1-\\sin x )\\mathrm{d}x=x+\\cos x+C$.  Đúng</li>\n<li>$\\displaystyle\\int \\frac{1}{[2f(x)\\cdot g(x)]^2}\\mathrm{d}x=\\int \\frac{1}{(2\\sin\\frac{x}{2}\\cos\\frac{x}{2})^2}\\mathrm{d}x$<br>\n$=\\int \\frac{1}{\\sin^2 x}\\mathrm{d}x=-\\cot x+C$.  Đúng</li>\n</ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $f(x)=\\dfrac{1}{x}$ và $F(x)=\\ln x+C_1$, $G(x)=\\ln(-x)+C_2$ ($C_1,C_2$ là các hằng số).",
            "items": [
                {
                    "sub": "Trên $(0;+\\infty)$, một nguyên hàm của hàm số $f(x)$ là $H(x)=\\ln (x)+e$",
                    "ans": "T"
                },
                {
                    "sub": "Trên $(-\\infty ;0)$, nguyên hàm của hàm số $f(x)$ là $G(x)$",
                    "ans": "T"
                },
                {
                    "sub": "Trên $(0;+\\infty)$, nguyên hàm của hàm số $f(x)$ là $F(x)$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\left[ f(x)+f^2(x) \\right]\\mathrm{d}x=\\ln(3\\left| x \\right|)-\\dfrac{1}{x}+C$ ($C$ là một hằng số)",
                    "ans": "T"
                }
            ],
            "explain": "<ul><li>Vì $H'(x)=\\dfrac{1}{x}=F(x),\\forall x\\in (0;+\\infty)$ nên $H(x)$ là một nguyên hàm của hàm số $F(x)$ trên ($0,+\\infty $).  Đúng</li><li>$\\displaystyle\\int f(x)\\mathrm{d}x=\\int \\frac{1}{x}\\mathrm{d}x=\\ln \\left( \\left| x \\right| \\right)+C_2=\\ln(-x)+C_2,\\forall x\\in (-\\infty ;0)$.  Đúng</li><li>$\\displaystyle\\int f(x)\\mathrm{d}x=\\int \\frac{1}{x}\\mathrm{d}x=\\ln \\left( \\left| x \\right| \\right)+C_1=\\ln x+C_1,\\forall x\\in( 0;+\\infty)$.  Đúng</li>\n<li>$\\displaystyle\\int \\left[ f(x)+f^2(x) \\right]\\mathrm{d}x=\\int \\left( \\frac{1}{x}+\\frac{1}{x^2} \\right)\\mathrm{d}x$<br>\n$=\\ln(\\left| x \\right|)-\\frac{1}{x}+C_3=\\ln \\left( \\left| x \\right| \\right)-\\frac{1}{x}+\\ln 3+C$<br>\n$=\\ln( 3\\left| x \\right|)-\\frac{1}{x}+C$.  Đúng </li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $f(x)=\\cos x$ và hàm số $g(x)=\\sin x$.",
            "items": [
                {
                    "sub": "$F(x)=\\sin x+\\mathrm{e}$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$",
                    "ans": "T"
                },
                {
                    "sub": "$G(x)={\\mathrm{e}^{-\\cos x}}+\\ln 3$ là một nguyên hàm của hàm số $\\mathrm{e}^{g(x)}$ trên $\\mathbb{R}$",
                    "ans": "F"
                },
                {
                    "sub": "$\\displaystyle\\int \\left[ 5f(x)+6g(x) \\right]\\mathrm{d}x=5\\sin x-6\\cos x+C$, ($C$ là một hằng số)",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\left[ 2+\\left( \\frac{g(x)}{F(x)} \\right)^2 \\right]\\mathrm{d}x=x+\\tan x+C$, ($C$ là một hằng số)",
                    "ans": "T"
                }
            ],
            "explain": "<ul><li>Vì $F'(x)=\\cos x=f(x),\\forall x\\in \\mathbb{R}$ nên $(x)$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$.  Đúng</li><li>Vì $G'(x)=\\sin x \\mathrm{e}^{-\\cos x}\\ne \\mathrm{e}^{\\sin x}, \\forall x\\in \\mathbb{R}$ nên $G(x)$ không là một nguyên hàm của hàm số $\\mathrm{e}^{g(x)}$ trên $\\mathbb{R}$. Sai</li>\n<li>$\\displaystyle\\int \\left[ 5f(x)+6g(x) \\right]\\mathrm{d}x=\\int \\left( 5\\cos x+6\\sin x \\right)\\mathrm{d}x$<br>\n$=5\\sin x-6\\cos x+C$.  Đúng</li>\n<li>$\\displaystyle\\int \\left[ 2+\\left( \\frac{g(x)}{f(x)} \\right)^2 \\right]\\mathrm{d}x=\\int \\left(2+\\frac{\\sin^2 x}{\\cos^2 x}\\right)\\mathrm{d}x$<br>\n$=\\int \\left( 1+\\frac{\\sin^2 x+\\cos^2 x}{\\cos^2 x} \\right)\\mathrm{d}x$<br>\n$=\\int \\left( 1+\\frac{1}{\\cos^2 x} \\right)\\mathrm{d}x=x+\\tan x+C$.  Đúng</li></ul>",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hàm số $f(x)=3^{2x}$ và hàm số $g(x)=\\tan x$.",
            "items": [
                {
                    "sub": "$F(x)=\\dfrac{3^{2x}\\ln3}{2}$  là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$",
                    "ans": "F"
                },
                {
                    "sub": "$G(x)=-\\ln (3\\cos x)$ là một nguyên hàm của hàm số $g(x)$ trên $\\left( -\\dfrac{\\pi}{2};\\dfrac{\\pi}{2} \\right)$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int 3f(x)\\mathrm{d}x=\\dfrac{3^{2x+1}}{\\ln 9}+C$, ($C$ là một hằng số)",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int [f(x)+g(x)^2]\\mathrm{d}x =\\dfrac{9^x}{2\\ln3}-x+\\tan x+C$, ($C$ là một hằng số)",
                    "ans": "T"
                }
            ],
            "explain": "<ul><li>Vì $F'(x)=\\dfrac{2\\cdot 3^{2x}\\cdot\\ln^23}{2}=3^{2x}\\cdot \\ln^2 3\\ne f(x),\\forall x\\in \\mathbb{R}$ nên $f(x)$ không là một nguyên hàm của hàm số $F(x)$ trên $\\mathbb{R}$.  Sai</li><li>Vì $G'(x)=-\\dfrac{-3\\sin x}{3\\cos x}=\\tan x=g(x),\\forall x\\in \\left( -\\dfrac{\\pi }{2};\\dfrac{\\pi }{2} \\right)$ nên $G(x)$ là một nguyên hàm của hàm số $g(x)$ trên $\\left( -\\dfrac{\\pi }{2};\\dfrac{\\pi }{2} \\right)$.  Đúng</li>\n<li>$\\displaystyle\\int 3f(x)\\mathrm{d}x=\\displaystyle\\int 3\\cdot 3^{2x}\\mathrm{d}x=3\\cdot \\displaystyle\\int9^x\\mathrm{d}x$<br>\n$=3\\cdot\\dfrac{9^x}{\\ln9}+C=\\dfrac{3\\cdot3^{2x}}{\\ln9}+C=\\dfrac{3^{2x+1}}{\\ln9}+C$.  Đúng</li>\n<li>$\\displaystyle\\int \\left[f(x)+g(x)^2\\right]\\mathrm{d}x=\\int \\left( 3^{2x}+\\tan^2x\\right)\\mathrm{d}x$<br>\n$=\\int \\left(9^x-1+1+\\tan ^2\\right)\\mathrm{d}x$<br>\n$=\\int \\left(9^x-1+\\dfrac{1}{\\cos^2 x}\\right)\\mathrm{d}x$<br>\n$=\\dfrac{9^x}{\\ln9}-x+\\tan x+C=\\dfrac{9^x}{2\\ln3}-x+\\tan x+C$.  Đúng</li></ul>",
            "point": "1"
        },
        {
            "type": "short",
            "q": "Giả sử hàm số $y=f(x)$ liên tục và thỏa mãn: $f(1)=1$ và $f'(x)\\sqrt[3]{x^{-1}}=1$, với mọi $x>0$. Tính $4f(8)$.",
            "ans": "$47$",
            "explain": "Ta có $f'(x)=\\dfrac{1}{\\sqrt[3]{x^{-1}}}=\\dfrac{1}{x^{-\\tfrac{1}{3}}}=x^{\\tfrac{1}{3}}$<br>$\\Rightarrow F(x)=\\displaystyle\\int f'(x)\\mathrm{d}x= \\int x^{\\tfrac{1}{3}}\\mathrm{d}x=\\dfrac{3}{4}x^{\\frac{4}{3}}+C=\\frac{3}{4}\\sqrt[3]{x^4}+C$.<br>$f(1)=1\\Rightarrow \\dfrac{3}{4}+C=1\\Rightarrow C=-\\dfrac{1}{4}.\\\\ \\Rightarrow f(x)=\\dfrac{3}{4}\\sqrt[3]{x^4}-\\dfrac{1}{4}$<br>$\\Rightarrow 4f(8)=47$.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Một ô tô đang chạy với vận tốc $10$(m/s) thì người lái xe đạp phanh. Từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t)=10-2t$ (m/s), trong đó $t$ là khoảng thời gian tính bằng giây kể từ lúc đạp phanh. Tính quãng đường ô tô di chuyển được trong $8$ giây cuối cùng.",
            "ans": "$55$",
            "explain": "Chọn mốc thời gian và gốc tọa độ lúc ô tô bắt đầu đạp phanh. Suy ra $t=0;\\,s=0$.<br>$s(t)=\\displaystyle \\int v(t)\\mathrm{d}t=\\int (10-2t)\\mathrm{d}t=10t-t^2+C$.<br>$s(0)=0\\Rightarrow C=0 \\Rightarrow s(t)=10t-t^2$. <br>Ô tô dừng hẳn khi $v(t)=0\\Leftrightarrow 10-2t=0\\Leftrightarrow t=5$.<br>Trong $8$ giây cuối:<ul><li>ô tô chuyển động đều với vận tốc $10$(m/s) trong $3$ giây đầu.</li><li>ô tô chuyển động chậm dần đều trong $5$ giây cuối.</li></ul>Quãng đường ô tô di chuyển là: $s=3\\cdot 10+10\\cdot 5-5^2=55$ m.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Gọi $F(x)$ là một nguyên hàm của hàm số $f(x)=3^{2x+1} 2^{1+3x}$, biết $F(0)=\\dfrac{8}{\\ln 72}$. Tính $F(-2)$. (làm tròn kết quả đến hàng phần trăm).",
            "ans": "$0{,}47$",
            "explain": "Ta có:<br>$F(x)=\\displaystyle \\int{\\left(3^{2x+1}\\cdot 2^{1+3x} \\right)}\\mathrm{d}x$<br>\n$=\\int\\left(3\\cdot3^{2x}\\cdot2\\cdot2^{3x}\\right)\\mathrm{d}x=\\int\\left(6\\cdot9^x\\cdot8^x \\right)\\mathrm{d}x$<br>\n$=6\\int 72^x\\mathrm{d}x=6\\cdot\\dfrac{72^x}{\\ln 72}+C$.<br>Theo giả thiết, $F(0)=\\dfrac{8}{\\ln 72}\\Rightarrow 6\\cdot\\dfrac{72^0}{\\ln 72}+C=\\dfrac{8}{\\ln 72}\\Rightarrow C=\\dfrac{2}{\\ln 72}$<br>$\\Rightarrow F(x)=6\\cdot\\dfrac{{{72}^{x}}}{\\ln 72}+\\dfrac{2}{\\ln 72}\\Rightarrow F\\left( -2 \\right)=6\\cdot \\dfrac{72^{-2}}{\\ln 72}+\\dfrac{2}{\\ln 72}\\approx 0{,}47$.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Một viên đạn được bắn thẳng đứng lên từ độ cao $1{,}5$ mét so với mặt đất. Giả sử tại thời điểm $t$ giây (coi $t=0$ là thời điểm viên đạn được bắn lên), vận tốc của nó được cho bởi $v(t)=170-9{,}8\\,t\\,\\left( \\text{m/s} \\right)$. Tìm độ cao lớn nhất của viên đạn (làm tròn kết quả đến hàng đơn vị).",
            "ans": "$1476$",
            "explain": "Gọi $h(t)$ là độ cao của viên đạn tại thời điểm $t$ giây sau khi bắn. Ta có:<br>$h(t)=\\displaystyle \\int v(t)\\mathrm{d}t=\\int{(170-9{,}8t)}\\mathrm{d}t=170t-4{,}9t^2+C$.<br>Từ giả thiết suy ra: $h\\left( 0 \\right)=1,5\\Rightarrow C=1{,}5\\Rightarrow h(t)=170t-4{,}9t^2+1,5$.<br>Viên đạn đạt độ cao lớn nhất khi $v(t)=0\\Leftrightarrow 170-9,8\\,t\\,=0\\Leftrightarrow t=\\dfrac{850}{49}$.<br>Khi đó, độ cao lớn nhất của viên đạn là:<br>$h\\left(\\dfrac{850}{49}\\right)=\\dfrac{144647}{98}\\approx 1476$ (m).",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Một chiếc cốc chứa nước ở $95^\\circ$ C được đặt trong phòng có nhiệt độ $20^{\\circ}C$. Theo định luật làm mát của Newton, nhiệt độ của nước trong cốc sau $t$ phút (xem $t=0$ là thời điểm nước ở $95^\\circ$ C là một hàm số theo biến $t$. Tốc độ giảm nhiệt độ của nước trong cốc tại thời điểm $t$ phút được xác định bởi $T'(t)=\\left(-\\dfrac{3}{2} \\mathrm{e}^{-\\tfrac{t}{50}}\\right)^\\circ$ C/phút). Tính nhiệt độ của nước tại thời điểm $t=40$ phút (làm tròn kết quả đến hàng phần chục).",
            "ans": "$53{,}7$",
            "explain": "Ta có:<br>$\\displaystyle T(t)=\\int T'(t)\\mathrm{d}t=\\int\\left( -\\frac{3}{2}\\mathrm{e}^{-\\tfrac{t}{50}} \\right)\\mathrm{d}t=-\\frac{3}{2}\\int\\left({\\mathrm{e}^{-\\tfrac{1}{50}}} \\right)^t\\mathrm{d}t$<br>\n$=-\\frac{3}{2}\\cdot\\frac{\\left(\\mathrm{e}^{-\\tfrac{1}{50}} \\right)^t}{\\ln \\left(\\mathrm{e}^{-\\tfrac{1}{50}}\\right)}+C=75\\left(\\mathrm{e}^{-\\frac{1}{50}}\\right)^t+C$.<br>Vì $t=0$ là thời điểm nước ở $95^\\circ$ C nên $T(0)=95\\Rightarrow 75\\left(\\mathrm{e}^{-\\tfrac{1}{50}} \\right)^\\circ+C=95\\Rightarrow C=20$. <br>Suy ra $T(t)=75\\left(\\mathrm{e}^{-\\frac{1}{50}} \\right)^t+20$.<br>Do đó, nhiệt độ của nước tại thời điểm $t=40$ phút là: <br>$T(40)=75\\left(\\mathrm{e}^{-\\tfrac{1}{50}} \\right)^{40}+20\\approx 53{,}7 ^\\circ$ C.",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Doanh thu bán hàng của một công ty khi bán một loại sản phẩm là số tiền $R(x)$ (triệu đồng) thu được khi $x$ đơn vị sản phẩm được bán ra. Tốc độ biến động (thay đổi) của doanh thu khi $x$ đơn vị sản phẩm đã được bán là hàm số $M_R(x)=R'(x)$. Một công ty công nghệ cho biết, tốc độ biến đổi của doanh thu khi bán một loại con chip của hãng được cho bởi $M_R(x)=40-0{,}1x$, ở đó $x$ là số lượng chip đã bán. Hỏi doanh thu của công ty khi đã bán 500 con chip bằng bao nhiêu tỉ đồng?",
            "ans": "$7{,}5$",
            "explain": "Vì $R'(x)=M_R(x)$ nên doanh thu $R(x)$ là một nguyên hàm của $M_R(x)$.<br>Ta có: $R(x)=\\displaystyle \\int M_R(x) \\mathrm{d}x=\\int{(40-0{,}1x)}\\mathrm{d}x=40x-0{,}05 x^2+C$.<br>Khi $x=0$, tức là chưa bán chip nào thì doanh thu sẽ bằng $0$ (triệu đồng), nên $R\\left( 0 \\right)=0\\Rightarrow C=0$.<br>Suy ra $R(x)=40x-0{,}05 x^2$.<br>Do đó, doanh thu của công ty khi đã bán 500 con chip là:<br>$R(500)=40\\cdot 500-0{,}05\\cdot 500^2=7500$ (triệu đồng) $=7{,}5$ (tỉ đồng).",
            "point": "0.5"
        }
    ]
};