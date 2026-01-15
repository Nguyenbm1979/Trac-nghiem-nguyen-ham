window.EXAM_DATA = {
    "title": "Đề kiểm tra nguyên hàm, tích phân, Năm 2026",
    "subject": "Toan",
    "grade": "12",
    "time": 30,
    "take": 20,
    "password": "cceb4d6c46043d955369357e5397e74f",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": false,
    "music": true,
    "allowPrint": false,
    "minTime": 60,
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
            "q": "Cho hàm số $f(x)$ xác định trên $K$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $K$. Khẳng định nào sau đây đúng?",
            "options": [
                "$f’(x)=F(x),\\forall x\\in K$",
                "$F’(x)=f(x),\\forall x\\in K$",
                "$F(x)=f(x),\\forall x\\in K$",
                "$F’(x)=f’(x),\\forall x\\in K$"
            ],
            "ans": 1,
            "explain": "Khẳng định đúng là $F’(x)=f(x),\\forall x\\in K$.",
            "id": "2D3Y1-1",
            "mustTake": true,
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $f(x)$, $g(x)$ là các hàm số xác định, liên tục trên $\\mathbb{R}$. Trong các mệnh đề sau, mệnh đề nào <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int[f(x)+g(x)]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x+\\displaystyle\\int g(x)\\mathrm{\\,d}x$",
                "$\\displaystyle\\int[f(x)-g(x)]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x-\\displaystyle\\int g(x)\\mathrm{\\,d}x$",
                "$\\displaystyle\\int[f(x)\\cdot g(x)]\\mathrm{\\,d}x=\\displaystyle\\int f(x)\\mathrm{\\,d}x\\displaystyle\\int g(x)\\mathrm{\\,d}x$",
                "$\\displaystyle\\int 2f(x)\\mathrm{\\,d}x=2\\displaystyle\\int f(x)\\mathrm{\\,d}x$"
            ],
            "ans": 2,
            "explain": "",
            "id": "2D3Y1-1",
            "mustTake": true,
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $C$ là một hằng số. Trong các mệnh đề sau, mệnh đề nào <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int 2 x\\mathrm{\\,d}x=x^2+C$",
                "$\\displaystyle\\int\\dfrac{1}{x}\\mathrm{\\,d}x=\\ln|x|+C$",
                "$\\displaystyle\\int\\sin x\\mathrm{\\,d}x=\\cos x+C$",
                "$\\displaystyle\\int\\mathrm{e}^x\\mathrm{\\,d}x=\\mathrm{e}^x-C$"
            ],
            "ans": 2,
            "explain": "Mệnh đề $\\displaystyle\\int\\sin x\\mathrm{\\,d}x=\\cos x+C$ sai vì $\\displaystyle\\int\\sin x\\mathrm{\\,d}x=-\\cos x+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Trong các khẳng định sau, khẳng định nào <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int 2^x\\mathrm{\\,d}x=2^x\\ln 2+C$",
                "$\\displaystyle\\int\\mathrm{e}^{2x}\\mathrm{\\,d}x=\\dfrac{\\mathrm{e}^{2x}}{2}+C$",
                "$\\displaystyle\\int\\cos 2x\\mathrm{\\,d}x=\\dfrac{1}{2}\\sin 2x+C$",
                "$\\displaystyle\\int\\dfrac{1}{x+1}\\mathrm{\\,d}x=\\ln|x+1|+C\\quad (\\forall x\\neq-1)$"
            ],
            "ans": 0,
            "explain": "Ta có $\\displaystyle\\int 2^x\\mathrm{\\,d}x=\\dfrac{2^x}{\\ln 2}+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)=\\sin 2x$. Trong các khẳng định sau, khẳng định nào đúng?",
            "options": [
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\cos 2x+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\dfrac{1}{2}\\cos 2x+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\dfrac{1}{2}\\sin 2x+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\cos 2x+C$"
            ],
            "ans": 1,
            "explain": "Ta có $\\displaystyle\\int\\sin 2x\\mathrm{\\,d}x=-\\dfrac{1}{2}\\cos 2x+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Hàm số $f(x)$ nào dưới đây thỏa mãn $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\ln|x+3|+C$?",
            "options": [
                "$f(x)=(x+3)\\ln (x+3)-x$",
                "$f(x)=\\dfrac{1}{x+3}$",
                "$f(x)=\\dfrac{1}{x+2}$",
                "$f(x)=\\ln [\\ln (x+3)]$"
            ],
            "ans": 1,
            "explain": "Ta có $\\displaystyle\\int\\dfrac{1}{x+3}\\mathrm{\\,d}x=\\ln|x+3|+C$ nên $f(x)=\\dfrac{1}{x+3}$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Công thức nguyên hàm nào sau đây <b>không</b> đúng?",
            "options": [
                "$\\displaystyle\\int x^{\\alpha}\\mathrm{\\,d}x=\\dfrac{x^{\\alpha+1}}{\\alpha+1}+C$ ($\\alpha\\neq-1$)",
                "$\\displaystyle\\int a^x\\mathrm{\\,d}x=\\dfrac{a^x}{\\ln a}+C$ ($a>0$, $a\\neq 1$)",
                "$\\displaystyle\\int\\dfrac{1}{\\cos^2x}\\mathrm{\\,d}x=\\tan x+C\\left(x\\neq\\dfrac{\\pi}{2}+k\\pi, k\\in\\mathbb{Z}\\right)$",
                "$\\displaystyle\\int\\dfrac{1}{x+1}\\mathrm{\\,d}x=\\ln (x+1)+C$"
            ],
            "ans": 3,
            "explain": "Công thức $\\displaystyle\\int\\dfrac{1}{x+1}\\mathrm{\\,d}x=\\ln (x+1)+C$ là công thức <b>sai</b> vì $\\displaystyle\\int\\dfrac{1}{x+1}\\mathrm{\\,d}x=\\ln|x+1|+C$.",
            "id": "2D3Y1-1",
            "mustTake": true,
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Mệnh đề nào trong các mệnh đề sau đây <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int\\sin x\\mathrm{\\,d}x=-\\cos x+C$",
                "$\\displaystyle\\int\\ln x\\mathrm{\\,d}x=\\dfrac{1}{x}+C$",
                "$\\displaystyle\\int 2 x\\mathrm{\\,d}x=x^2+C$",
                "$\\displaystyle\\int\\dfrac{1}{\\sin^2x}\\mathrm{\\,d}x=-\\cot x+C$"
            ],
            "ans": 1,
            "explain": "Ta có $\\displaystyle\\int\\ln x\\mathrm{\\,d}x=x\\ln x-\\displaystyle\\int x\\cdot\\dfrac{1}{x}\\mathrm{\\,d}x=x\\ln x-x+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Mệnh đề nào dưới đây <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int\\sin 3x\\mathrm{\\,d}x=\\dfrac{\\cos 3x}{3}+C$",
                "$\\displaystyle\\int\\dfrac{\\mathrm{\\,d}x}{\\sqrt{x}}=2\\sqrt{x}+C$",
                "$\\displaystyle\\int\\mathrm{e}^{-x}\\mathrm{\\,d}x=-\\mathrm{e}^{-x}+C$",
                "$\\displaystyle\\int\\cos 3x\\mathrm{\\,d}x=\\dfrac{\\sin 3x}{3}+C$"
            ],
            "ans": 0,
            "explain": "Do $\\displaystyle\\int\\sin 3x\\mathrm{\\,d}x=-\\dfrac{\\cos 3x}{3}+C$ nên $\\displaystyle\\int\\sin 3x\\mathrm{\\,d}x=\\dfrac{\\cos 3x}{3}+C$ là sai.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Khẳng định nào sau đây <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int 2^x\\mathrm{\\,d}x=\\dfrac{2^{x+1}}{x+1}+C$",
                "$\\displaystyle\\int\\sin x\\mathrm{\\,d}x=-\\cos x+C$",
                "$\\displaystyle\\int \\mathrm{\\,d}x=x+C$",
                "$\\displaystyle\\int\\dfrac{1}{x}\\mathrm{\\,d}x=\\ln|x|+C$"
            ],
            "ans": 0,
            "explain": "Kết quả $\\displaystyle\\int 2^x\\mathrm{\\,d}x=\\dfrac{2^{x+1}}{x+1}+C$ sai vì $\\displaystyle\\int 2^x\\mathrm{\\,d}x=\\dfrac{1}{\\ln 2}2^x+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tìm họ nguyên hàm của hàm số $f(x)=\\sqrt{2x-1}$.",
            "options": [
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{1}{3}(2x-1)\\sqrt{2x-1}+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=-\\dfrac{1}{3}\\sqrt{2x-1}+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{2}{3}(2x-1)\\sqrt{2x-1}+C$",
                "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\dfrac{1}{2}\\sqrt{2x-1}+C$"
            ],
            "ans": 0,
            "explain": "Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int(2x-1)^{\\tfrac{1}{2}}\\mathrm{\\,d}x=\\dfrac{1}{3}(2x-1)\\sqrt{2x-1}+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=\\cos 3x\\cos 2x$ thỏa mãn $F\\left(\\dfrac{\\pi}{6}\\right)=0$. Tính $F\\left(\\dfrac{\\pi}{2}\\right)$.",
            "options": [
                "$F\\left(\\dfrac{\\pi}{2}\\right)=-\\dfrac{3}{10}$",
                "$F\\left(\\dfrac{\\pi}{2}\\right)=-\\dfrac{1}{20}$",
                "$F\\left(\\dfrac{\\pi}{2}\\right)=\\dfrac{1}{20}$",
                "$F\\left(\\dfrac{\\pi}{2}\\right)=\\dfrac{3}{10}$"
            ],
            "ans": 3,
            "explain": "Ta có $F(x)=\\displaystyle\\int\\cos 3x\\cos 2x\\mathrm{\\,d}x=\\dfrac{1}{2}\\displaystyle\\int\\left(\\cos 5x+\\cos x\\right)\\mathrm{\\,d}x=\\dfrac{\\sin 5x}{10}+\\dfrac{\\sin x}{2}+C$.<br> Vì $F\\left(\\dfrac{\\pi}{6}\\right)=0\\Leftrightarrow\\dfrac{1}{10}\\sin\\dfrac{5\\pi}{6}+\\dfrac{1}{2}\\sin\\dfrac{\\pi}{6}+C=0\\Leftrightarrow C=-\\dfrac{3}{10}$.<br> Vậy $F(x)=\\dfrac{\\sin 5x}{10}+\\dfrac{\\sin x}{2}-\\dfrac{3}{10}$.<br> Suy ra $F\\left(\\dfrac{\\pi}{2}\\right)=\\dfrac{3}{10}$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tìm nguyên hàm của hàm số $f(x)=\\mathrm{e}^{-x}\\left(2+\\dfrac{\\mathrm{e}^x}{\\cos^2x}\\right)$.",
            "options": [
                "$F(x)=-\\dfrac{2}{\\mathrm{e}^x}+\\tan x+C$",
                "$F(x)=2\\mathrm{e}^x-\\tan x+C$",
                "$F(x)=-\\dfrac{2}{\\mathrm{e}^x}-\\tan x+C$",
                "$F(x)=2\\mathrm{e}^{-x}+\\tan x+C$"
            ],
            "ans": 0,
            "explain": "Tập xác định $\\mathcal{D}=\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,k\\in\\mathbb{Z}\\right\\}$.<br> Ta có $\\displaystyle\\int\\mathrm{e}^{-x}\\left(2+\\dfrac{\\mathrm{e}^x}{\\cos^2x}\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\left(2\\mathrm{e}^{-x}+\\dfrac{1}{\\cos^2x}\\right)\\mathrm{\\,d}x=-\\dfrac{2}{\\mathrm{e}^x}+\\tan x+C$.",
            "id": "2D3Y1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": " Khẳng định nào sau đây <b>sai</b>?",
            "options": [
                "$\\displaystyle\\int\\limits_a^b f(x)d x=\\displaystyle\\int\\limits_a^b f(t)d t$",
                "$\\displaystyle\\int\\limits_a^b[f(x)+g(x)]d x=\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_a^b g(x)d x$",
                "$\\displaystyle\\int\\limits_a^b f(x)d x=\\displaystyle\\int\\limits_c^b f(x)d x+\\displaystyle\\int\\limits_a^c f(x)\\mathrm{\\,d}x$",
                "$\\displaystyle\\int\\limits_a^b f(x)d x=\\displaystyle\\int\\limits_b^a f(x)\\mathrm{\\,d}x$"
            ],
            "ans": 3,
            "explain": "",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $\\displaystyle\\int\\limits_a^b f’(x)\\mathrm{\\,d}x=7$ và $f(b)=5$. Khi đó $f(a)$ bằng",
            "options": [
                "$12$",
                "$0$",
                "$2$",
                "$-2$"
            ],
            "ans": 3,
            "explain": "$\\displaystyle\\int\\limits_a^b f’(x)\\mathrm{\\,d}x=7\\Leftrightarrow f(b)-f(a)=7\\Leftrightarrow f(a)=f(b)-7=-2$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": " Cho hai số thực $a$, $b$ tùy ý, $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên tập $\\mathbb{R}$. Mệnh đề nào dưới đây là đúng?",
            "options": [
                "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=F(b)+F(a)$",
                "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=f(b)-f(a)$",
                "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=F(b)-F(a)$",
                "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=F(a)-F(b)$"
            ],
            "ans": 2,
            "explain": "Theo định nghĩa, ta có $\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=F(b)-F(a)$.",
            "id": "",
            "mustTake": true,
            "point": 1
        },
        {
            "type": "mcq",
            "q": " Giả sử $\\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x=37$ và $\\displaystyle\\int\\limits_9^0 g(x)\\mathrm{\\,d}x=16$. Khi đó, $I=\\displaystyle\\int\\limits_0^9\\left[2f(x)+3g(x)\\right]\\mathrm{\\,d}x$ bằng",
            "options": [
                "$I=143$",
                "$I=122$",
                "$I=26$",
                "$I=58$"
            ],
            "ans": 2,
            "explain": "Ta có: $I=\\displaystyle\\int\\limits_0^9\\left[2f(x)+3g(x)\\right]\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^9 2f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_0^9 3g(x)\\mathrm{\\,d}x=2\\displaystyle\\int\\limits_0^9 f(x)\\mathrm{\\,d}x-3\\displaystyle\\int\\limits_9^0 g(x)\\mathrm{\\,d}x=26$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(t)$ liên tục trên $K$ và $a,b\\in K$, $F(t)$ là một nguyên hàm của $f(t)$ trên $K$. Chọn khẳng định <b>sai</b> trong các khẳng định sau.",
            "options": [
                "$F(a)-F(b)=\\displaystyle\\int\\limits_a^b f(t)\\mathrm{\\,d}t$",
                "$\\displaystyle\\int\\limits_a^b f(t)\\mathrm{\\,d}t= F(t)\\bigg|_a^b$",
                "$\\displaystyle\\int\\limits_a^b f(t)\\mathrm{\\,d}t=\\left(\\displaystyle\\int f(t)\\mathrm{\\,d}t\\right)\\bigg|_a^b$",
                "$\\displaystyle\\int\\limits_a^b f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_a^b f(t)\\mathrm{\\,d}t$"
            ],
            "ans": 0,
            "explain": "Theo định nghĩa ta có: $\\displaystyle\\int\\limits_a^b f(t)\\mathrm{\\,d}t= F(t)\\bigg|_a^b =F(b)-F(a)$. Suy ra phương án A sai.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tích phân $f(x)=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{3}}\\cos x\\mathrm{\\,d}x$ bằng",
            "options": [
                "$\\dfrac{1}{2}$",
                "$\\dfrac{\\sqrt{3}}{2}$",
                "$-\\dfrac{\\sqrt{3}}{2}$",
                "$-\\dfrac{1}{2}$"
            ],
            "ans": 1,
            "explain": "$I=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{3}}\\cos x\\mathrm{\\,d}x=\\sin x\\bigg|_0^{\\tfrac{\\pi}{3}}=\\dfrac{\\sqrt{3}}{2}$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": " Cho $I=\\displaystyle\\int\\limits_0^2 f(x)\\mathrm{\\,d}x=3$. Khi đó $J=\\displaystyle\\int\\limits_0^2[4f(x)-3]\\mathrm{\\,d}x$ bằng",
            "options": [
                "$6$",
                "$8$",
                "$4$",
                "$2$"
            ],
            "ans": 0,
            "explain": "Ta có $J=\\displaystyle\\int\\limits_0^2[4f(x)-3]\\mathrm{\\,d}x=4\\displaystyle\\int\\limits_0^2 f(x)\\mathrm{\\,d}x-3\\displaystyle\\int\\limits_0^2\\mathrm{\\,d}x=4\\cdot 3- 3x\\bigg|_0^2=6$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tích phân $\\displaystyle\\int\\limits_1^2\\dfrac{\\mathrm{\\,d}x}{2x+3}$ bằng",
            "options": [
                "$\\dfrac{1}{2}\\ln\\dfrac{7}{5}$",
                "$\\dfrac{1}{2}\\ln 35$",
                "$\\ln\\dfrac{7}{5}$",
                "$2\\ln\\dfrac{7}{5}$"
            ],
            "ans": 0,
            "explain": "Ta có $\\displaystyle\\int\\limits_1^2\\dfrac{\\mathrm{\\,d}x}{2x+3}=\\dfrac{1}{2}\\ln|2x+3|\\bigg|_1^2=\\dfrac{1}{2}\\left(\\ln 7-\\ln 5\\right)=\\dfrac{1}{2}\\ln\\dfrac{7}{5}$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)$ liên tục trên đoạn $[0; 10]$ và $\\displaystyle\\int\\limits_0^{10} f(x)\\mathrm{\\,d}x=7$ và $\\displaystyle\\int\\limits_2^6 f(x)\\mathrm{\\,d}x=3$.<br> Tính $P=\\displaystyle\\int\\limits_0^2 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_6^{10} f(x)\\mathrm{\\,d}x$.",
            "options": [
                "$P=4$",
                "$P=10$",
                "$P=7$",
                "$P=-4$"
            ],
            "ans": 0,
            "explain": "Ta có $\\displaystyle\\int\\limits_0^{10} f(x)\\mathrm{\\,d}x=7\\Leftrightarrow\\displaystyle\\int\\limits_0^2 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_2^6 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_6^{10} f(x)\\mathrm{\\,d}x=7$ <br> $ \\Leftrightarrow\\displaystyle\\int\\limits_0^2 f(x)\\mathrm{\\,d}x+\\displaystyle\\int\\limits_6^{10} f(x)\\mathrm{\\,d}x=7-3=4 $.<br> Vậy $P=4$.",
            "id": "",
            "mustTake": true,
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tính tích phân: $I=\\displaystyle\\int\\limits_1^2\\dfrac{x+1}{x}\\mathrm{\\,d}x$.",
            "options": [
                "$I=\\dfrac{7}{4}$",
                "$I=1-\\ln 2$",
                "$I=2\\ln 2$",
                "$I=1+\\ln 2$"
            ],
            "ans": 3,
            "explain": "Ta có $I=\\displaystyle\\int\\limits_1^2\\dfrac{x+1}{x}\\mathrm{\\,d}x =\\displaystyle\\int\\limits_1^2\\left(1+\\dfrac{1}{x}\\right)\\mathrm{\\,d}x = (x+\\ln x)\\bigg|_1^2 =1+\\ln 2$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)$ xác định trên $\\mathbb{R}\\setminus\\{1\\}$ thỏa mãn $f’(x)=\\dfrac{1}{x-1}$, $f(0)=2017$, $f(2)=2018$. Tính $S=f(3)-f(-1)$.",
            "options": [
                "$S=\\ln 4035$",
                "$S=4$",
                "$S=\\ln 2$",
                "$S=1$"
            ],
            "ans": 3,
            "explain": "Xét trên $(-\\infty;1)$ ta có: $f(x)=\\displaystyle\\int f’(x)\\mathrm{\\,d}x=\\displaystyle\\int\\dfrac{1}{x-1}\\mathrm{\\,d}x=\\ln|x-1|+C_1$.<br> Ta lại có $f(0)=2017\\Leftrightarrow\\ln|0-1|+C_1=2017\\Leftrightarrow C_1=2017$.<br> Suy ra $f(-1)=\\ln|-1-1|+2017=\\ln 2+2017$.<br> Xét trên $(1;+\\infty)$ ta có: $f(x)=\\displaystyle\\int f’(x)\\mathrm{\\,d}x=\\displaystyle\\int\\dfrac{1}{x-1}\\mathrm{\\,d}x=\\ln|x-1|+C_2$.<br> Ta lại có $f(2)=2018\\Leftrightarrow\\ln|2-1|+C_2=2018\\Leftrightarrow C_2=2018$.<br> Suy ra $f(3)=\\ln|3-1|+2018=\\ln 2+2018$.<br> Vậy $f(3)-f(-1)=1$.",
            "id": "2D3B1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $\\displaystyle\\int f(x)\\mathrm{\\,d}x=3x^2-4x+C$. Tìm $\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x$",
            "options": [
                "$\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x=\\dfrac{3}{2}\\mathrm{e}^{2x}-4\\mathrm{e}^x+C$",
                "$\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x=3\\mathrm{e}^x2x-4\\mathrm{e}^x+C$",
                "$\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x=6\\mathrm{e}^x+4x+C$",
                "$\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x=6\\mathrm{e}^x-4x+C$"
            ],
            "ans": 3,
            "explain": "$\\displaystyle\\int f(x)d x=3x^2-4x+C\\Rightarrow f(x)=6x-4$.<br> $\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(6\\mathrm{e}^x-4\\right)\\mathrm{\\,d}x=\\displaystyle\\int f(\\mathrm{e}^x)\\mathrm{\\,d}x=6\\mathrm{e}^x-4x+C$.",
            "id": "2D3B1-1",
            "mustTake": true,
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tìm nguyên hàm $\\displaystyle\\int\\dfrac{\\cos 2x}{\\sin^2x\\cdot\\cos^2x}\\mathrm{\\,d}x$",
            "options": [
                "$F(x)=-\\cos x-\\sin x+C$",
                "$F(x)=\\cos x+\\sin x+C$",
                "$F(x)=\\cot x-\\tan x+C$",
                "$F(x)=-\\cot x-\\tan x+C$"
            ],
            "ans": 3,
            "explain": "$\\displaystyle\\int\\dfrac{\\cos 2x}{\\sin^2x\\cdot\\cos^2x}\\mathrm{\\,d}x=\\displaystyle\\int\\dfrac{\\cos^2x-\\sin^2x}{\\sin^2x\\cdot\\cos^2x}\\mathrm{\\,d}x=\\displaystyle\\int\\left(\\dfrac{1}{\\sin^2x}-\\dfrac{1}{\\cos^2x}\\right)\\mathrm{\\,d}x=-\\cot x-\\tan x+C$.",
            "id": "2D3B1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Họ nguyên hàm của hàm số $f(x)=\\dfrac{x+3}{x^2+3x+2}$ là",
            "options": [
                "$\\ln|x+1|+2\\ln|x+2|+C$",
                "$2\\ln|x+1|+\\ln|x+2|+C$",
                "$2\\ln|x+1|-\\ln|x+2|+C$",
                "$-\\ln|x+1|+2\\ln|x+2|+C$"
            ],
            "ans": 2,
            "explain": "Ta có<br> $\\displaystyle\\int\\dfrac{x+3}{x^2+3x+2}\\mathrm{\\,d}x=2\\displaystyle\\int\\dfrac{1}{x+1}\\mathrm{\\,d}x-\\displaystyle\\int\\dfrac{1}{x+2}\\mathrm{\\,d}x=2\\ln|x+1|-\\ln|x+2|+C$.",
            "id": "2D3B1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Tìm nguyên hàm của hàm số sau $y=\\dfrac{4x^3-5x^2-1}{x^2}$.",
            "options": [
                "$\\displaystyle\\int\\dfrac{4x^3-5x^2-1}{x^2}\\mathrm{\\,d}x=2x^2-5x+\\dfrac{1}{x}+C$",
                "$\\displaystyle\\int\\dfrac{4x^3-5x^2-1}{x^2}\\mathrm{\\,d}x=x^2-5x+\\dfrac{1}{x}+C$",
                "$\\displaystyle\\int\\dfrac{4x^3-5x^2-1}{x^2}\\mathrm{\\,d}x=2x^2-5x+\\ln|x|+C$",
                "$\\displaystyle\\int\\dfrac{4x^3-5x^2-1}{x^2}\\mathrm{\\,d}x=2x^2-5x-\\dfrac{1}{x}+C$"
            ],
            "ans": 0,
            "explain": "$y=\\dfrac{4x^3-5x^2-1}{x^2}=4x-5-\\dfrac{1}{x^2}$ <br> $ \\Rightarrow\\displaystyle\\int\\left(4x-5-\\dfrac{1}{x^2}\\right)\\mathrm{\\,d}x=2x^2-5x+\\dfrac{1}{x}+C $.",
            "id": "2D3B1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $\\displaystyle\\int\\limits_0^1\\dfrac{2x+3}{2-x}\\mathrm{\\,d}x=a\\ln 2+b$ ($a$ và $b$ là các số nguyên). Khi đó giá trị của $a$ là",
            "options": [
                "$5$",
                "$-5$",
                "$-7$",
                "$7$"
            ],
            "ans": 3,
            "explain": "Ta có $\\displaystyle\\int\\limits_0^1\\dfrac{2x+3}{2-x}\\mathrm{\\,d}x =\\displaystyle\\int\\limits_0^1\\left(-\\dfrac{7}{x-2}-2\\right)\\mathrm{\\,d}x =\\left(-2x-7\\ln|x-2|\\right)\\bigg|_{0}^{1}=-2+7\\ln 2$. Vậy $a=7$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Biết $\\displaystyle\\int\\limits_3^5\\dfrac{x^2+x+1}{x+1}\\mathrm{\\,d}x=a+\\ln\\dfrac{b}{2}$ với $a$, $b$ là các số nguyên. Tính $S=a-2b$.",
            "options": [
                "$S=5$",
                "$S=2$",
                "$S=10$",
                "$S=-2$"
            ],
            "ans": 1,
            "explain": "Ta có $\\displaystyle\\int\\limits_3^5\\dfrac{x^2+x+1}{x+1}\\mathrm{\\,d}x=\\displaystyle\\int\\limits_3^5\\left(x+\\dfrac{1}{x+1}\\right)\\mathrm{\\,d}x=\\left(\\dfrac{1}{2}x^2+\\ln|x+1|\\right)\\bigg|_3^5=\\dfrac{25}{2}+\\ln 6-\\dfrac{9}{2}-\\ln 4=8+\\ln\\dfrac{3}{2}$.<br> Vậy $a=8$, $b=3$. Suy ra $S=a-2b=8-2\\cdot 3=2$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Biết $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}}\\left(3+4\\sin^2x\\right)\\mathrm{\\,d}x=\\dfrac{a\\pi}{b}-\\dfrac{c\\sqrt{3}}{6}$, trong đó $a$, $b$ nguyên dương và $\\dfrac{a}{b}$ tối giản. Tính $a+b+c$.",
            "options": [
                "$16$",
                "$12$",
                "$14$",
                "$8$"
            ],
            "ans": 2,
            "explain": "Ta có: $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}}\\left(3+4\\sin^2x\\right)\\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}}\\left[3+2(1-\\cos 2x)\\right]\\mathrm{\\,d}x =\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{6}}(5-2\\cos 2x)\\mathrm{\\,d}x =\\dfrac{5\\pi}{6}-\\dfrac{3\\sqrt{3}}{6}$.<br> Suy ra $a=5$, $b=6$, $c=3$. Vậy $a+b+c=14$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Biết $\\displaystyle\\int\\limits_0^3\\dfrac{\\mathrm{\\,d}x}{(x+2)(x+4)}=a\\ln 2+b\\ln 5+c\\ln 7$, $\\left(a,b,c\\in\\mathbb{Q}\\right)$. Giá trị của biểu thức $2a+3b-c$ bằng",
            "options": [
                "$2$",
                "$3$",
                "$5$",
                "$4$"
            ],
            "ans": 1,
            "explain": "$\\displaystyle\\int\\limits_0^3\\dfrac{\\mathrm{\\,d}x}{(x+2)(x+4)} =\\dfrac{1}{2}\\displaystyle\\int\\limits_0^3\\left(\\dfrac{1}{x+2}-\\dfrac{1}{x+4}\\right)\\mathrm{\\,d}x =\\dfrac{1}{2}\\left(\\ln|x+2|-\\ln|x+4|\\right)\\bigg|_0^3 =\\dfrac{1}{2}\\ln 5-\\dfrac{1}{2}\\ln 7+\\dfrac{1}{2}\\ln 2$.<br> Khi đó: $2a+3b-c =2\\cdot\\dfrac{1}{2}+3\\cdot\\dfrac{1}{2}+\\dfrac{1}{2}=3$.",
            "id": "",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $f(x)$ có đạo hàm $f'(x)=\\cos x+1, \\forall x \\in \\mathbb{R}$ và $\\displaystyle\\int\\limits_0^{\\frac{\\pi}{2}}f(x) \\mathrm{\\,d}x=\\dfrac{\\pi^2}{8}+1$, khi đó $f\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
            "options": [
                "$\\dfrac{\\pi}{2}$",
                "$\\dfrac{\\pi}{2}+1$",
                "$\\dfrac{\\pi}{2}-1$",
                "$1$"
            ],
            "ans": 1,
            "explain": "Ta có $f(x)=\\displaystyle\\int(\\cos x+1)\\mathrm{\\,d}x=\\sin x+x+C$.<br> Thay vào ta được $\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{2}} f(x)\\mathrm{\\,d}x=\\dfrac{\\pi^2}{8}+1\\Leftrightarrow\\displaystyle\\int\\limits_0^{\\tfrac{\\pi}{2}}(\\sin x+x+C)\\mathrm{\\,d}x=\\dfrac{\\pi^2}{8}+1$ <br> $ \\Leftrightarrow\\left(-\\cos x+\\dfrac{x^2}{2}+Cx\\right)\\bigg|_0^{\\tfrac{\\pi}{2}}=\\dfrac{\\pi^2}{8}+1\\Leftrightarrow 1+\\dfrac{\\pi^2}{8}+C\\cdot\\dfrac{\\pi}{2}=\\dfrac{\\pi^2}{8}+1\\Leftrightarrow C=0 $.<br> Vậy $f\\left(\\dfrac{\\pi}{2}\\right)=1+\\dfrac{\\pi}{2}$.",
            "id": "XPLUS18-Vted2023",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Cho $F(x)$ là một nguyên hàm của $f(x)=\\dfrac{2x+1}{x^4+2x^3+x^2}$ trên khoảng $(0;+\\infty)$ thỏa mãn $F(1)=\\dfrac{1}{2}$. Giá trị của biểu thức $S=F(1)+F(2)+F(3)+ \\cdots +F(2019)$ là",
            "options": [
                "$\\dfrac{2019}{2020}$",
                "$\\dfrac{2019.2021}{2020}$",
                "$2018 \\dfrac{1}{2020}$",
                "$-\\dfrac{2019}{2020}$"
            ],
            "ans": 2,
            "explain": "Ta có $F(x)=\\displaystyle\\int \\dfrac{2x+1}{x^4+2x^3+x^2}\\mathrm{\\,d}x=\\displaystyle\\int \\dfrac{2x+1}{x^2(x+1)^2}\\mathrm{\\,d}x=\\displaystyle\\int \\left(\\dfrac{1}{x^2}-\\dfrac{1}{(x+1)^2}\\right)\\mathrm{d}x$.<br> Suy ra $F(x)=-\\dfrac{1}{x}+\\dfrac{1}{x+1}+c$ mà $F(1)=\\dfrac{1}{2}$ nên $c=1$.<br> Hay $F(x)=-\\dfrac{1}{x}+\\dfrac{1}{x+1}+1$.<br> Ta có \\begin{eqnarray*} &S=&F(1)+F(2)+F(3)+ \\cdot \\cdot \\cdot +F(2019) <br> &=&\\left(-\\dfrac{1}{1}+\\dfrac{1}{2}+1\\right)+\\left(-\\dfrac{1}{2}+\\dfrac{1}{3}+1\\right)+\\left(-\\dfrac{1}{3}+\\dfrac{1}{4}+1\\right)+ \\cdot \\cdot \\cdot +\\left(-\\dfrac{1}{2019}+\\dfrac{1}{2020}+1\\right) <br> &=&-1+\\dfrac{1}{2020}+2019 \\cdot 1=2018+\\dfrac{1}{2020}=2018\\dfrac{1}{2020}. \\end{eqnarray*}",
            "id": "2D3K1-1",
            "point": 1
        },
        {
            "type": "mcq",
            "q": "Để hàm số $ F(x)=(ax^2+bx+c)\\mathrm{e}^x $ $ (a,b,c \\in \\mathbb{R}) $ là một nguyên hàm của hàm số $ f(x)=x^2 \\mathrm{e}^x $ thì giá trị của $ P=a+b+c $ là",
            "options": [
                "$ P=-1 $",
                "$ P=1 $",
                "$ P=2 $",
                "$ P=-2 $"
            ],
            "ans": 1,
            "explain": "Ta có $ F'(x)=(2ax+b)\\mathrm{e}^x + (ax^2+bx+c)\\mathrm{e}^x = \\left[ax^2+(2a+b)x+b+c\\right]\\mathrm{e}^x $.<br> Để $ F(x) $ là một nguyên hàm của hàm $ f(x) $ thì $ F'(x)=f(x) \\Leftrightarrow \\left\\{\\begin{aligned}a=1 \\\\2a+b=0 \\\\b+c=0\\end{aligned}\\right. \\Leftrightarrow \\left\\{\\begin{aligned} a=1 \\\\b=-2 \\\\ c=2.\\end{aligned}\\right.$<br>\\ Vậy $ P=a+b+c=1+(-2)+2=1 $.",
            "id": "2D3B1-1",
            "point": 1
        }
    ]
};