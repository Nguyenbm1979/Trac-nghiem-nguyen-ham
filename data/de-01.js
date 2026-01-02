window.EXAM_DATA = {
    "title": "Kiểm Tra Nguyên Hàm 1 (90 phút)",
    "description": "22 Câu hỏi | Thời gian: 90 phút | Chủ đề: Nguyên hàm cơ bản & Vận dụng",
    "time": 90, 
    "password": "98eb45b771496fe725ae4e0177604c36",
    "questions": [
        // --- PHẦN 1: TRẮC NGHIỆM (12 CÂU) ---
        {
            type: 'mcq',
            q: 'Câu 1: Họ nguyên hàm của hàm số $f(x)=x^3$ là',
            options: ['$4x^4+C$', '$3x^2+C$', '$x^4+C$', '$\\dfrac{1}{4}x^4+C$'],
            ans: 3,
            explain: 'Ta có $\\displaystyle\\int x^3\\mathrm{\\,d}x=\\dfrac{1}{4}x^4+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 2: Tìm nguyên hàm của hàm số $ f(x)=2\\sin x$.',
            options: ['$\\displaystyle\\int 2\\sin x\\mathrm{\\,d}x=-2\\cos x+C$', '$\\displaystyle\\int 2\\sin x\\mathrm{\\,d}x=2\\cos x+C$', '$\\displaystyle\\int 2\\sin x\\mathrm{\\,d}x=\\sin^2x+C$', '$\\displaystyle\\int 2\\sin x\\mathrm{\\,d}x=\\sin 2x+C$'],
            ans: 0,
            explain: 'Ta có $\\displaystyle\\int 2\\sin x\\mathrm{\\,d}x=2\\displaystyle\\int \\sin x \\mathrm{\\,d}x=-2\\cos x+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 3: Họ nguyên hàm của hàm số $f(x)=\\mathrm{e}^x+x$ là',
            options: ['$\\mathrm{e}^x+1+C$', '$\\mathrm{e}^x+x^2+C$', '$\\mathrm{e}^x+\\dfrac{1}{2}{x^2}+C$', '$\\dfrac{1}{x+1}{\\mathrm{e}^x}+\\dfrac{1}{2}{x^2}+C$'],
            ans: 2,
            explain: 'Ta có $\\displaystyle\\int \\left(\\mathrm{e}^x+x\\right) \\mathrm{\\,d}x=\\displaystyle\\int \\mathrm{e}^x \\mathrm{\\,d}x+\\displaystyle\\int x \\mathrm{\\,d}x=\\mathrm{e}^x+\\dfrac{x^2}{2}+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 4: Họ nguyên hàm của hàm số $y=x^2-3x+\\dfrac{1}{x}$ là',
            options: ['$\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}-\\ln\\left|x\\right|+C$', '$\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}+\\ln x+C$', '$\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}+\\ln\\left|x\\right|+C$', '$\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}+\\dfrac{1}{x^2}+C$'],
            ans: 2,
            explain: 'Ta có $\\displaystyle\\int \\left(x^2-3x+\\dfrac{1}{x}\\right) \\mathrm{\\,d}x=\\dfrac{x^3}{3}-\\dfrac{3x^2}{2}+\\ln\\left|x\\right|+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 5: Tìm nguyên hàm của hàm số $f(x)=\\dfrac{x^4+2}{x^2}$.',
            options: ['$\\dfrac{x^3}{3}-\\dfrac{1}{x}+C$', '$\\dfrac{x^3}{3}+\\dfrac{2}{x}+C$', '$\\dfrac{x^3}{3}+\\dfrac{1}{x}+C$', '$\\dfrac{x^3}{3}-\\dfrac{2}{x}+C$'],
            ans: 3,
            explain: 'Ta có $\\displaystyle\\int \\dfrac{x^4+2}{x^2} \\mathrm{\\,d}x=\\displaystyle\\int \\left(x^2+\\dfrac{2}{x^2}\\right) \\mathrm{\\,d}x=\\dfrac{x^3}{3}-\\dfrac{2}{x}+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 6: Cho hàm số $ f(x)=1-\\dfrac{1}{\\cos^2 x}$. Nguyên hàm $F(x)$ là?',
            options: ['$x+\\tan x+C$', '$x+\\cot x+C$', '$x-\\tan x+C$', '$x-\\cot x+C$'],
            ans: 2,
            explain: 'Ta có $\\displaystyle\\int f(x) \\mathrm{\\,d}x=\\displaystyle\\int \\left(1-\\dfrac{1}{\\cos^2x}\\right)\\mathrm{\\,d}x=x-\\tan x+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 7: Họ nguyên hàm của hàm số $f(x)=\\cos x+6x$ là',
            options: ['$\\sin x+3x^2+C$', '$-\\sin x+3x^2+C$', '$\\sin x+6x^2+C$', '$-\\sin x+C$'],
            ans: 0,
            explain: 'Ta có $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int \\left(\\cos x+6x\\right)\\mathrm{\\,d}x=\\sin x+3x^2+C$.'
        },
        {
            type: 'mcq',
            q: 'Câu 8: $\\displaystyle\\int f(x)\\mathrm{\\,d}x=4x^3+x^2+C$ thì hàm số $f(x)$ bằng',
            options: ['$f(x)=x^4+\\dfrac{x^3}{3}+Cx$', '$f(x)=12x^2+2x+C$', '$f(x)=12x^2+2x$', '$f(x)=x^4+\\dfrac{x^3}{3}$'],
            ans: 2,
            explain: 'Ta có $ f(x)=F\'(x)=\\left(4x^3+x^2+C\\right)\'=12x^2+2x$.'
        },
        {
            type: 'mcq',
            q: 'Câu 9: Hàm số $F(x)=2x+3^x-1$ là nguyên hàm của hàm số nào trong các hàm số sau',
            options: ['$f(x)=2+3^x\\ln 3$', '$f(x)=x^2+\\dfrac{3^x}{\\ln 3}-x+C$', '$f(x)=x^2+\\dfrac{3^x}{\\ln 3}-x$', '$f(x)=2+3^x\\ln 3+C$'],
            ans: 0,
            explain: 'Ta có $ f(x)=F\'(x)\\Rightarrow f(x)=\\left(2x+3^x-1\\right)\'=2+3^x\\ln 3$.'
        },
        {
            type: 'mcq',
            q: 'Câu 10: Cho $\\displaystyle\\int \\ln x \\mathrm{\\,d}x=F(x)+C$. Khẳng định nào dưới đây đúng?',
            options: ['$F\'(x)=\\dfrac{1}{x}$', '$F\'(x)=\\dfrac{1}{x}+C$', '$F\'(x)=\\ln x$', '$F\'(x)=\\ln x+1$'],
            ans: 2,
            explain: 'Theo định nghĩa nguyên hàm: Đạo hàm của nguyên hàm chính là hàm số dưới dấu tích phân. $F\'(x) = \\ln x$.'
        },
        {
            type: 'mcq',
            q: 'Câu 11: Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=\\mathrm{e}^x+2x$ thỏa mãn $F(0)=\\dfrac{3}{2}$. Tìm $F(x)$.',
            options: ['$F(x)=\\mathrm{e}^x+x^2+\\dfrac{1}{2}$', '$F(x)=\\mathrm{e}^x+x^2+\\dfrac{5}{2}$', '$F(x)=\\mathrm{e}^x+x^2+\\dfrac{3}{2}$', '$F(x)=2\\mathrm{e}^x+x^2-\\dfrac{1}{2}$'],
            ans: 0,
            explain: '$F(x)=\\mathrm{e}^x+x^2+C$. $F(0)=1+C=\\dfrac{3}{2} \\Rightarrow C=\\dfrac{1}{2}$.'
        },
        {
            type: 'mcq',
            q: 'Câu 12: Một viên đạn được bắn thẳng đứng lên trên. $v(t)=160-9{,}8t$ (m/s). Độ cao của viên đạn sau $t=10$ giây là',
            options: ['$620$ m', '$1\\,240$ m', '$555$ m', '$1\\,110$ m'],
            ans: 3,
            explain: '$S(t) = 160t - 4.9t^2$. $S(10) = 1600 - 490 = 1110$ m.'
        },

        // --- PHẦN 2: ĐÚNG SAI (4 CÂU) ---
        {
            type: 'tf',
            q: 'Câu 13: Cho hàm số $y=h(x)$ có đạo hàm $h\'(x)=3x^2$ và hàm số $y=g(x)$ có đạo hàm $g\'(x)=\\mathrm{e}^x$.',
            items: [
                {sub: 'Hàm số $y=h(x)=6x+C_1$, với $C_1\\in \\mathbb{R}$', ans: 'F'},
                {sub: 'Hàm số $y=g(x)=\\mathrm{e}^x+C_2$, với $C_2\\in \\mathbb{R}$', ans: 'T'},
                {sub: '$ I=\\displaystyle\\int \\left[xh\'(x)+2025\\right]\\mathrm{\\,d}x=\\dfrac{3}{4}{x^4}+2025x+C$', ans: 'T'},
                {sub: 'Cho $ f\'(x)=3x^2+\\mathrm{e}^x+m-1$. Cho $f(0)=2$; $ f(1)=2\\mathrm{e}$ thì giá trị của $m\\in (1;2)$', ans: 'T'}
            ],
            explain: 'a) Sai vì nguyên hàm của $3x^2$ là $x^3$.'
        },
        {
            type: 'tf',
            q: 'Câu 14: Cho các hàm số $g(x)=\\sin x$ , $h(x)=\\cos x$.',
            items: [
                {sub: '$\\displaystyle\\int \\left[2g(x)-3h(x)\\right]\\mathrm{\\,d}x=3\\displaystyle\\int g(x)\\mathrm{\\,d}x-2\\displaystyle\\int h(x)\\mathrm{\\,d}x$', ans: 'F'},
                {sub: 'Một nguyên của hàm số $g(x)$ là $-\\cos x$', ans: 'T'},
                {sub: 'Họ nguyên của hàm số $h(x)+2\\sqrt{x}$ là $\\sin x+\\dfrac{3}{2}\\sqrt{x^3}+C$', ans: 'F'},
                {sub: 'Họ nguyên hàm của hàm số $f(x)=g(x)\\cdot h^2(x)$ là $F(x)=-\\dfrac{1}{3}\\cos^3 x+C$', ans: 'T'}
            ],
            explain: 'a) Sai hệ số. c) Sai, phải là $\\frac{4}{3}x\\sqrt{x}$.'
        },
        {
            type: 'tf',
            q: 'Câu 15: Cho các hàm số $g(x)=\\dfrac{1}{x^2}$, $h(x)=\\ln (x+3)$.',
            items: [
                {sub: 'Biết $G(x)$ là một nguyên hàm của $g(x)$ và $ G(1)=1$. Khi đó $ G(2)=-\\dfrac{1}{2}$', ans: 'F'},
                {sub: '$ J=\\displaystyle\\int \\left[h(x)+\\ln\\dfrac{1}{x+3}+2025\\right]\\mathrm{\\,d}x=2025x+C$', ans: 'T'},
                {sub: '$I=\\displaystyle\\int x\\cdot h\'(x)\\mathrm{\\,d}x=x-\\ln (x+3)+C$ với $C\\in \\mathbb{R}$', ans: 'F'},
                {sub: 'Giả sử $F(x)$ là một nguyên hàm của $f(x)=\\dfrac{x+3}{g(x)}$ và $F(1)=\\dfrac{1}{4}$. Khi đó $F(-1)=-\\dfrac{7}{4}$', ans: 'T'}
            ],
            explain: 'a) Sai, tính ra $G(2)=1.5$.'
        },
        {
            type: 'tf',
            q: 'Câu 16: Cho các hàm số $g(x)=\\mathrm{e}^{\\dfrac{x}{2}}$, $h(x)=2x^3+5x^2-2x+4$.',
            items: [
                {sub: '$\\displaystyle\\int \\left[2g(x)+3h(x)\\right]\\mathrm{\\,d}x=2\\displaystyle\\int g(x)\\mathrm{\\,d}x+3\\displaystyle\\int h(x)\\mathrm{\\,d}x$', ans: 'T'},
                {sub: 'Một nguyên của hàm số $3\\cdot g^2(x)$ là $3\\mathrm{e}^x$', ans: 'T'},
                {sub: 'Họ nguyên của hàm số $h(x)$ là $\\dfrac{1}{4}{x^3}+\\dfrac{5}{3}{x^3}-x^2+C$', ans: 'F'},
                {sub: 'Biết $\\displaystyle\\int g^4(x)\\cdot h(x)\\mathrm{\\,d}x=(a{x^3}+b{x^2}+cx+d)\\mathrm{e}^{2x}+C$. Khi đó $ a+b+c+d=3$', ans: 'T'}
            ],
            explain: 'c) Sai vì nguyên hàm của $2x^3$ là $\\frac{1}{2}x^4$.'
        },

        // --- PHẦN 3: TRẢ LỜI NGẮN (6 CÂU) ---
        {
            type: 'short',
            q: 'Câu 17: Cho $F(x)$ là một nguyên hàm của hàm $f(x)=\\dfrac{\\cos 2x}{\\sin x+\\cos x}$ thỏa mãn $F(0)=1$. Tính $F(\\pi)$.',
            ans: '-1',
            explain: '$F(x)=\\sin x + \\cos x$. $F(\\pi) = -1$.'
        },
        {
            type: 'short',
            q: 'Câu 18: $F(x)$ là một nguyên hàm của hàm số $f(x)=2^x$, thỏa mãn $ F(0)=\\dfrac{1}{\\ln 2}$. Biểu thức $ F(0)+F(1)+\\ldots+F(2024)=\\dfrac{a^b-c}{\\ln a}$. Tính $ T=a+b-2c$.',
            ans: '2025',
            explain: 'Tính được $a=2, b=2025, c=1$. $T = 2+2025-2 = 2025$.'
        },
        {
            type: 'short',
            q: 'Câu 19: $F(x)$ là nguyên hàm của $f(x)=\\dfrac{(3x-1)^2}{x^2}$, đồ thị $y=F(x)$ đi qua $M(1;-2)$. Tính $F\\left(\\mathrm{e}^2\\right)$ (làm tròn đến hàng phần chục).',
            ans: '44,4', 
            explain: '$F(x)=9x-6\\ln|x|-1/x-10$. Kết quả xấp xỉ 44,4.'
        },
        {
            type: 'short',
            q: 'Câu 20: Ô tô chạy $90$ km/h, đạp phanh chậm dần $v(t)=-\\dfrac{25}{4}t+25$ (m/s). Quãng đường từ lúc phát hiện chướng ngại vật đến khi dừng hẳn là bao nhiêu mét?',
            ans: '100',
            explain: 'Quãng đường phản xạ: $25 \\times 2 = 50m$. Quãng đường phanh: $\\int_0^4 v(t)dt = 50m$. Tổng = 100m.'
        },
        {
            type: 'short',
            q: 'Câu 21: Vi khuẩn tăng trưởng $P\'(t)=k\\sqrt{t}$. Ban đầu 500 con, sau 1 ngày 600 con. Tính số lượng sau 9 ngày.',
            ans: '3200',
            explain: '$P(t)=150t\\sqrt{t} + 500$ (sau khi tìm k). $P(9) = 3200$.'
        },
        {
            type: 'short',
            q: 'Câu 22: Cây cà chua cao 5cm. Tốc độ lớn $ v(t)=-0{,}1t^3+t^2$. Chiều cao khi cây phát triển nhanh nhất là bao nhiêu? (làm tròn đến hàng phần chục).',
            ans: '54,4',
            explain: '$v(t)$ max tại $t=20/3$. $h(20/3) \\approx 54,4$ cm.'
        }
    ]
};
