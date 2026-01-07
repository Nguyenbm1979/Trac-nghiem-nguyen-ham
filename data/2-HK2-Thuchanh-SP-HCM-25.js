window.EXAM_DATA = {
    "title": "Đề Cuối HK2, Thực hành sư phạm, HCM, Năm 2024-2025",
    "subject": "Toan",
    "grade": "12",
    "time": 90,
    "password": "81dc9bdb52d04dc20036dbd8313ed055",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": true,
    "minTime": 0,
    "music": true,
    "allowPrint": true,
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
            "q": "Hàm số $F(x)=2x^3-2x+1$ là một nguyên hàm của hàm số nào sau đây?",
            "options": [
                "$f(x)=6x^2-2$",
                "$f(x)=\\dfrac{1}{2}x^4-x^2+x$",
                "$f(x)=\\dfrac{1}{2}x^4-x^2+x+C$",
                "$f(x)=6x^2-2+C$"
            ],
            "ans": 0,
            "explain": "Ta có $f(x)=F'(x)=\\left(2x^3-2x+1\\right)'=6x^2-2$.<br> Vậy $F(x)=2x^3-2x+1$ là một nguyên hàm của hàm số $f(x)=6x^2-2$.",
            "id": "2D4H1-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\displaystyle\\int\\limits_{0}^{2} f(x) \\mathrm{\\,d}x=4$, $\\displaystyle\\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x=3$. Giá trị của biểu thức $\\displaystyle\\int\\limits_{0}^{1} f(x) \\mathrm{\\,d}x$ bằng",
            "options": [
                "$7$",
                "$1$",
                "$12$",
                "$0{,}75$"
            ],
            "ans": 1,
            "explain": "Ta có \\begin{eqnarray*} & & \\displaystyle\\int\\limits_{0}^{2} f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{1} f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x<br> &\\Leftrightarrow & \\displaystyle\\int\\limits_{0}^{1} f(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{0}^{2} f(x) \\mathrm{\\,d}x-\\displaystyle\\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x=4-3=1. \\end{eqnarray*}",
            "id": "2D4N2-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Diện tích hình phẳng giới hạn bởi hai đường thẳng $x=0$, $x=\\pi$, đồ thị hàm số $y=\\cos x$ và trục $Ox$ là",
            "options": [
                "$S=\\displaystyle\\int\\limits_{0}^{\\pi} \\cos x \\mathrm{\\,d}x$",
                "$S=\\displaystyle\\int\\limits_{0}^{\\pi} \\cos^2 x \\mathrm{\\,d}x$",
                "$S=\\displaystyle\\int\\limits_{0}^{\\pi} \\left|\\cos x\\right| \\mathrm{\\,d}x$",
                "$S=\\pi\\displaystyle\\int\\limits_{0}^{\\pi} \\left|\\cos x\\right| \\mathrm{\\,d}x$"
            ],
            "ans": 2,
            "explain": "Ta có $S=\\displaystyle\\int\\limits_{0}^{\\pi} \\left|\\cos x\\right| \\mathrm{\\,d}x$.",
            "id": "2D4N3-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hàm số $y=f(x)$ có đồ thị như hình bên. Gọi $H$ là diện tích hình phẳng được tô màu. <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774582741_975.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Thể tích $V$ của khối tròn xoay được tạo thành khi quay hình phẳng $H$ quanh trục $Ox$ là",
            "options": [
                "$V=\\pi \\displaystyle\\int\\limits_{2}^{0} \\left[f(x)\\right]^2 \\mathrm{\\,d}x$",
                "$V= \\displaystyle\\int\\limits_{2}^{0} \\left[f(x)\\right]^2 \\mathrm{\\,d}x$",
                "$V= \\displaystyle\\int\\limits_{0}^{2} \\left[f(x)\\right]^2 \\mathrm{\\,d}x$",
                "$V=\\pi \\displaystyle\\int\\limits_{0}^{2} \\left[f(x)\\right]^2 \\mathrm{\\,d}x$"
            ],
            "ans": 3,
            "explain": "Ta có $V=\\pi \\displaystyle\\int\\limits_{0}^{2} \\left[f(x)\\right]^2 \\mathrm{\\,d}x$.",
            "id": "2D4N3-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, mặt phẳng $(P)\\colon 2x-y-3=0$ có một véc-tơ pháp tuyến là",
            "options": [
                "$\\vec{n}_1=(2;-1)$",
                "$\\vec{n}_2=(2;-1;-3)$",
                "$\\vec{n}_3=(2;-1;0)$",
                "$\\vec{n}_4=(-2;1;3)$"
            ],
            "ans": 2,
            "explain": "Một véc-tơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n}=(2;-1;0)$.",
            "id": "2H5N1-2",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, khoảng cách từ điểm $M\\left(x_0;y_0;z_0\\right)$ đến mặt phẳng $(P)\\colon ax+by+cz+d=0$ bằng",
            "options": [
                "$\\dfrac{\\left|ax_0+by_0+c\\right|}{\\sqrt{a^2+b^2}}$",
                "$\\dfrac{\\left|ax_0+by_0+cz_0+d\\right|}{\\sqrt{a^2+b^2+c^2}}$",
                "$\\dfrac{\\sqrt{a^2+b^2+c^2}}{\\left|ax_0+by_0+cz_0+d\\right|}$",
                "$\\dfrac{\\left|ax_0+by_0+cz_0+d\\right|}{a^2+b^2+c^2}$"
            ],
            "ans": 1,
            "explain": "Khoảng cách từ điểm $M\\left(x_0;y_0;z_0\\right)$ đến mặt phẳng $(P)\\colon ax+by+cz+d=0$ được tính theo công thức $$\\dfrac{\\left|ax_0+by_0+cz_0+d\\right|}{\\sqrt{a^2+b^2+c^2}}.$$",
            "id": "2H5N1-5",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, phương trình nào sau đây là phương trình tham số của đường thẳng?",
            "options": [
                "$\\left\\{\\begin{aligned}x=2+t^2\\\\y=3-t\\\\z=4+t\\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=2+y\\\\y=3-t^2\\\\z=-4+2t\\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=2+t\\\\y=3-t\\\\z=t^2\\end{aligned}\\right.$",
                "$\\left\\{\\begin{aligned}x=2+3t\\\\y=4+5t\\\\z=5+6t\\end{aligned}\\right.$"
            ],
            "ans": 3,
            "explain": "Trong các phương trình đã cho, phương trình tham số của đường thẳng là $\\left\\{\\begin{aligned}x=2+3t\\\\y=4+5t\\\\z=5+6t\\end{aligned}\\right.$.",
            "id": "2H5N2-1",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, cho hai mặt phẳng $(P)\\colon 2x-y-z-3=0$ và $(Q)\\colon x-z-2=0$. Tính góc giữa hai mặt phẳng $(P)$ và $(Q)$.",
            "options": [
                "$30^\\circ$",
                "$45^\\circ$",
                "$60^\\circ$",
                "$90^\\circ$"
            ],
            "ans": 0,
            "explain": "Hai mặt phẳng $(P)\\colon 2x-y-z-3=0$ và $(Q)\\colon x-z-2=0$ lần lượt có véc-tơ pháp tuyến là $\\vec{n}_P=(2;-1;-1)$, $\\vec{n}_Q=(1;0;-1)$.<br> Gọi $\\alpha$ là góc giữa hai mặt phẳng $(P)$ và $(Q)$. Ta có $$\\cos \\alpha=\\dfrac{\\left|\\vec{n}_P\\cdot \\vec{n}_Q\\right|}{\\left|\\vec{n}_P\\right|\\cdot \\left|\\vec{n}_Q\\right|}=\\dfrac{|2\\cdot 1+(-1)\\cdot 0+(-1)\\cdot (-1)|}{\\sqrt{2^2+(-1)^2+(-1)^2}\\cdot \\sqrt{1^2+0^2+(-1)^2}}=\\dfrac{\\sqrt{3}}{2}\\Rightarrow \\alpha=30^\\circ.$$",
            "id": "2H5H1-6",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, cho đường thẳng $d\\colon \\dfrac{x-3}{2}=\\dfrac{y-2}{1}=\\dfrac{z}{1}$ và mặt phẳng $(\\alpha)\\colon 3x+4y+5z+8=0$. Góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ có số đo là",
            "options": [
                "$30^\\circ$",
                "$45^\\circ$",
                "$60^\\circ$",
                "$90^\\circ$"
            ],
            "ans": 0,
            "explain": "Đường thẳng $d$ có véc-tơ chỉ phương là $\\vec{u}=(2;1;1)$.<br> Mặt phẳng $(\\alpha)$ có véc-tơ pháp tuyến là $\\vec{n}=(3;4;5)$.<br> Gọi $\\alpha$ là góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$. Ta có $$\\sin \\alpha=\\dfrac{\\left|\\vec{u}\\cdot \\vec{n}\\right|}{\\left|\\vec{u}\\right|\\cdot \\left|\\vec{n}\\right|}=\\dfrac{|2\\cdot 3+1\\cdot 4+1\\cdot 5|}{\\sqrt{2^2+1^2+1^2}\\cdot \\sqrt{3^2+4^2+5^2}}=\\dfrac{1}{2}\\Rightarrow \\alpha=30^\\circ.$$",
            "id": "2H5H2-7",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Trong không gian $Oxyz$, phương trình nào sau đây là phương trình mặt cầu có tâm $I(7;6;-5)$ và bán kính bằng $9$?",
            "options": [
                "$(x+7)^2+(y+6)^2+(z-5)^2=81$",
                "$(x+7)^2+(y+6)^2+(z-5)^2=9$",
                "$(x-7)^2+(y-6)^2+(z+5)^2=81$",
                "$(x-7)^2+(y-6)^2+(z+5)^2=9$"
            ],
            "ans": 2,
            "explain": "Mặt cầu có tâm $I(7;6;-5)$ và bán kính bằng $9$ có phương trình là $(x-7)^2+(y-6)^2+(z+5)^2=81.$",
            "id": "2H5N3-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Cho hai biến cố $A$, $B$ thỏa mãn $\\mathrm{P}(A)=0{,}4$, $\\mathrm{P}(B)=0{,}3$, $\\mathrm{P}\\left(A\\mid B\\right)=0{,}25$. Khi đó $\\mathrm{P}\\left(B\\mid A\\right)$ bằng",
            "options": [
                "$0{,}1875$",
                "$0{,}48$",
                "$0{,}333$",
                "$0{,}95$"
            ],
            "ans": 0,
            "explain": "Áp dụng công thức Bayes ta có $\\mathrm{P}\\left(B\\mid A\\right)=\\dfrac{\\mathrm{P}(B)\\cdot\\mathrm{P}\\left(A\\mid B\\right)}{\\mathrm{P}(A)}=\\dfrac{0{,}3\\cdot 0{,}25}{0{,}4}=0{,}1875$.",
            "id": "2D6H2-3",
            "point": "0.25"
        },
        {
            "type": "mcq",
            "q": "Một mảnh đất chia thành 2 khu vườn: Khu A có $300$ cây ăn quả, khu B có $400$ cây ăn quả. Trong đó, số cây cam ở khu A và khu B lần lượt là $200$ cây và $250$ cây. Chọn ngẫu nhiên 1 cây trong mảnh đất. Xác suất cây được chọn là cây cam, biết rằng cây đó ở khu $B$ là",
            "options": [
                "$\\dfrac{5}{14}$",
                "$\\dfrac{5}{9}$",
                "$\\dfrac{5}{8}$",
                "$\\dfrac{1}{2}$"
            ],
            "ans": 2,
            "explain": "Gọi $M$ là biến cố \\lq\\lq Cây được chọn là cây cam \\rq\\rq, $N$ là biến cố \\lq\\lq Cây được chọn ở khu B \\rq\\rq.<br> Ta có <br><b>-</b> $P(M\\cap N)=\\dfrac{250}{700}=\\dfrac{5}{14}$. <br><b>-</b> $P(N)=\\dfrac{400}{700}=\\dfrac{4}{7}$. Xác suất cây được chọn là cây cam, biết rằng cây đó ở khu $B$ là $$P\\left(M\\mid N\\right)=\\dfrac{P(M\\cap N)}{P(N)}=\\dfrac{\\dfrac{5}{14}}{\\dfrac{4}{7}}=\\dfrac{5}{8}.$$",
            "id": "2D6V1-2",
            "point": "0.25"
        },
        {
            "type": "tf",
            "q": "Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $(C)\\colon y=f(x)=6\\sqrt{x}-5$, đường thẳng $y=1$ và hai đường thẳng $x=1$, $x=4$.",
            "items": [
                {
                    "sub": "$\\displaystyle\\int f(x) \\mathrm{\\,d}x=4x\\sqrt{x}-5x+C$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int \\left[f(x)-1\\right] \\mathrm{\\,d}x=\\displaystyle\\int \\left(6\\sqrt{x}-6\\right) \\mathrm{\\,d}x=4x\\sqrt{x}-6x+C$",
                    "ans": "T"
                },
                {
                    "sub": "$\\displaystyle\\int\\limits_{1}^{4}\\left[f(x)-1\\right] \\mathrm{\\,d}x=6$",
                    "ans": "F"
                },
                {
                    "sub": "Diện tích của hình phẳng $(H)$ bằng 10",
                    "ans": "T"
                }
            ],
            "explain": "<br><b>-</b> Đúng.<br> Ta có \\begin{eqnarray*} \\displaystyle\\int f(x) \\mathrm{\\,d}x&=&\\displaystyle\\int \\left(6\\sqrt{x}-5\\right) \\mathrm{\\,d}x <br> &=& \\displaystyle\\int \\left(6x^{\\tfrac{1}{2}}-5\\right) \\mathrm{\\,d}x <br> &=& \\dfrac{6x^{\\tfrac{3}{2}}}{\\dfrac{3}{2}}-5x+C<br> &=& 4x\\sqrt{x}-5x+C. \\end{eqnarray*} <br><b>-</b> Đúng.<br> Ta có \\begin{eqnarray*} \\displaystyle\\int \\left[f(x)-1\\right] \\mathrm{\\,d}x&=&\\displaystyle\\int \\left(6\\sqrt{x}-6\\right) \\mathrm{\\,d}x <br> &=& \\displaystyle\\int \\left(6x^{\\tfrac{1}{2}}-6\\right) \\mathrm{\\,d}x <br> &=& \\dfrac{6x^{\\tfrac{3}{2}}}{\\dfrac{3}{2}}-6x+C<br> &=& 4x\\sqrt{x}-6x+C. \\end{eqnarray*} <br><b>-</b> Sai.<br> Ta có \\begin{eqnarray*} \\displaystyle\\int\\limits_{1}^{4}\\left[f(x)-1\\right] \\mathrm{\\,d}x&=& \\displaystyle\\int\\limits_{1}^{4}\\left(6\\sqrt{x}-6\\right) \\mathrm{\\,d}x<br> &=&\\left(4x\\sqrt{x}-6x\\right)\\bigg|_1^4 <br> &=& \\left(4\\cdot 4 \\cdot \\sqrt{4}-6\\cdot 4\\right)- \\left(4\\cdot 1 \\cdot \\sqrt{1}-6\\cdot 1\\right)<br> &=& 10 \\end{eqnarray*} <br><b>-</b> Đúng.<br> Diện tích hình phẳng $(H)$ là \\begin{eqnarray*} S&=&\\displaystyle\\int\\limits_{1}^{4} \\left|f(x)-1\\right| \\mathrm{\\,d}x<br> &=& \\displaystyle\\int\\limits_{1}^{4} \\left|6\\sqrt{x}-6\\right| \\mathrm{\\,d}x<br> &= & \\displaystyle\\int\\limits_{1}^{4} \\left(6\\sqrt{x}-6\\right) \\mathrm{\\,d}x<br> &=&10. \\end{eqnarray*}",
            "id": "2D4H3-1",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Trong không gian $Oxyz$, cho hai điểm $A(1;2;3)$, $B(0;1;-6)$ và mặt phẳng $(P)\\colon 4x-y+2 z+13=0$.",
            "items": [
                {
                    "sub": "Đường thẳng $AB$ và mặt phẳng $(P)$ cắt nhau tại $B$",
                    "ans": "T"
                },
                {
                    "sub": "Một véc-tơ chỉ phương của đường thẳng $AB$ là $\\vec{a}=(1;1;9)$",
                    "ans": "T"
                },
                {
                    "sub": "Góc (làm tròn đến hàng đơn vị của độ) giữa đường thẳng $AB$ và mặt phẳng $(P)$ là $30^\\circ$",
                    "ans": "T"
                },
                {
                    "sub": "Đường thẳng $\\Delta$ đi qua $A$ và vuông góc với mặt phẳng $(P)$ có phương trình chính tắc là $\\dfrac{x-1}{4}=\\dfrac{y-2}{-1}=\\dfrac{z-3}{2}$",
                    "ans": "T"
                }
            ],
            "explain": "<br><b>-</b> Đúng.<br> Thay tọa độ điểm $A$ vào phương trình mặt phẳng $(P)$ ta có $$4\\cdot 1-2+2\\cdot 3+13=21\\ne 0\\Rightarrow A\\notin (P).$$ Thay tọa độ điểm $B$ vào phương trình mặt phẳng $(P)$ ta có $$4\\cdot 0-1+2\\cdot (-6)+13=0\\Rightarrow B\\in (P).$$ Vậy đường thẳng $AB$ cắt mặt phẳng $(P)$ tại điểm $B$. <br><b>-</b> Đúng.<br> Đường thẳng $AB$ có một véc-tơ chỉ phương là $\\overrightarrow{BA}=(1;1;9)$. <br><b>-</b> Đúng.<br> Đường thẳng $AB$ có véc-tơ chỉ phương là $\\vec{u}=\\overrightarrow{BA}=(1;1;9)$.<br> Mặt phẳng $(P)$ có véc-tơ pháp tuyến là $\\vec{n}=(4;-1;2)$.<br> Gọi $\\alpha$ là góc giữa đường thẳng $AB$ và mặt phẳng $(\\alpha)$. Ta có $$\\sin \\alpha=\\dfrac{\\left|\\vec{u}\\cdot \\vec{n}\\right|}{\\left|\\vec{u}\\right|\\cdot \\left|\\vec{n}\\right|}=\\dfrac{|1\\cdot 4+1\\cdot (-1)+9\\cdot 2|}{\\sqrt{1^2+1^2+9^2}\\cdot \\sqrt{4^2+(-1)^2+2^2}}\\approx\\dfrac{1}{2}\\Rightarrow \\alpha\\approx 30^\\circ.$$ <br><b>-</b> Đúng.<br> Vì $\\Delta \\perp (P)$ nên $\\Delta$ có véc-tơ chỉ phương là $\\vec{a}=\\vec{n}=(4;-1;2)$.<br> Phương trình chính tắc của đường thẳng $\\Delta$ là $\\dfrac{x-1}{4}=\\dfrac{y-2}{-1}=\\dfrac{z-3}{2}$.",
            "id": "2H5H2-3",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=3$, $AD=4$, $AA'=5$. Chọn hệ trục toạ độ $Oxyz$ sao cho đỉnh $A$ trùng với gốc toạ độ $O$, đỉnh $B$ thuộc tia $Ox$, đỉnh $D$ thuộc tia $Oz$. Gọi $I$ là trung điểm của $CA'$.",
            "items": [
                {
                    "sub": "Tọa độ của đỉnh $B(-3;0;0)$",
                    "ans": "F"
                },
                {
                    "sub": "Các đỉnh của hình hộp chữ nhật thuộc mặt cầu tâm $I$",
                    "ans": "T"
                },
                {
                    "sub": "Toạ độ của điểm $I\\left(\\dfrac{3}{2};\\dfrac{5}{2};2\\right)$",
                    "ans": "T"
                },
                {
                    "sub": "Phương trình mặt cầu tâm $I$, bán kính $IB$ là $\\left(x-\\dfrac{3}{2}\\right)^2+\\left(y-\\dfrac{5}{2}\\right)^2+(z-2)^2=\\dfrac{25}{2}$",
                    "ans": "T"
                }
            ],
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774623461_934.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Ta có $A(0;0;0)$, $B(3;0;0)$, $A'(0;5;0)$, $D(0;0;4)$. <br><b>-</b> Sai.<br> Tọa độ đỉnh $B$ là $(3;0;0)$. <br><b>-</b> Đúng.<br> Tứ giác $DCB'A'$ là hình chữ nhật nên $IC=ID=IB'=IA'$.\\quad(1)<br> Tứ giác $D'C'BA$ là hình chữ nhật nên $ID'=IC'=IB=IA$.\\quad(2)<br> Tứ giác $CD'A'B$ là hình chữ nhật nên $IC=ID'$.\\quad(3)<br> Từ (1), (2), (3) suy ra $IA=IB=IC=ID=IA'=IB'=IC'=ID'$.<br> Suy ra các đỉnh của hình hộp chữ nhật thuộc mặt cầu tâm $I$. <br><b>-</b> Đúng.<br> Vì tứ giác $AA'B'B$ là hình chữ nhật nên ta có $$\\overrightarrow{BB'}=\\overrightarrow{AA'}\\Leftrightarrow \\left\\{\\begin{aligned}x_{B'}-3=0-0\\\\y_{B'}-0=5-0\\\\z_{B'}-0=0-0\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}x_{B'}=3\\\\y_{B'}=5\\\\z_{B'}=0\\end{aligned}\\right.\\Rightarrow B'(3;5;0).$$ Vì $I$ là trung điểm của $DB'$ nên ta có $\\left\\{\\begin{aligned}x_I=\\dfrac{0+3}{2}=\\dfrac{3}{2}\\\\y_I=\\dfrac{0+5}{2}=\\dfrac{5}{2}\\\\z_I=\\dfrac{4+0}{2}=2\\end{aligned}\\right.\\Rightarrow I\\left(\\dfrac{3}{2};\\dfrac{5}{2};2\\right)$. <br><b>-</b> Đúng.<br> Bán kính mặt cầu là $$R=IB=\\sqrt{\\left(3-\\dfrac{3}{2}\\right)^2+\\left(0-\\dfrac{5}{2}\\right)^2+\\left(0-2\\right)^2}=\\dfrac{5\\sqrt{2}}{2}.$$ Phương trình mặt cầu có tâm $I$ và bán kính $IB$ là $$\\left(x-\\dfrac{3}{2}\\right)^2+\\left(y-\\dfrac{5}{2}\\right)^2+(z-2)^2=\\dfrac{25}{2}.$$",
            "id": "2H5H3-3",
            "point": "1"
        },
        {
            "type": "tf",
            "q": "Một đội văn nghệ của một trường phổ thông gồm có $45$ học sinh, trong đó có $22$ học sinh nam và $23$ học sinh nữ. Có $28$ bạn biết đánh đàn (trong đó có $12$ nam và $16$ nữ) và $17$ bạn không biết đánh đàn (trong đó có $10$ nam và $7$ nữ). Chọn ngẫu nhiên một bạn học sinh trong đội văn nghệ. Gọi $A$ là biến cố học sinh được chọn là nam, $B$ là biến cố học sinh được chọn biết đánh đàn.",
            "items": [
                {
                    "sub": "$\\mathrm{P}(A)=\\dfrac{22}{45}$",
                    "ans": "T"
                },
                {
                    "sub": "$\\mathrm{P}(B)=\\dfrac{28}{45}$",
                    "ans": "T"
                },
                {
                    "sub": "$\\mathrm{P}\\left(A \\mid B\\right)=\\dfrac{10}{22}$",
                    "ans": "F"
                },
                {
                    "sub": "$\\mathrm{P}\\left(B \\mid \\bar{A}\\right)=\\dfrac{7}{17}$",
                    "ans": "F"
                }
            ],
            "explain": "<br><b>-</b> Đúng.<br> Vì $n\\left(\\Omega\\right)=45$, $n(A)=22$ nên $\\mathrm{P}(A)=\\dfrac{n(A)}{n\\left(\\Omega\\right)}=\\dfrac{22}{45}$. <br><b>-</b> Đúng.<br> Vì $n\\left(\\Omega\\right)=45$, $n(B)=28$ nên $P\\mathrm{P}(B)=\\dfrac{n(B)}{n\\left(\\Omega\\right)}=\\dfrac{28}{45}$. <br><b>-</b> Sai.<br> Vì $n\\left(A\\cap B\\right)=12$, $n(B)=28$ nên $\\mathrm{P}\\left(A\\mid B\\right)=\\dfrac{n\\left(A\\cap B\\right)}{n(B)}=\\dfrac{12}{28}=\\dfrac{3}{7}$. <br><b>-</b> Sai.<br> Vì $n\\left(B\\cap \\bar{A}\\right)=16$, $n\\left(\\bar{A}\\right)=23$ nên $\\mathrm{P}\\left(B\\mid \\bar{A}\\right)=\\dfrac{n\\left(B\\cap \\bar{A}\\right)}{n\\left(\\bar{A}\\right)}=\\dfrac{16}{23}$.",
            "id": "2D6V1-2",
            "point": "1"
        },
        {
            "type": "short",
            "q": "Cho hàm số $F(x)$ là một nguyên hàm của hàm số $f(x)=\\left(x^2-2\\right)(2 x+1)$ và $F(-1)=\\dfrac{1}{6}$. Tính $F\\left(-\\dfrac{1}{2}\\right)$ (viết kết quả dưới dạng số thập phân và làm tròn đến hàng phần trăm).",
            "ans": "$0{,}49$",
            "explain": "Ta có $f(x)=\\left(x^2-2\\right)(2 x+1)=2x^3+x^2-4x-2$.<br> \\begin{eqnarray*} \\displaystyle\\int\\limits_{-1}^{-\\tfrac{1}{2}} f(x) \\mathrm{\\,d}x &= & \\displaystyle\\int\\limits_{-1}^{-\\tfrac{1}{2}} \\left(2x^3+x^2-4x-2\\right) \\mathrm{\\,d}x<br> &= & \\left(\\dfrac{x^4}{2}+\\dfrac{x^3}{3}-2x^2-2x\\right)\\bigg|_{-1}^{-\\tfrac{1}{2}}<br> &= & \\dfrac{31}{96}. \\end{eqnarray*} Mặt khác ta có $F\\left(-\\dfrac{1}{2}\\right)-F(-1)=\\displaystyle\\int\\limits_{-1}^{-\\tfrac{1}{2}} f(x) \\mathrm{\\,d}x\\Leftrightarrow F\\left(-\\dfrac{1}{2}\\right)=\\displaystyle\\int\\limits_{-1}^{-\\tfrac{1}{2}} f(x) \\mathrm{\\,d}x+F(-1)=\\dfrac{31}{96}+\\dfrac{1}{6}\\approx 0{,}49$.",
            "id": "2D4V2-2",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Gọi $H_1$; $H_2$; $H_3$; $H_4$ là các hình phẳng giới hạn bởi đồ thị hàm số liên tục $y=f(x)$ và trục hoành với $x$ lần lượt thuộc các đoạn $[1;2]$, $[2;3]$, $[3;4]$, $[4;5]$ <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774663327_884.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">. Biết rằng các hình $H_1$; $H_2$; $H_3$; $H_4$ lần lượt có diện tích bằng $\\dfrac{9}{4}$, $\\dfrac{11}{12}$, $\\dfrac{11}{12}$, $\\dfrac{9}{4}$. Giá trị $\\displaystyle\\int\\limits_{1}^{5} f(x) \\mathrm{\\,d}x$ bằng bao nhiêu?",
            "ans": "$0$",
            "explain": "Ta có \\begin{eqnarray*} \\displaystyle\\int\\limits_{1}^{5} f(x) \\mathrm{\\,d}x &= & \\displaystyle\\int\\limits_{1}^{2} f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{2}^{3} f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{3}^{4} f(x) \\mathrm{\\,d}x+\\displaystyle\\int\\limits_{4}^{5} f(x) \\mathrm{\\,d}x<br> &= & \\dfrac{9}{4}-\\dfrac{11}{12}+\\dfrac{11}{12}-\\dfrac{9}{4}<br> &=& 0. \\end{eqnarray*} Vậy $\\displaystyle\\int\\limits_{1}^{5} f(x) \\mathrm{\\,d}x=0$.",
            "id": "2D4H3-1",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Bạn Hải nhận thiết kế logo hình con mắt (phần được tô đậm) cho một cơ sở y tế: Logo là hình phẳng giới hạn bởi hai parabol $y=f(x)$ và $y=g(x)$ như hình vẽ (đơn vị trên mỗi trục toạ độ là decimét). <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774702666_702.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Bạn Hải cần tính diện tích của logo để báo giá cho cơ sở y tế đó trước khi kí hợp đồng. Diện tích của logo là bao nhiêu decimét vuông (làm tròn kết quả đến hàng phần mười).",
            "ans": "$9{,}8$",
            "explain": "Đặt $f(x)=ax^2+bx+c$ $(a\\ne 0)$. Theo hình vẽ ta thấy đồ thị hàm số $y=f(x)$ nhận trục $Oy$ làm trục đối xứng, cắt trục $Oy$ tại điểm có tung độ bằng $-1$ và đi qua điểm $(2;0)$. Ta có hệ phương trình: $$\\left\\{\\begin{aligned}-\\dfrac{b}{2a}=0\\\\c=-1\\\\4a+2b+c=0\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}a=\\dfrac{1}{4}\\\\b=0\\\\c=-1\\end{aligned}\\right.\\Rightarrow f(x)=\\dfrac{1}{4}x^2-1.$$ Đặt $g(x)=mx^2+nx+p$ $(m\\ne 0)$. Theo hình vẽ ta thấy đồ thị hàm số $y=g(x)$ nhận trục $Oy$ làm trục đối xứng, cắt trục $Oy$ tại điểm có tung độ bằng $2$ và đi qua điểm $(2;1)$. Ta có hệ phương trình: $$\\left\\{\\begin{aligned}-\\dfrac{n}{2m}=0\\\\p=2\\\\4m+2n+p=1\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}m=-\\dfrac{1}{4}\\\\n=0\\\\p=2\\end{aligned}\\right.\\Rightarrow g(x)=-\\dfrac{1}{4}x^2+2.$$ Ta có $\\dfrac{1}{4}x^2-1=-\\dfrac{1}{4}x^2+2\\Leftrightarrow \\dfrac{1}{2}x^2-3=0\\Leftrightarrow x=\\pm \\sqrt{6}$.<br> Diện tích của logo là $S=\\displaystyle\\int\\limits_{\\sqrt{6}}^{\\sqrt{6}} \\left|f(x)-g(x)\\right| \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-\\sqrt{6}}^{\\sqrt{6}} \\left|\\dfrac{1}{2}x^2-3\\right| \\mathrm{\\,d}x\\approx 9{,}8\\left(\\text{dm}^2\\right)$.",
            "id": "2D4V3-2",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Trong không gian $Oxyz$, cho các điểm $A(2;2;0)$, $B(2;0;-2)$ và mặt phẳng $(P)\\colon x+2y-z-1=0$. Xét điểm $M(a;b;c)$ thuộc mặt phẳng $(P)$ sao cho $MA=MB$ và số đo góc $\\widehat{AMB}$ lớn nhất. Khi đó giá trị $a+b+c$ (làm tròn đến hàng phần trăm) bằng bao nhiêu?",
            "ans": "$1{,}27$",
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774760897_631.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Gọi $K$ là trung điểm của $AB\\Rightarrow K(2;1;-1)$.<br> Vì $MA=MB$ nên $M$ thuộc mặt phẳng $(Q)$ là mặt phẳng trung trực của đoạn $AB$.<br> Mặt phẳng $(Q)$ đi qua điểm $K(2;1;-1)$ và nhận <br> véc-tơ $\\overrightarrow{AB}=(0;-2;-2)$ làm véc-tơ pháp tuyến.<br> Phương trình mặt phẳng $(Q)$ là<br> $0(x-2)-2(y-1)-2(z+1)=0\\Leftrightarrow y+z=0$.<br> Tọa độ điểm $M$ thỏa mãn hệ phương trình<br> $\\left\\{\\begin{aligned}x+2y-z-1=0\\\\y+z=0\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}x=1-3t\\\\y=t\\\\z=-t.\\end{aligned}\\right.$<br> $\\Rightarrow M(1-3t;t;-t)$.  Vì tam giác $AMB$ cân tại $M$ nên $\\widehat{AMB}=2\\widehat{AMK}$.<br> Mà $0^\\circ<\\widehat{AMK}<90^\\circ$ nên số đo góc $\\widehat{AMK}$ lớn nhất khi và chỉ khi $\\sin \\widehat{AMK}$ lớn nhất.<br> Lại có $\\sin \\widehat{AMK}=\\dfrac{AK}{AM}$, mà $AK$ cố định nên $\\sin \\widehat{AMK}$ đạt giá trị lớn nhất khi và chỉ khi $AM$ đạt giá trị nhỏ nhất.<br> Ta có $AM=\\sqrt{(1-3t-2)^2+(t-2)^2+(-t-0)^2}=\\sqrt{11t^2+2t+5}$.<br> Hàm số $f(t)=11t^2+2t+5$ đạt giá trị nhỏ nhất bằng $\\dfrac{54}{11}$ khi $t=-\\dfrac{1}{11}$.<br> Vậy $M\\left(\\dfrac{14}{11};-\\dfrac{1}{11};\\dfrac{1}{11}\\right)$.<br> Khi đó $a+b+c=\\dfrac{14}{11}-\\dfrac{1}{11}+\\dfrac{1}{11}=\\dfrac{14}{11}\\approx1{,}27$.",
            "id": "2H5C1-2",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "E-mail Filter là một phần mềm chặn email quảng cáo. Nếu một email là thư quảng cáo, phần mềm sẽ chuyển nó vào thư mục Spam với xác suất là $0{,}9$. Ngược lại, nếu một email không là thư quảng cáo, phần mềm có thể chuyển nó vào thư mục Spam với xác suất $0{,}05$. Thống kê trong một số lượng lớn email bị chuyển vào thư mục Spam thì thấy tỉ lệ thư quảng cáo là $72 \\%$. Xác suất một email là thư quảng cáo là bao nhiêu? (Làm tròn kết quả đến hàng phần trăm)",
            "ans": "$0{,}13$",
            "explain": "Chọn ngẫu nhiên một email. Gọi $A$ là biến cố \\lq\\lq Email đó là thư quảng cáo \\rq\\rq, $B$ là biến cố \\lq\\lq E-mail Filter chuyển email đó vào thư mục Spam \\rq\\rq.<br> Ta có $P\\left(B\\mid A\\right)=0{,}9$; $P\\left(B\\mid \\bar{A}\\right)=0{,}05$; $P\\left(A\\mid B\\right)=0{,}72$.<br> Đặt $P(A)=p\\in [0;1]$.<br> Áp dụng công thức Bayes ta có \\begin{eqnarray*} & & P\\left(A\\mid B\\right)=\\dfrac{P(A)P\\left(B\\mid A\\right)}{P(A)P\\left(B\\mid A\\right)+P\\left(\\bar{A}\\right)P\\left(B\\mid \\bar{A}\\right)}<br> &\\Leftrightarrow & 0{,}72=\\dfrac{0{,}9p}{0{,}9p+0{,}05(1-p)}<br> &\\Leftrightarrow & \\dfrac{81}{125}p+\\dfrac{9}{250}-\\dfrac{9}{250}p-\\dfrac{9}{10}p=0<br> &\\Leftrightarrow & -\\dfrac{36}{125}p+\\dfrac{9}{250}=0<br> &\\Leftrightarrow & p=0{,}125\\approx 0{,}13. \\end{eqnarray*}",
            "id": "2D6V2-3",
            "point": "0.5"
        },
        {
            "type": "short",
            "q": "Trong khối pha lê hình lập phương $ABCD.A'B'C'D'$ cạnh $8$ cm có mặt cầu cách đều các mặt của hình lập phương $ABCD.A'B'C'D'$ một khoảng $1$ cm. Chọn hệ trục tọa độ $Oxyz$ sao cho đỉnh $A$ trùng với gốc toạ độ $O$, đỉnh $B$ thuộc tia $Ox$, đỉnh $D$ thuộc tia $Oy$, đỉnh $A'$ thuộc tia $Oz$. Khi đó, phương trình của mặt cầu bên trong khối pha lê hình lập phương là $x^2+y^2+z^2+2ax+2by+2cz+d=0$. Tìm giá trị của $a+b+c+d$.<br><img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774801041_644.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\">",
            "ans": "$51$",
            "explain": "<img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1767774824437_158.png\" style=\"max-width:100%;margin-top:10px;border-radius:5px\"> Ta có $A(0;0;0)$, $B(8;0;0)$, $D(0;8;0)$, $A'(0;0;8)$.<br> Vì tứ giác $ABCD$ là hình bình hành nên ta có $$\\overrightarrow{AB}=\\overrightarrow{DC}\\Leftrightarrow \\left\\{\\begin{aligned}8-0=x_C-0\\\\0-0=y_C-8\\\\0-0=z_C-0\\end{aligned}\\right.\\Leftrightarrow \\left\\{\\begin{aligned}x_C=8\\\\y_C=8\\\\z_C=0\\end{aligned}\\right.\\Rightarrow C(8;8;0).$$ Gọi $I$ là tâm mặt cầu cần viết phương trình.<br> Ta có $I$ là trung điểm của $A'C\\Rightarrow I(4;4;4)$.<br> Bán kính mặt cầu là $R=\\dfrac{8}{2}-1=3$ (cm).<br> Khi đó ta có $a=4$, $b=4$, $c=4$, $d=a^2+b^2+c^2-R^2=39$.<br> Vậy $a+b+c+d=51.$ ",
            "id": "2H5H3-3",
            "point": "0.5"
        }
    ]
};
