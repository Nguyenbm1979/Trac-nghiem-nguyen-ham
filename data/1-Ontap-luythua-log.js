window.EXAM_DATA = {
    "title": "Ôn tập lũy thừa và Logarit, 11 VIP",
    "subject": "Toan",
    "grade": "11",
    "time": 45,
    "password": "2afba7e5bf6e676c5798e444f8b1b261",
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
            "q": "Cho $a > 0$, $m, n \\in \\mathbb{R}$. Khẳng định nào sau đây đúng?",
            "options": [
                "$(a^m)^n = (a^n)^m$",
                "$a^m \\cdot a^n = a^{m-n}$",
                "$a^m + a^n = a^{m+n}$",
                "$\\dfrac{a^m}{a^n} = a^{n-m}$"
            ],
            "ans": 0,
            "explain": "<br><b>-</b> $(a^m)^n = a^{m \\cdot n} = (a^n)^m$ (đúng). <br><b>-</b> $a^m \\cdot a^n = a^{m+n}$ (đáp án B sai). <br><b>-</b> $a^m + a^n \\neq a^{m+n}$ (đáp án C sai). <br><b>-</b> $\\dfrac{a^m}{a^n} = a^{m-n}$ (đáp án D sai).",
            "id": "1D6N3-1",
            "point": "0.3"
        },
        {
            "type": "short",
            "q": "Viết biểu thức $5^{\\frac{2}{3}}\\cdot\\sqrt{5}$ về dạng luỹ thừa $5^m$, biểu thức $5^{\\frac{2}{3}}:\\sqrt{5}$ về dạng luỹ thừa $5^n$. Khi đó giá trị của $m-n$ là bao nhiêu?",
            "ans": "$1$",
            "explain": "Ta có $5^{\\frac{2}{3}}\\cdot\\sqrt{5} = 5^{\\frac{2}{3}}\\cdot5^{\\frac{1}{2}} = 5^{\\frac{7}{6}}$ và $5^{\\frac{2}{3}}:\\sqrt{5} = 5^{\\frac{2}{3}}:5^{\\frac{1}{2}} = 5^{\\frac{1}{6}}$. Suy ra $m=\\dfrac{7}{6}$ và $n=\\dfrac{1}{6}$.<br> Do đó $m-n=1$.",
            "id": "2D5H2-3",
            "point": "0.72"
        },
        {
            "type": "mcq",
            "q": "Rút gọn biểu thức $P=x^{\\frac{2}{5}} \\cdot \\sqrt[3]{x}$, với $x$ là số thực dương, được kết quả là",
            "options": [
                "$P=x^{\\frac{17}{5}}$",
                "$P=x^{\\frac{2}{15}}$",
                "$P=x^{\\frac{11}{15}}$",
                "$P=x^{\\frac{6}{5}}$"
            ],
            "ans": 2,
            "explain": "Ta có $P=x^{\\frac{2}{5}} \\cdot \\sqrt[3]{x} = x^{\\frac{2}{5}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{2}{5}+\\frac{1}{3}}=x^{\\frac{11}{15}}$.",
            "id": "1D6N1-2",
            "point": "0.3"
        },
        {
            "type": "mcq",
            "q": "Giả sử các biểu thức xuất hiện đã cho là có nghĩa. Khẳng định nào sau đây là sai?",
            "options": [
                "$\\left( \\sqrt{a}\\right) ^n=\\sqrt{a^n}$",
                "$\\sqrt{a}\\sqrt{b}=\\sqrt{ab}$",
                "$\\sqrt{\\sqrt{a}}=\\sqrt{a}$",
                "$\\sqrt{a^n}=\\sqrt{a^m}$"
            ],
            "ans": 3,
            "explain": "Dựa vào lý thuyết ta thấy $\\sqrt{a^n}=\\sqrt{a^m}$ là sai.",
            "id": "1D6N1-1",
            "point": "0.3"
        },
        {
            "type": "mcq",
            "q": "Cho $a$, $b$ là hai số thực dương và $m$, $n$ là hai số thực tùy ý. Đẳng thức nào sau đây là sai?",
            "options": [
                "$a^m a^n=a^{m+n}$",
                "$(a b)^n=a^n b^n$",
                "$(a^m)^n=a^{m n}$",
                "$a^m b^n=(a b)^{m+n}$"
            ],
            "ans": 3,
            "explain": "Ta có $a^m a^n=a^{m+n}$; $(a b)^n=a^n b^n$; $(a^m)^n=a^{m n}$.<br> Do đó $a^m b^n=(a b)^{m+n}$ là khẳng định sai.",
            "id": "1D6N1-2",
            "point": "0.3"
        },
        {
            "type": "tf",
            "q": "Cho $x$, $y$ là $2$ số dương; $m$, $n$ là hai số thực tùy ý",
            "items": [
                {
                    "sub": "$(x^m)^n=(x^n)^m$",
                    "ans": "T"
                },
                {
                    "sub": "$x^{2m}=(x^m)^2$",
                    "ans": "T"
                },
                {
                    "sub": "$\\log_5 25x=5+\\log_5 x$",
                    "ans": "F"
                },
                {
                    "sub": "$\\log _{\\sqrt{3}} x+\\log _{\\frac{1}{3}}\\left(3x^3 y\\right)+\\log_9(3y^3)=1$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> <b>Đúng</b>.<br> Ta có $(x^m)^n=x^{mn}=(x^n)^m$. <br><b>-</b> <b>Đúng</b>.<br> Ta có $x^{2m}=(x^m)^2$. <br><b>-</b> <b>Sai</b>.<br> Ta có $\\log_5 25x=\\log_{5}5^2+\\log_5 x=2+\\log_5 x$. <br><b>-</b> <b>Sai</b>.<br>$ \\log _{\\sqrt{3}} x+\\log _{\\frac{1}{3}}\\left(3x^3 y\\right)+\\log_9(3y^3)$<br>$=log _{3^{\\frac{1}{2}}} x+\\log _{3^{-1}}\\left(3x^3 y\\right)+\\log_{3^2}(3y^3)$<br> $=2\\cdot \\log _{3} x-1\\cdot\\log_{3}\\left(3x^3 y\\right)+\\dfrac{1}{2}\\cdot \\log_{3}(3y^3)$<br> $=2\\log _{3} x-\\left(1+3\\log_{3}x+\\log_{3}y\\right)+\\dfrac{1}{2}\\cdot \\left(1+3\\log_{3}y\\right)$<br> $=-\\log _{3} x+\\dfrac{1}{2}\\log_{3}y-\\dfrac{1}{2}. $",
            "id": "1D6V2-3",
            "point": "1.4"
        },
        {
            "type": "mcq",
            "q": "Cho biểu thức $P=\\sqrt{x^5}$, với $x>0$. Khẳng định nào sau đây đúng?",
            "options": [
                "$P=x^9$",
                "$P=\\dfrac{2}{5}x^5$",
                "$P=x^\\frac{5}{2}$",
                "$P=x^\\frac{2}{5}$"
            ],
            "ans": 2,
            "explain": "$P=\\sqrt{x^5}=x^{\\frac{5}{2}}$.",
            "id": "1D6H1-2",
            "point": "0.3"
        },
        {
            "type": "mcq",
            "q": "Nghiệm của phương trình $2^{2x-1}=\\dfrac{1}{8}$ là",
            "options": [
                "$x=-1$",
                "$x=2$",
                "$x=1$",
                "$x=-2$"
            ],
            "ans": 0,
            "explain": "$2^{2x-1}=\\dfrac{1}{8}\\Rightarrow 2x-1=\\log _2\\left(\\dfrac{1}{8}\\right)\\Rightarrow 2x-1=-3\\Rightarrow x=-1$.",
            "id": "1D6V4-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Giá trị của $K=\\left(\\dfrac{1}{81}\\right)^{-0{,}75}+\\left(\\dfrac{1}{27}\\right)^{-\\tfrac{4}{3}}$ bằng",
            "options": [
                "$K=18$",
                "$K=108$",
                "$K=180$",
                "$K=54$"
            ],
            "ans": 1,
            "explain": "Ta có $K=\\left(\\dfrac{1}{81}\\right)^{-0{,}75}+\\left(\\dfrac{1}{27}\\right)^{-\\tfrac{4}{3}}$<br> $=81^{0{,}75}+27^{\\frac{4}{3}}$<br> $=3^{4\\cdot 0{,}75}+3^{3\\cdot \\tfrac{4}{3}}$<br> $=3^3+3^{4}=27+81=108.$ Vậy $K=108$.",
            "id": "1D6H1-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Cho các số thực $a$, $b$, $\\alpha$ ($a>b>0$, $\\alpha\\ne1$). Mệnh đề nào sau đây <b>đúng</b>?",
            "options": [
                "$\\left(\\dfrac{a}{b}\\right)^\\alpha=\\dfrac{a^\\alpha}{b^{-\\alpha}}$",
                "$(a-b)^\\alpha=a^\\alpha-b^\\alpha$",
                "$(a+b)^\\alpha=a^\\alpha+b^\\alpha$",
                "$(ab)^\\alpha=a^\\alpha b^\\alpha$"
            ],
            "ans": 3,
            "explain": "Mệnh đề đúng là $(ab)^\\alpha=a^\\alpha b^\\alpha$.",
            "id": "1D6N1-2",
            "point": "0.36"
        },
        {
            "type": "short",
            "q": "Cho số thực $a$ ($0 < a \\ne 1$). Giá trị của biểu thức $P = \\log_a(a\\sqrt{a^3})$ là bao nhiêu?",
            "ans": "$2{,}5$",
            "explain": "$P = \\log_a(a\\sqrt{a^3}) = \\log_a \\left( a \\cdot a^{\\tfrac{3}{2}} \\right) = \\log_a \\left( a^{\\tfrac{5}{2}}\\right) = \\dfrac{5}{2}=2{,}5$.",
            "id": "1D6H2-1",
            "point": "0.62"
        },
        {
            "type": "mcq",
            "q": "Cho $a$, $b$ là hai số thực dương và $a \\neq 1$, $b \\neq 1$, $x$ và $y$ là hai số dương. Tìm mệnh đề đúng trong các mệnh đề sau.",
            "options": [
                "$\\log_b x = \\log_b a . \\log_a x$",
                "$\\log_a \\dfrac{x}{y} = \\dfrac{\\log_a x}{\\log_a y}$",
                "$\\log_a \\dfrac{1}{x} = \\dfrac{1}{\\log_a x}$",
                "$\\log_a (x+y) = \\log_a x + \\log_a y$"
            ],
            "ans": 0,
            "explain": "Theo công thức logarit thì $\\log_b x = \\log_b a \\cdot \\log_a x$.",
            "id": "1D6N2-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Cho $a$ là số thực dương khác $2$. Tính $I=\\log_{\\frac{a}{2}}\\left(\\dfrac{a^3}{8} \\right) $",
            "options": [
                "$-3$",
                "$\\dfrac{1}{3}$",
                "$-\\dfrac{1}{3}$",
                "$3$"
            ],
            "ans": 3,
            "explain": "Ta có $I=\\log_{\\frac{a}{2}}\\left(\\dfrac{a^3}{8} \\right) =\\log_{\\frac{a}{2}}\\left(\\dfrac{a}{2} \\right)^3=3$",
            "id": "1D6N2-1",
            "point": "0.36"
        },
        {
            "type": "short",
            "q": " Gọi $m$, $n$ là hai số nguyên dương sao cho \\[ \\dfrac{1}{\\log_3x}+\\dfrac{1}{\\log_{3^2}x}+\\dfrac{1}{\\log_{3^3}x}=\\dfrac{m}{n\\log_3x} \\quad\\text{đúng với mọi}\\quad x>0. \\] Tính giá trị của biểu thức $P=\\dfrac{m}{2n}$.",
            "ans": "$3$",
            "explain": "Ta có \\[ \\log_{3^2}x = \\dfrac{1}{2}\\log_3x, \\quad \\log_{3^3}x = \\dfrac{1}{3}\\log_3x. \\] Do đó \\[ \\dfrac{1}{\\log_{3^2}x} = 2\\cdot\\dfrac{1}{\\log_3x}, \\quad \\dfrac{1}{\\log_{3^3}x} = 3\\cdot\\dfrac{1}{\\log_3x}. \\] Vậy vế trái của phương trình trở thành \\[ \\dfrac{1}{\\log_3x} + 2\\cdot\\dfrac{1}{\\log_3x} + 3\\cdot\\dfrac{1}{\\log_3x} = 6\\cdot\\dfrac{1}{\\log_3x}. \\] So sánh với vế phải ta có \\[ 6\\cdot\\dfrac{1}{\\log_3x} = \\dfrac{m}{n\\log_3x}. \\] Suy ra $\\dfrac{6}{1} = \\dfrac{m}{n}\\Rightarrow T=\\dfrac{m}{2n}=3$.",
            "id": "1D6V4-4",
            "point": "0.72"
        },
        {
            "type": "mcq",
            "q": "Cho $a > 0$, $a \\neq 1$. Biểu thức $A=\\log _{a^5} a$ có giá trị bằng",
            "options": [
                "$5$",
                "$\\dfrac{1}{5}$",
                "$-5$",
                "$-\\dfrac{1}{5}$"
            ],
            "ans": 1,
            "explain": "Với $a > 0$, $a \\neq 1$, ta có $A=\\log _{a^5} a=\\dfrac{1}{5}\\log _{a} a=\\dfrac{1}{5}$.",
            "id": "1D6N2-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Cho $2$ số thực dương $a$, $b$ với $a \\neq 1$. Khẳng định nào sau đây là đúng?",
            "options": [
                "$\\log_a\\left(a^5 b^3\\right)=5+3\\log_a b$",
                "$\\log_a\\left(a^5 b^3\\right)=5+\\log_a b$",
                "$\\log_a\\left(a^5 b^3\\right)=\\dfrac{5}{3}+\\log_a b$",
                "$\\log_a\\left(a^5 b^3\\right)=\\dfrac{1}{5}+\\dfrac{1}{3} \\log_a b$"
            ],
            "ans": 0,
            "explain": "Ta có $ \\log_a\\left(a^5 b^3\\right)=\\log_{a}a^5+\\log_a b^3$<br> $=5\\log_{a}a+3\\log_a b=5+3\\log_a b. $",
            "id": "1D6H2-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Cho các số thực dương $x$, $y$ thoả mãn $\\log _2x=a$, $\\log _2y=b$. Giá trị của biểu thức $\\log _2\\left(x^2y^3\\right)$ bằng",
            "options": [
                "$6ab$",
                "$a^2b^3$",
                "$a^2+b^3$",
                "$2a+3b$"
            ],
            "ans": 3,
            "explain": "$\\log _2x=a \\Rightarrow x=2^a$.<br> $\\log _2y=b \\Rightarrow y=2^b$.<br> $\\log _2\\left(x^2y^3\\right)=\\log _2\\left(\\left(2^a\\right)^2\\left(2^b\\right)^3\\right)=\\log _2\\left(2^{2a}2^{3b}\\right)=\\log _2\\left(2^{2a+3b}\\right)=2a+3b$.",
            "id": "1D6H2-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Cho $a$, $b$, $c$ là các số dương và $a\\ne1$, khẳng định nào sau đây <b>sai</b>?",
            "options": [
                "$\\log_a\\left(\\dfrac{1}{b}\\right)=-\\log_ab$",
                "$\\log_a(bc)=\\log_ab+\\log_ac$",
                "$\\log_a(b+c)=\\log_ab\\cdot\\log_ac$",
                "$\\log_a\\left(\\dfrac{b}{c}\\right)=\\log_ab-\\log_ac$"
            ],
            "ans": 2,
            "explain": "Khẳng định sai là $\\log_a(b+c)=\\log_ab\\cdot\\log_ac$.",
            "id": "1D6N2-2",
            "point": "0.36"
        },
        {
            "type": "short",
            "q": "Với $a$, $b$ là các số thực dương tùy ý thỏa mãn $a\\ne 1$ và $\\log_a b=-2$, giá trị của $\\log_a \\left(\\dfrac{b}{a}\\right)$ bằng bao nhiêu?",
            "ans": "-3",
            "explain": "Ta có $\\log_a \\left(\\dfrac{b}{a}\\right)=\\log_a b-\\log_aa=-2-1=-3$.",
            "id": "1D6H2-1",
            "point": "0.72"
        },
        {
            "type": "mcq",
            "q": "Với $ a$ là số thực dương tùy ý, giá trị của $\\log_7(7a)$ bằng bao nhiêu?",
            "options": [
                "$1 - \\log_7 a$",
                "$1 + a$",
                "$a$",
                "$1 + \\log_7 a$"
            ],
            "ans": 3,
            "explain": "Dùng công thức tính logarit $\\log_b (xy) = \\log_b x + \\log_b y$. Ta áp dụng với $x =b=7$ và $y = a$ \\[ \\log_7(7a) = \\log_7 7 + \\log_7 a. \\] Vì \\( \\log_7 7 = 1 \\), ta có \\[ \\log_7(7a) = 1 + \\log_7 a. \\]",
            "id": "1D6H2-1",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Với $a$, $b$ là các số thực dương thỏa mãn $a \\neq 1$ và $\\log_a b = 2$, giá trị của $\\log_a (ab)$ bằng",
            "options": [
                "$2$",
                "$3$",
                "$5$",
                "$3$"
            ],
            "ans": 3,
            "explain": "Ta có: \\begin{align*} \\log_a (ab) &= \\log_a a + \\log_a b <br> &= 1 + 2 <br> &= 3. \\end{align*}",
            "id": "1D6H2-2",
            "point": "0.36"
        },
        {
            "type": "mcq",
            "q": "Với $a$ là số thực dương tùy ý, $\\ln(5a) - \\ln(3a)$ bằng",
            "options": [
                "$\\dfrac{\\ln 5}{\\ln 3}$",
                "$\\ln \\dfrac{5}{3}$",
                "$\\ln (2a)$",
                "$\\dfrac{\\ln (5a)}{\\ln (3a)}$"
            ],
            "ans": 1,
            "explain": "Ta có $\\ln(5a) - \\ln(3a) = \\ln\\left(\\frac{5a}{3a}\\right) = \\ln\\left(\\frac{5}{3}\\right)$.",
            "id": "1D6H2-2",
            "point": "0.36"
        }
    ]
};