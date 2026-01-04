window.EXAM_DATA = {
    "title": "Đề Minh Họa V-Sat, Đại Học Cần Thơ, Năm 2025",
    "time": 45,
    "password": "",
    "encrypted": false,
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
            "type": "tf",
            "q": "Cho dãy số $(u_n)$ biết $u_n=2n+3, \\forall n \\in \\mathbb{N}^*$.",
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
            "explain": "Ta có $u_{n+1}-u_n = [2(n+1)+3] - (2n+3) = 2$ là hằng số.<br><ul><li>Dãy số là cấp số cộng với công sai $d=2$.</li><li>Vì $d=2>0$ nên dãy số là dãy tăng.</li><li>Với mọi $n \\in \\mathbb{N}^*$, ta có $n \\ge 1 \\Rightarrow u_n = 2n+3 \\ge 5$. Dãy số bị chặn dưới bởi $5$.</li><li>Vì $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$ nên dãy số không bị chặn trên.</li></ul>"
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
            "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}\\setminus\\{-1\\}$.<br><ul><li>Tiệm cận đứng của đồ thị hàm số là đường thẳng $x=-1$.</li><li>Vì $\\lim\\limits_{x \\to \\pm\\infty} y = 2$ nên tiệm cận ngang là đường thẳng $y=2$.</li><li>Xét phương trình $\\dfrac{2x-1}{x+1} = -1 \\Rightarrow 2x-1 = -x-1 \\Leftrightarrow 3x=0 \\Leftrightarrow x=0$ (thỏa mãn). Vậy $(C)$ chứa điểm $(0;-1)$.</li><li>Xét phương trình $\\dfrac{2x-1}{x+1} = 0 \\Rightarrow 2x-1=0 \\Leftrightarrow x=\\dfrac{1}{2}$ (thỏa mãn). Vậy $(C)$ chứa điểm $\\left(\\dfrac{1}{2};0\\right)$.</li></ul>"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$ cho đường thẳng $(d):\\left\\{\\begin{aligned}x&=1-2t\\\\y&=3+t\\\\z&=2\\end{aligned}\\right.$.",
            "items": [
                {
                    "sub": "Một vec-tơ chỉ phương của đường thẳng $(d)$ là $\\overrightarrow{u}(-2;1;2)$",
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
            "explain": "Đường thẳng $(d)$ đi qua điểm $M_0(1;3;2)$ và có một vec-tơ chỉ phương $\\overrightarrow{u_d}=(-2;1;0)$.<br><ul><li>Vec-tơ chỉ phương là $(-2;1;0)$, khác với $(-2;1;2)$.</li><li>Ứng với $t=0$, ta có điểm $(1;3;2) \\in (d)$.</li><li>Trục $Oz$ có vec-tơ đơn vị $\\overrightarrow{k}=(0;0;1)$. Ta có $\\overrightarrow{u_d} \\cdot \\overrightarrow{k} = -2\\cdot0 + 1\\cdot0 + 0\\cdot1 = 0 \\Rightarrow (d) \\perp Oz$.</li><li>Trục $Oy$ có vec-tơ đơn vị $\\overrightarrow{j}=(0;1;0)$.<br>$\\cos \\alpha = \\dfrac{|\\overrightarrow{u_d} \\cdot \\overrightarrow{j}|}{|\\overrightarrow{u_d}| \\cdot |\\overrightarrow{j}|} = \\dfrac{|-2\\cdot0 + 1\\cdot1 + 0\\cdot0|}{\\sqrt{(-2)^2+1^2+0^2} \\cdot 1} = \\dfrac{1}{\\sqrt{5}}$.</li></ul>"
        },
        {
            "type": "tf",
            "q": "Bảng sau đây tóm tắt kết quả phân tích quá trình tự phân hủy (sự phá hủy tế bào sau khi tế bào chết do hoạt động của các enzym của chính tế bào) và sự thối rữa (sự phân hủy chất hữu cơ, đặc biệt là protein, bởi vi sinh vật dẫn đến tạo ra mùi hôi thối) của các con bọ cánh cứng chết:<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767533636184_912.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"><br>Chọn ngẫu nhiên một con bọ cánh cứng trong các mẫu phân tích trên.",
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
            "explain": "Tổng số mẫu phân tích là $n(\\Omega) = 14 + 59 + 18 + 9 = 100$.<br>Gọi $A$ là biến cố \"Mẫu có quá trình tự phân hủy cao\". Ta có $n(A) = 14 + 18 = 32$.<br>Gọi $B$ là biến cố \"Mẫu có độ thối rữa cao\". Ta có $n(B) = 14 + 59 = 73$.<br>Suy ra biến cố mẫu có độ thối rữa thấp là $\\overline{B}$ và $n(\\overline{B}) = 18 + 9 = 27$.<br><ul><li>Xác suất để mẫu chọn ra có quá trình tự phân hủy cao là $\\mathrm{P}(A) = \\dfrac{32}{100} = \\dfrac{8}{25} \\ne \\dfrac{7}{50}$.</li><li>Biến cố \"Tự phân hủy cao và độ thối rữa thấp\" là $A \\cap \\overline{B}$. Ta có $n(A \\cap \\overline{B}) = 18$.<br>Xác suất cần tìm là $\\dfrac{18}{100} = \\dfrac{9}{50}$.</li><li>Xác suất để thối rữa thấp biết rằng tự phân hủy cao là xác suất có điều kiện:<br>$$\\mathrm{P}(\\overline{B}|A) = \\dfrac{n(A \\cap \\overline{B})}{n(A)} = \\dfrac{18}{32} = \\dfrac{9}{16}.$$</li><li>Xác suất để tự phân hủy cao biết rằng thối rữa cao là:<br>$$\\mathrm{P}(A|B) = \\dfrac{n(A \\cap B)}{n(B)} = \\dfrac{14}{73}.$$</li></ul>"
        }
    ]
};