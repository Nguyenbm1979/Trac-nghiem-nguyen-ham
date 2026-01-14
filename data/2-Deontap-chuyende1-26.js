window.EXAM_DATA = {
    "title": "Đề ôn tập chuyên đề 1, Toán 12, Năm 2026",
    "subject": "Toan",
    "grade": "12",
    "time": 60,
    "password": "4a26798897293c5777e46320efb103e6",
    "encrypted": false,
    "shuffle": false,
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
            "q": "Cho $X$ là biến ngẫu nhiên rời rạc nhận các giá trị $x_1, x_2, \\dots, x_n$ với xác suất tương ứng $p_i = \\mathrm{P}(X=x_i)$ ($i=1, 2, \\dots, n$). Kỳ vọng của $X$, kí hiệu là $\\mathrm{E}(X)$, được tính bằng công thức nào sau đây?",
            "options": [
                "$\\mathrm{E}(X) = x_1 + x_2 + \\dots + x_n$",
                "$\\mathrm{E}(X) = x_1p_1 + x_2p_2 + \\dots + x_np_n$",
                "$\\mathrm{E}(X) = p_1 + p_2 + \\dots + p_n$",
                "$\\mathrm{E}(X) = (x_1+p_1) + (x_2+p_2) + \\dots + (x_n+p_n)$"
            ],
            "ans": 1,
            "explain": "Theo định nghĩa, kỳ vọng của biến ngẫu nhiên rời rạc $X$ là một số được tính theo công thức: $$\\mathrm{E}(X) = x_1p_1 + x_2p_2 + \\dots + x_np_n.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Cho biến ngẫu nhiên rời rạc $X$ có kỳ vọng $\\mu = \\mathrm{E}(X)$ và tập các giá trị $\\{x_1; x_2; \\dots; x_n\\}$ với xác suất tương ứng $p_i = \\mathrm{P}(X=x_i)$. Công thức tính phương sai $\\mathrm{V}(X)$ là",
            "options": [
                "$\\mathrm{V}(X) = \\sqrt{(x_1-\\mu)^2p_1 + (x_2-\\mu)^2p_2 + \\dots + (x_n-\\mu)^2p_n}$",
                "$\\mathrm{V}(X) = (x_1-\\mu)p_1 + (x_2-\\mu)p_2 + \\dots + (x_n-\\mu)p_n$",
                "$\\mathrm{V}(X) = (x_1-\\mu)^2p_1 + (x_2-\\mu)^2p_2 + \\dots + (x_n-\\mu)^2p_n$",
                "$\\mathrm{V}(X) = (x_1-\\mu)^2 + (x_2-\\mu)^2 + \\dots + (x_n-\\mu)^2$"
            ],
            "ans": 2,
            "explain": "Phương sai của $X$, kí hiệu là $\\mathrm{V}(X)$, là số thực được tính theo công thức: $$\\mathrm{V}(X) = (x_1 - \\mu)^2p_1 + (x_2 - \\mu)^2p_2 + \\dots + (x_n - \\mu)^2p_n.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Cho biến ngẫu nhiên $X$ có phương sai là $\\mathrm{V}(X)$. Độ lệch chuẩn của $X$, kí hiệu là $\\sigma(X)$, có mối liên hệ như thế nào với phương sai?",
            "options": [
                "$\\sigma(X) = [\\mathrm{V}(X)]^2$",
                "$\\sigma(X) = \\mathrm{V}(X)$",
                "$\\sigma(X) = \\sqrt{\\mathrm{V}(X)}$",
                "$\\mathrm{V}(X) = \\sqrt{\\sigma(X)}$"
            ],
            "ans": 2,
            "explain": "Căn bậc hai (số học) của phương sai, kí hiệu là $\\sigma(X)$, được gọi là độ lệch chuẩn của $X$. Ta có công thức: $\\sigma(X) = \\sqrt{\\mathrm{V}(X)}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Cho biến ngẫu nhiên $X$ tuân theo phân phối nhị thức $B(n; p)$ với $0 < p < 1$. Theo lý thuyết, công thức tính phương sai $V(X)$ và độ lệch chuẩn $\\sigma(X)$ nào sau đây là đúng?",
            "options": [
                "$V(X) = np$ và $\\sigma(X) = \\sqrt{np}$",
                "$V(X) = np(1-p)$ và $\\sigma(X) = np(1-p)$",
                "$V(X) = np(1-p)$ và $\\sigma(X) = \\sqrt{np(1-p)}$",
                "$V(X) = p(1-p)$ và $\\sigma(X) = \\sqrt{p(1-p)}$"
            ],
            "ans": 2,
            "explain": "Dựa vào chú ý về các số đặc trưng của phân phối nhị thức: Nếu $X \\sim B(n; p)$ thì: <br><b>-</b> Kỳ vọng: $E(X) = np$. <br><b>-</b> Phương sai: $V(X) = np(1-p)$. <br><b>-</b> Độ lệch chuẩn: $\\sigma(X) = \\sqrt{V(X)} = \\sqrt{np(1-p)}$. Vậy khẳng định đúng là $V(X) = np(1-p)$ và $\\sigma(X) = \\sqrt{np(1-p)}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Cho $X$ là biến ngẫu nhiên tuân theo phân phối nhị thức $X \\sim B(n; p)$. Với mỗi số nguyên dương $k$ ($1 \\le k \\le n$), công thức tính xác suất để $X$ nhận giá trị lớn hơn hoặc bằng $k$ là",
            "options": [
                "$P(X \\ge k) = \\mathrm{C}_n^k p^k (1-p)^{n-k}$",
                "$P(X \\ge k) = \\sum\\limits_{i=0}^{k} \\mathrm{C}_n^i p^i (1-p)^{n-i}$",
                "$P(X \\ge k) = \\mathrm{C}_n^k p^k (1-p)^{n-k} + \\mathrm{C}_n^{k+1} p^{k+1} (1-p)^{n-k-1} + \\dots + \\mathrm{C}_n^n p^n$",
                "$P(X \\ge k) = \\mathrm{C}_n^0 (1-p)^n + \\dots + \\mathrm{C}_n^k p^k (1-p)^{n-k}$"
            ],
            "ans": 2,
            "explain": "Theo công thức xác suất của phân phối nhị thức, xác suất để $X \\ge k$ là tổng xác suất của các trường hợp $X$ nhận giá trị từ $k$ đến $n$. Ta có: $$P(X \\ge k) = P(X=k) + P(X=k+1) + \\dots + P(X=n)$$ $$P(X \\ge k) = \\mathrm{C}_n^k p^k (1-p)^{n-k} + \\mathrm{C}_n^{k+1} p^{k+1} (1-p)^{n-k-1} + \\dots + \\mathrm{C}_n^n p^n.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xét phép thử $T$ được thực hiện lặp lại $n$ lần một cách độc lập. Trong mỗi lần thực hiện phép thử, xác suất xuất hiện biến cố $E$ là $p$ ($0 < p < 1$). Xác suất để biến cố $E$ xuất hiện đúng $k$ lần ($0 \\le k \\le n$) được tính theo công thức Bernoulli là",
            "options": [
                "$P_k = \\mathrm{A}_n^k p^k (1-p)^{n-k}$",
                "$P_k = \\mathrm{C}_n^k p^{n-k} (1-p)^k$",
                "$P_k = \\mathrm{C}_n^k p^k (1-p)^{n-k}$",
                "$P_k = p^k (1-p)^{n-k}$"
            ],
            "ans": 2,
            "explain": "Theo lý thuyết về phép thử lặp và công thức Bernoulli:<br> Nếu phép thử $T$ được lặp lại $n$ lần độc lập và xác suất thành công (xuất hiện biến cố $E$) trong mỗi lần là $p$, thì xác suất để biến cố $E$ xuất hiện đúng $k$ lần là: $$P_k = \\mathrm{C}_n^k \\cdot p^k \\cdot (1-p)^{n-k}$$ Trong đó: <br><b>-</b> $\\mathrm{C}_n^k$ là số cách chọn ra $k$ lần biến cố $E$ xuất hiện trong $n$ lần thử. <br><b>-</b> $p^k$ là xác suất để biến cố $E$ xuất hiện $k$ lần. <br><b>-</b> $(1-p)^{n-k}$ là xác suất để biến cố $E$ không xuất hiện trong $n-k$ lần còn lại.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Giả sử số ca cấp cứu ở một bệnh viện vào tối thứ Bảy là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355415884_578.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Tính xác suất để xảy ra ít nhất một ca cấp cứu ở bệnh viện đó vào tối thứ Bảy.",
            "options": [
                "$0{,}12$",
                "$0{,}28$",
                "$0{,}88$",
                "$0{,}78$"
            ],
            "ans": 2,
            "explain": "Xác suất để xảy ra ít nhất một ca cấp cứu là $\\mathrm{P}(X \\ge 1)$.<br> Ta có: $\\mathrm{P}(X \\ge 1) = 1 - \\mathrm{P}(X < 1) = 1 - \\mathrm{P}(X=0)$.<br> Theo bảng phân bố xác suất, $\\mathrm{P}(X=0) = 0{,}12$.<br> Vậy $\\mathrm{P}(X \\ge 1) = 1 - 0{,}12 = 0{,}88$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Giả sử số ca cấp cứu ở một bệnh viện vào tối thứ Bảy là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355415884_578.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Biết rằng nếu có hơn $3$ ca cấp cứu thì bệnh viện phải tăng cường thêm bác sĩ trực. Tính xác suất phải tăng cường bác sĩ trực vào tối thứ Bảy ở bệnh viện đó.",
            "options": [
                "$0{,}10$",
                "$0{,}19$",
                "$0{,}29$",
                "$0{,}08$"
            ],
            "ans": 0,
            "explain": "Biến cố \"phải tăng cường thêm bác sĩ trực\" tương ứng với $X > 3$.<br> Dựa vào bảng phân bố xác suất, ta có các giá trị của $X$ thỏa mãn là $X=4$ và $X=5$.<br> Vậy xác suất cần tìm là: $$\\mathrm{P}(X > 3) = \\mathrm{P}(X=4) + \\mathrm{P}(X=5) = 0{,}08 + 0{,}02 = 0{,}10.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Giả sử số ca cấp cứu ở một bệnh viện vào tối thứ Bảy là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355415884_578.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Số ca cấp cứu trung bình (kỳ vọng $E(X)$) vào tối thứ Bảy tại bệnh viện này là bao nhiêu?",
            "options": [
                "$2{,}00$",
                "$1{,}50$",
                "$1{,}89$",
                "$2{,}50$"
            ],
            "ans": 2,
            "explain": "Kỳ vọng của biến ngẫu nhiên $X$ được tính theo công thức: $E(X) = \\sum x_i p_i$.<br> Ta có: \\begin{eqnarray*} E(X) &=& 0 \\cdot 0{,}12 + 1 \\cdot 0{,}28 + 2 \\cdot 0{,}31 + 3 \\cdot 0{,}19 + 4 \\cdot 0{,}08 + 5 \\cdot 0{,}02 <br> &=& 0 + 0{,}28 + 0{,}62 + 0{,}57 + 0{,}32 + 0{,}10 <br> &=& 1{,}89. \\end{eqnarray*} Vậy số ca cấp cứu trung bình là $1{,}89$ ca.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Trong một chiếc hộp có $10$ quả cầu có kích thước và khối lượng giống nhau, trong đó có $4$ quả ghi số $1$; $3$ quả ghi số $2$; $2$ quả ghi số $3$ và $1$ quả ghi số $4$. Lấy ngẫu nhiên đồng thời hai quả cầu rồi cộng hai số trên hai quả cầu với nhau. Xác suất để kết quả thu được là số lẻ bằng",
            "options": [
                "$\\dfrac{7}{15}$",
                "$\\dfrac{8}{15}$",
                "$\\dfrac{2}{9}$",
                "$\\dfrac{4}{9}$"
            ],
            "ans": 1,
            "explain": "Không gian mẫu: Lấy $2$ quả từ $10$ quả, số phần tử là $n(\\Omega) = \\mathrm{C}_{10}^2 = 45$.<br> Gọi $A$ là biến cố \"Tổng hai số trên hai quả cầu là số lẻ\".<br> Để tổng hai số là lẻ thì phải lấy được một số lẻ và một số chẵn.<br> Số quả cầu ghi số lẻ (số $1$ và số $3$) là: $4 + 2 = 6$ quả.<br> Số quả cầu ghi số chẵn (số $2$ và số $4$) là: $3 + 1 = 4$ quả.<br> Số cách chọn thuận lợi cho biến cố $A$ là: $n(A) = \\mathrm{C}_6^1 \\cdot \\mathrm{C}_4^1 = 6 \\cdot 4 = 24$.<br> Vậy xác suất cần tìm là $\\mathrm{P}(A) = \\dfrac{24}{45} = \\dfrac{8}{15}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Trong một chiếc hộp có $10$ quả cầu có kích thước và khối lượng giống nhau, trong đó có $4$ quả ghi số $1$; $3$ quả ghi số $2$; $2$ quả ghi số $3$ và $1$ quả ghi số $4$. Lấy ngẫu nhiên đồng thời hai quả cầu rồi cộng hai số trên hai quả cầu với nhau. Gọi $X$ là kết quả thu được. Xác suất để $X=4$ là",
            "options": [
                "$\\dfrac{2}{9}$",
                "$\\dfrac{8}{45}$",
                "$\\dfrac{11}{45}$",
                "$\\dfrac{1}{5}$"
            ],
            "ans": 2,
            "explain": "Số phần tử của không gian mẫu là $n(\\Omega) = \\mathrm{C}_{10}^2 = 45$.<br> Để $X=4$ (tổng hai số bằng $4$), ta có các trường hợp sau: <br><b>-</b> Lấy được $1$ quả số $1$ và $1$ quả số $3$: Có $\\mathrm{C}_4^1 \\cdot \\mathrm{C}_2^1 = 4 \\cdot 2 = 8$ cách. <br><b>-</b> Lấy được $2$ quả số $2$: Có $\\mathrm{C}_3^2 = 3$ cách. Tổng số cách thuận lợi là $8 + 3 = 11$ cách.<br> Vậy xác suất để $X=4$ là $\\mathrm{P}(X=4) = \\dfrac{11}{45}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Trong một chiếc hộp có $10$ quả cầu có kích thước và khối lượng giống nhau, trong đó có $4$ quả ghi số $1$; $3$ quả ghi số $2$; $2$ quả ghi số $3$ và $1$ quả ghi số $4$. Lấy ngẫu nhiên đồng thời hai quả cầu. Gọi $X$ là tổng hai số ghi trên hai quả cầu. Giá trị lớn nhất có thể có của $X$ có xác suất xuất hiện là bao nhiêu?",
            "options": [
                "$\\dfrac{1}{15}$",
                "$\\dfrac{4}{45}$",
                "$\\dfrac{1}{9}$",
                "$\\dfrac{2}{45}$"
            ],
            "ans": 3,
            "explain": "Giá trị lớn nhất của $X$ đạt được khi ta lấy được quả có chỉ số lớn nhất. Cụ thể là lấy được quả số $3$ và quả số $4$ (vì chỉ có 1 quả số 4 nên không thể lấy 2 quả số 4).<br> Giá trị lớn nhất là $3+4=7$.<br> Số phần tử của không gian mẫu là $n(\\Omega) = 45$.<br> Số cách lấy được $1$ quả số $3$ và $1$ quả số $4$ là: $\\mathrm{C}_2^1 \\cdot \\mathrm{C}_1^1 = 2$ cách.<br> Vậy xác suất cần tìm là $\\dfrac{2}{45}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Số cuộc điện thoại gọi đến một trung tâm cứu hộ trong khoảng thời gian từ $12$ giờ đến $13$ giờ là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355476329_858.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Xác suất để xảy ra ít nhất $2$ cuộc gọi đến trung tâm cứu hộ đó là",
            "options": [
                "$0{,}45$",
                "$0{,}55$",
                "$0{,}75$",
                "$0{,}30$"
            ],
            "ans": 1,
            "explain": "Yêu cầu bài toán là tính $\\mathrm{P}(X \\ge 2)$.<br> Ta có $\\mathrm{P}(X \\ge 2) = \\mathrm{P}(X=2) + \\mathrm{P}(X=3) + \\mathrm{P}(X=4) + \\mathrm{P}(X=5)$.<br> $\\mathrm{P}(X \\ge 2) = 0{,}15 + 0{,}15 + 0{,}13 + 0{,}12 = 0{,}55$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Số cuộc điện thoại gọi đến một trung tâm cứu hộ trong khoảng thời gian từ $12$ giờ đến $13$ giờ là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355476329_858.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Kỳ vọng $E(X)$ của biến ngẫu nhiên $X$ là",
            "options": [
                "$2{,}5$",
                "$2{,}0$",
                "$2{,}07$",
                "$2{,}15$"
            ],
            "ans": 2,
            "explain": "Kỳ vọng của biến ngẫu nhiên $X$ được tính theo công thức $E(X) = \\sum x_i p_i$.<br> $E(X) = 0 \\cdot 0{,}25 + 1 \\cdot 0{,}2 + 2 \\cdot 0{,}15 + 3 \\cdot 0{,}15 + 4 \\cdot 0{,}13 + 5 \\cdot 0{,}12$.<br> $E(X) = 0 + 0{,}2 + 0{,}3 + 0{,}45 + 0{,}52 + 0{,}6 = 2{,}07$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Số cuộc điện thoại gọi đến một trung tâm cứu hộ trong khoảng thời gian từ $12$ giờ đến $13$ giờ là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355476329_858.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Phương sai $V(X)$ của biến ngẫu nhiên $X$ gần nhất với giá trị nào sau đây?",
            "options": [
                "$3{,}95$",
                "$2{,}95$",
                "$1{,}72$",
                "$4{,}28$"
            ],
            "ans": 1,
            "explain": "Ta có $E(X) = 2{,}07$.<br> Tính $E(X^2) = \\sum x_i^2 p_i = 0^2 \\cdot 0{,}25 + 1^2 \\cdot 0{,}2 + 2^2 \\cdot 0{,}15 + 3^2 \\cdot 0{,}15 + 4^2 \\cdot 0{,}13 + 5^2 \\cdot 0{,}12$.<br> $E(X^2) = 0 + 0{,}2 + 0{,}6 + 1{,}35 + 2{,}08 + 3 = 7{,}23$.<br> Phương sai $V(X) = E(X^2) - [E(X)]^2 = 7{,}23 - (2{,}07)^2 = 7{,}23 - 4{,}2849 = 2{,}9451$.<br> Vậy $V(X) \\approx 2{,}95$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một túi gồm các tấm thẻ giống hệt nhau chỉ khác màu, trong đó có $10$ tấm thẻ màu đỏ và $6$ tấm thẻ màu xanh. Rút ngẫu nhiên đồng thời ra $3$ tấm thẻ từ trong túi. Xác suất để rút được đúng $2$ tấm thẻ màu đỏ là",
            "options": [
                "$\\dfrac{15}{56}$",
                "$\\dfrac{27}{56}$",
                "$\\dfrac{3}{14}$",
                "$\\dfrac{5}{28}$"
            ],
            "ans": 1,
            "explain": "Số phần tử của không gian mẫu: $n(\\Omega) = \\mathrm{C}_{16}^3 = 560$.<br> Gọi $A$ là biến cố \"Rút được đúng $2$ tấm thẻ màu đỏ\". Khi đó ta rút được $2$ thẻ đỏ và $1$ thẻ xanh.<br> Số cách chọn là: $n(A) = \\mathrm{C}_{10}^2 \\cdot \\mathrm{C}_6^1 = 45 \\cdot 6 = 270$.<br> Xác suất cần tìm là: $\\mathrm{P}(A) = \\dfrac{270}{560} = \\dfrac{27}{56}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một túi gồm các tấm thẻ giống hệt nhau chỉ khác màu, trong đó có $10$ tấm thẻ màu đỏ và $6$ tấm thẻ màu xanh. Rút ngẫu nhiên đồng thời ra $3$ tấm thẻ từ trong túi. Gọi $X$ là số thẻ đỏ trong $3$ thẻ rút ra. Kỳ vọng $E(X)$ bằng",
            "options": [
                "$1{,}500$",
                "$1{,}625$",
                "$1{,}800$",
                "$1{,}875$"
            ],
            "ans": 3,
            "explain": "Số thẻ đỏ trung bình rút được tuân theo công thức kỳ vọng của phân phối siêu bội hoặc tính trực tiếp từ bảng phân bố.<br> Áp dụng tính chất kỳ vọng: Tỉ lệ thẻ đỏ trong túi là $p = \\dfrac{10}{16}$.<br> Khi rút $n=3$ thẻ, số thẻ đỏ trung bình là $E(X) = n \\cdot p = 3 \\cdot \\dfrac{10}{16} = \\dfrac{30}{16} = 1{,}875$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một túi gồm các tấm thẻ giống hệt nhau chỉ khác màu, trong đó có $10$ tấm thẻ màu đỏ và $6$ tấm thẻ màu xanh. Rút ngẫu nhiên đồng thời ra $3$ tấm thẻ từ trong túi. Giả sử rút mỗi tấm thẻ màu đỏ được $5$ điểm và rút mỗi tấm thẻ màu xanh được $8$ điểm. Gọi $Y$ là tổng số điểm thu được. Xác suất để $Y=18$ là",
            "options": [
                "$\\dfrac{3}{14}$",
                "$\\dfrac{27}{56}$",
                "$\\dfrac{15}{56}$",
                "$\\dfrac{1}{56}$"
            ],
            "ans": 1,
            "explain": "Giả sử rút được $k$ thẻ đỏ ($0 \\le k \\le 3$), khi đó số thẻ xanh là $3-k$.<br> Tổng điểm $Y = 5k + 8(3-k) = 5k + 24 - 8k = 24 - 3k$.<br> Để $Y=18$ thì $24 - 3k = 18 \\Leftrightarrow 3k = 6 \\Leftrightarrow k = 2$.<br> Vậy biến cố $Y=18$ tương đương với biến cố rút được đúng $2$ thẻ đỏ và $1$ thẻ xanh.<br> Số cách chọn: $\\mathrm{C}_{10}^2 \\cdot \\mathrm{C}_6^1 = 45 \\cdot 6 = 270$.<br> Tổng số cách rút: $\\mathrm{C}_{16}^3 = 560$.<br> Xác suất cần tìm: $\\dfrac{270}{560} = \\dfrac{27}{56}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Hai xạ thủ An và Bình tập bắn một cách độc lập với nhau. Mỗi người thực hiện hai phát bắn. Xác suất bắn trúng bia của An và của Bình trong mỗi phát bắn tương ứng là $0{,}4$ và $0{,}5$. Gọi $X$ là số phát bắn trúng bia của An. Xác suất để An bắn trúng đúng $1$ phát là",
            "options": [
                "$0{,}16$",
                "$0{,}48$",
                "$0{,}24$",
                "$0{,}36$"
            ],
            "ans": 1,
            "explain": "$X$ là biến ngẫu nhiên chỉ số lần bắn trúng của An trong $2$ lần bắn.<br> $X$ tuân theo phân phối nhị thức $B(2; 0{,}4)$.<br> Xác suất để An trúng đúng $1$ phát ($X=1$) là:<br> $\\mathrm{P}(X=1) = \\mathrm{C}_2^1 \\cdot (0{,}4)^1 \\cdot (1-0{,}4)^{2-1} = 2 \\cdot 0{,}4 \\cdot 0{,}6 = 0{,}48$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Hai xạ thủ An và Bình tập bắn một cách độc lập với nhau. Mỗi người thực hiện hai phát bắn. Xác suất bắn trúng bia của An và của Bình trong mỗi phát bắn tương ứng là $0{,}4$ và $0{,}5$. Gọi $Y$ là số phát bắn trúng bia của Bình. Phương sai $V(Y)$ của biến ngẫu nhiên $Y$ bằng",
            "options": [
                "$1{,}0$",
                "$0{,}25$",
                "$0{,}5$",
                "$0{,}75$"
            ],
            "ans": 2,
            "explain": "$Y$ là biến ngẫu nhiên chỉ số lần bắn trúng của Bình trong $2$ lần bắn với xác suất trúng $p=0{,}5$.<br> $Y$ tuân theo phân phối nhị thức $B(n; p)$ với $n=2$ và $p=0{,}5$.<br> Phương sai của $Y$ được tính theo công thức $V(Y) = np(1-p)$.<br> $V(Y) = 2 \\cdot 0{,}5 \\cdot (1 - 0{,}5) = 1 \\cdot 0{,}5 = 0{,}5$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Hai xạ thủ An và Bình tập bắn một cách độc lập với nhau. Mỗi người thực hiện hai phát bắn. Xác suất bắn trúng bia của An và của Bình trong mỗi phát bắn tương ứng là $0{,}4$ và $0{,}5$. Gọi $X$ và $Y$ lần lượt là số phát bắn trúng bia của An và Bình. Tính xác suất để tổng số phát bắn trúng của cả hai người bằng $0$.",
            "options": [
                "$0{,}09$",
                "$0{,}20$",
                "$0{,}36$",
                "$0{,}04$"
            ],
            "ans": 0,
            "explain": "Tổng số phát trúng bằng $0$ nghĩa là An trượt cả 2 phát ($X=0$) và Bình trượt cả 2 phát ($Y=0$).<br> Xác suất An trượt cả 2 phát: $\\mathrm{P}(X=0) = (1-0{,}4)^2 = 0{,}6^2 = 0{,}36$.<br> Xác suất Bình trượt cả 2 phát: $\\mathrm{P}(Y=0) = (1-0{,}5)^2 = 0{,}5^2 = 0{,}25$.<br> Vì An và Bình bắn độc lập nên xác suất cần tìm là:<br> $\\mathrm{P}(X=0, Y=0) = \\mathrm{P}(X=0) \\cdot \\mathrm{P}(Y=0) = 0{,}36 \\cdot 0{,}25 = 0{,}09$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xác suất thành công khi làm một thí nghiệm $T$ là $0{,}4$. Một nhóm gồm $9$ học sinh độc lập với nhau tiến hành thí nghiệm $T$. Tính xác suất để có đúng $6$ học sinh thực hiện thí nghiệm thành công (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0212$",
                "$0{,}0743$",
                "$0{,}1003$",
                "$0{,}2508$"
            ],
            "ans": 1,
            "explain": "Gọi $X$ là số học sinh thực hiện thí nghiệm thành công trong $9$ học sinh. Khi đó $X$ tuân theo quy luật phân phối nhị thức $B(n; p)$ với $n=9$ và $p=0{,}4$.<br> Công thức tính xác suất là $\\mathrm{P}(X=k) = \\mathrm{C}_n^k p^k (1-p)^{n-k}$.<br> Xác suất để có đúng $6$ học sinh thực hiện thí nghiệm thành công là $$\\mathrm{P}(X=6) = \\mathrm{C}_9^6 \\cdot (0{,}4)^6 \\cdot (1-0{,}4)^{9-6} = \\mathrm{C}_9^6 \\cdot (0{,}4)^6 \\cdot (0{,}6)^3 \\approx 0{,}0743.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xác suất thành công khi làm một thí nghiệm $T$ là $0{,}4$. Một nhóm gồm $9$ học sinh độc lập với nhau tiến hành thí nghiệm $T$. Tính xác suất để có ít nhất $1$ học sinh thực hiện thí nghiệm thành công (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0101$",
                "$0{,}9999$",
                "$0{,}0010$",
                "$0{,}9899$"
            ],
            "ans": 3,
            "explain": "Gọi $X$ là số học sinh thực hiện thí nghiệm thành công ($0 \\le X \\le 9$). Ta có $X \\sim B(9; 0{,}4)$.<br> Biến cố \"có ít nhất $1$ học sinh thành công\" là biến cố đối của biến cố \"không có học sinh nào thành công\" ($X=0$).<br> Ta có $\\mathrm{P}(X=0) = \\mathrm{C}_9^0 \\cdot (0{,}4)^0 \\cdot (0{,}6)^9 = (0{,}6)^9 \\approx 0{,}010077$.<br> Vậy xác suất cần tìm là $$\\mathrm{P}(X \\ge 1) = 1 - \\mathrm{P}(X=0) = 1 - (0{,}6)^9 \\approx 0{,}9899.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tại một nhà máy, xác suất sản xuất ra một linh kiện điện tử không đạt tiêu chuẩn là $0{,}01$. Các linh kiện được xếp vào hộp, mỗi hộp $10$ linh kiện. Hộp được xếp loại I nếu có nhiều nhất một linh kiện không đạt tiêu chuẩn. Tỉ lệ những hộp linh kiện loại I là bao nhiêu (làm tròn đến hàng phần nghìn)?",
            "options": [
                "$0{,}904$",
                "$0{,}996$",
                "$0{,}956$",
                "$0{,}991$"
            ],
            "ans": 1,
            "explain": "Gọi $X$ là số linh kiện không đạt tiêu chuẩn trong một hộp ($0 \\le X \\le 10$).<br> Ta có $X$ tuân theo phân phối nhị thức $B(10; 0{,}01)$.<br> Hộp được xếp loại I khi $X \\le 1$, tức là $X=0$ hoặc $X=1$.<br> Ta có: <br><b>-</b> Xác suất hộp không có linh kiện hỏng: $\\mathrm{P}(X=0) = \\mathrm{C}_{10}^0 \\cdot (0{,}01)^0 \\cdot (0{,}99)^{10} = (0{,}99)^{10}$. <br><b>-</b> Xác suất hộp có đúng $1$ linh kiện hỏng: $\\mathrm{P}(X=1) = \\mathrm{C}_{10}^1 \\cdot (0{,}01)^1 \\cdot (0{,}99)^9 = 10 \\cdot 0{,}01 \\cdot (0{,}99)^9 = 0{,}1 \\cdot (0{,}99)^9$. Tỉ lệ hộp loại I là $$\\mathrm{P}(X \\le 1) = (0{,}99)^{10} + 0{,}1 \\cdot (0{,}99)^9 = (0{,}99)^9 (0{,}99 + 0{,}1) = 1{,}09 \\cdot (0{,}99)^9 \\approx 0{,}9957.$$ Làm tròn đến hàng phần nghìn ta được $0{,}996$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tại một nhà máy, xác suất sản xuất ra một linh kiện điện tử không đạt tiêu chuẩn là $0{,}01$. Các linh kiện được xếp vào hộp, mỗi hộp $10$ linh kiện. Hộp được xếp loại I nếu có nhiều nhất một linh kiện không đạt tiêu chuẩn. Tính xác suất để một hộp được chọn ngẫu nhiên <b>không</b> phải là hộp loại I (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0438$",
                "$0{,}0956$",
                "$0{,}0043$",
                "$0{,}0091$"
            ],
            "ans": 2,
            "explain": "Gọi $A$ là biến cố \"Hộp được chọn là loại I\". Theo bài toán trước, ta có $\\mathrm{P}(A) \\approx 0{,}9957$.<br> Biến cố \"Hộp không phải loại I\" là biến cố đối $\\overline{A}$.<br> Hộp không phải loại I tức là hộp chứa từ $2$ linh kiện không đạt chuẩn trở lên.<br> Xác suất cần tìm là $$\\mathrm{P}(\\overline{A}) = 1 - \\mathrm{P}(A) \\approx 1 - 0{,}9957 = 0{,}0043.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một bài thi trắc nghiệm gồm $10$ câu hỏi, mỗi câu có $4$ phương án trả lời, trong đó chỉ có một phương án đúng. Mỗi câu trả lời đúng được $4$ điểm, trả lời sai bị trừ $1$ điểm. Một thí sinh làm bài bằng cách chọn ngẫu nhiên một phương án ở mỗi câu. Tính xác suất để thí sinh đó đạt được đúng $15$ điểm.",
            "options": [
                "$\\mathrm{C}_{10}^4 (0{,}25)^4 (0{,}75)^6$",
                "$\\mathrm{C}_{10}^5 (0{,}25)^5 (0{,}75)^5$",
                "$\\mathrm{C}_{10}^3 (0{,}25)^3 (0{,}75)^7$",
                "$\\mathrm{C}_{10}^6 (0{,}25)^6 (0{,}75)^4$"
            ],
            "ans": 1,
            "explain": "Gọi $x$ là số câu trả lời đúng ($0 \\le x \\le 10, x \\in \\mathbb{N}$).<br> Số câu trả lời sai là $10 - x$.<br> Số điểm thí sinh đạt được là $S = 4x - 1(10-x) = 5x - 10$.<br> Để thí sinh đạt được $15$ điểm thì $5x - 10 = 15 \\Leftrightarrow 5x = 25 \\Leftrightarrow x = 5$.<br> Xác suất trả lời đúng một câu là $p = 0{,}25$, trả lời sai là $1-p = 0{,}75$.<br> Xác suất để trả lời đúng $5$ câu (đạt $15$ điểm) là $$\\mathrm{P}(X=5) = \\mathrm{C}_{10}^5 \\cdot (0{,}25)^5 \\cdot (0{,}75)^5.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một bài thi trắc nghiệm gồm $10$ câu hỏi, mỗi câu có $4$ phương án trả lời, trong đó chỉ có một phương án đúng. Mỗi câu trả lời đúng được $4$ điểm, trả lời sai bị trừ $1$ điểm. Một thí sinh chọn ngẫu nhiên phương án trả lời. Tính xác suất để thí sinh đó bị <b>điểm âm</b> (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}2440$",
                "$0{,}0563$",
                "$0{,}1877$",
                "$0{,}5256$"
            ],
            "ans": 0,
            "explain": "Gọi $x$ là số câu trả lời đúng. Số điểm đạt được là $S = 5x - 10$.<br> Để bị điểm âm thì $S < 0 \\Leftrightarrow 5x - 10 < 0 \\Leftrightarrow 5x < 10 \\Leftrightarrow x < 2$.<br> Vì $x \\in \\mathbb{N}$ nên $x \\in \\{0; 1\\}$.<br> Xác suất thí sinh trả lời đúng một câu là $0{,}25$, sai là $0{,}75$. <br><b>-</b> Xác suất đúng $0$ câu: $\\mathrm{P}(X=0) = \\mathrm{C}_{10}^0 (0{,}25)^0 (0{,}75)^{10} \\approx 0{,}0563$. <br><b>-</b> Xác suất đúng $1$ câu: $\\mathrm{P}(X=1) = \\mathrm{C}_{10}^1 (0{,}25)^1 (0{,}75)^9 \\approx 0{,}1877$. Vậy xác suất để bị điểm âm là $$\\mathrm{P}(S<0) = \\mathrm{P}(X=0) + \\mathrm{P}(X=1) \\approx 0{,}0563 + 0{,}1877 = 0{,}2440.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xác suất thành công khi làm một thí nghiệm $T$ là $0{,}4$. Một nhóm gồm $9$ học sinh độc lập với nhau tiến hành thí nghiệm $T$. Tính xác suất để có đúng $6$ học sinh thực hiện thí nghiệm thành công (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0212$",
                "$0{,}0743$",
                "$0{,}1003$",
                "$0{,}2508$"
            ],
            "ans": 1,
            "explain": "Gọi $X$ là số học sinh thực hiện thí nghiệm thành công trong $9$ học sinh. Khi đó $X$ tuân theo quy luật phân phối nhị thức $B(n; p)$ với $n=9$ và $p=0{,}4$.<br> Công thức tính xác suất là $\\mathrm{P}(X=k) = \\mathrm{C}_n^k p^k (1-p)^{n-k}$.<br> Xác suất để có đúng $6$ học sinh thực hiện thí nghiệm thành công là $$\\mathrm{P}(X=6) = \\mathrm{C}_9^6 \\cdot (0{,}4)^6 \\cdot (1-0{,}4)^{9-6} = \\mathrm{C}_9^6 \\cdot (0{,}4)^6 \\cdot (0{,}6)^3 \\approx 0{,}0743.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xác suất thành công khi làm một thí nghiệm $T$ là $0{,}4$. Một nhóm gồm $9$ học sinh độc lập với nhau tiến hành thí nghiệm $T$. Tính xác suất để có ít nhất $1$ học sinh thực hiện thí nghiệm thành công (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0101$",
                "$0{,}9999$",
                "$0{,}0010$",
                "$0{,}9899$"
            ],
            "ans": 3,
            "explain": "Gọi $X$ là số học sinh thực hiện thí nghiệm thành công ($0 \\le X \\le 9$). Ta có $X \\sim B(9; 0{,}4)$.<br> Biến cố \"có ít nhất $1$ học sinh thành công\" là biến cố đối của biến cố \"không có học sinh nào thành công\" ($X=0$).<br> Ta có $\\mathrm{P}(X=0) = \\mathrm{C}_9^0 \\cdot (0{,}4)^0 \\cdot (0{,}6)^9 = (0{,}6)^9 \\approx 0{,}0101$.<br> Vậy xác suất cần tìm là $$\\mathrm{P}(X \\ge 1) = 1 - \\mathrm{P}(X=0) = 1 - (0{,}6)^9 \\approx 0{,}9899.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tại một nhà máy, xác suất sản xuất ra một linh kiện điện tử không đạt tiêu chuẩn là $0{,}01$. Các linh kiện được xếp vào hộp, mỗi hộp $10$ linh kiện. Hộp được xếp loại I nếu có nhiều nhất một linh kiện không đạt tiêu chuẩn. Tỉ lệ những hộp linh kiện loại I là bao nhiêu (làm tròn đến hàng phần nghìn)?",
            "options": [
                "$0{,}904$",
                "$0{,}996$",
                "$0{,}956$",
                "$0{,}991$"
            ],
            "ans": 1,
            "explain": "Gọi $X$ là số linh kiện không đạt tiêu chuẩn trong một hộp ($0 \\le X \\le 10$).<br> Ta có $X$ tuân theo phân phối nhị thức $B(10; 0{,}01)$.<br> Hộp được xếp loại I khi $X \\le 1$, tức là $X=0$ hoặc $X=1$.<br> Ta có: <br><b>-</b> $\\mathrm{P}(X=0) = \\mathrm{C}_{10}^0 \\cdot (0{,}01)^0 \\cdot (0{,}99)^{10} = (0{,}99)^{10}$. <br><b>-</b> $\\mathrm{P}(X=1) = \\mathrm{C}_{10}^1 \\cdot (0{,}01)^1 \\cdot (0{,}99)^9 = 0{,}1 \\cdot (0{,}99)^9$. Tỉ lệ hộp loại I là $$\\mathrm{P}(X \\le 1) = (0{,}99)^{10} + 0{,}1 \\cdot (0{,}99)^9 \\approx 0{,}9957.$$ Làm tròn đến hàng phần nghìn ta được $0{,}996$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tại một nhà máy, xác suất sản xuất ra một linh kiện điện tử không đạt tiêu chuẩn là $0{,}01$. Các linh kiện được xếp vào hộp, mỗi hộp $10$ linh kiện. Hộp được xếp loại I nếu có nhiều nhất một linh kiện không đạt tiêu chuẩn. Tính xác suất để một hộp được chọn ngẫu nhiên <b>không</b> phải là hộp loại I (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0438$",
                "$0{,}0956$",
                "$0{,}0043$",
                "$0{,}0091$"
            ],
            "ans": 2,
            "explain": "Gọi $A$ là biến cố \"Hộp được chọn là loại I\". Theo bài toán trước, ta có $\\mathrm{P}(A) \\approx 0{,}9957$.<br> Biến cố \"Hộp không phải loại I\" là biến cố đối $\\overline{A}$.<br> Hộp không phải loại I tức là hộp chứa từ $2$ linh kiện không đạt chuẩn trở lên.<br> Xác suất cần tìm là $$\\mathrm{P}(\\overline{A}) = 1 - \\mathrm{P}(A) \\approx 1 - 0{,}9957 = 0{,}0043.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một bài thi trắc nghiệm gồm $10$ câu hỏi, mỗi câu có $4$ phương án trả lời, trong đó chỉ có một phương án đúng. Mỗi câu trả lời đúng được $4$ điểm, trả lời sai bị trừ $1$ điểm. Một thí sinh chọn ngẫu nhiên các phương án. Tính xác suất để thí sinh đó đạt được đúng $15$ điểm.",
            "options": [
                "$\\mathrm{C}_{10}^4 (0{,}25)^4 (0{,}75)^6$",
                "$\\mathrm{C}_{10}^5 (0{,}25)^5 (0{,}75)^5$",
                "$\\mathrm{C}_{10}^3 (0{,}25)^3 (0{,}75)^7$",
                "$\\mathrm{C}_{10}^6 (0{,}25)^6 (0{,}75)^4$"
            ],
            "ans": 1,
            "explain": "Gọi $x$ là số câu trả lời đúng ($0 \\le x \\le 10, x \\in \\mathbb{N}$). Số câu sai là $10 - x$.<br> Số điểm thí sinh đạt được là $S = 4x - 1(10-x) = 5x - 10$.<br> Để thí sinh đạt được $15$ điểm thì $5x - 10 = 15 \\Leftrightarrow 5x = 25 \\Leftrightarrow x = 5$.<br> Xác suất trả lời đúng một câu là $p = 0{,}25$, trả lời sai là $1-p = 0{,}75$.<br> Xác suất để trả lời đúng $5$ câu (đạt $15$ điểm) là $$\\mathrm{P}(X=5) = \\mathrm{C}_{10}^5 \\cdot (0{,}25)^5 \\cdot (0{,}75)^5.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một bài thi trắc nghiệm gồm $10$ câu hỏi, mỗi câu có $4$ phương án trả lời. Mỗi câu đúng được $4$ điểm, sai bị trừ $1$ điểm. Một thí sinh chọn ngẫu nhiên phương án trả lời. Tính xác suất để thí sinh đó bị <b>điểm âm</b> (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}2440$",
                "$0{,}0563$",
                "$0{,}1877$",
                "$0{,}5256$"
            ],
            "ans": 0,
            "explain": "Gọi $x$ là số câu trả lời đúng. Số điểm đạt được là $S = 5x - 10$.<br> Để bị điểm âm thì $S < 0 \\Leftrightarrow 5x - 10 < 0 \\Leftrightarrow x < 2$.<br> Vì $x \\in \\mathbb{N}$ nên $x \\in \\{0; 1\\}$.<br> Xác suất thí sinh trả lời đúng một câu là $0{,}25$, sai là $0{,}75$. <br><b>-</b> $\\mathrm{P}(X=0) = \\mathrm{C}_{10}^0 (0{,}25)^0 (0{,}75)^{10} \\approx 0{,}0563$. <br><b>-</b> $\\mathrm{P}(X=1) = \\mathrm{C}_{10}^1 (0{,}25)^1 (0{,}75)^9 \\approx 0{,}1877$. Vậy xác suất để bị điểm âm là $$\\mathrm{P}(S<0) = \\mathrm{P}(X=0) + \\mathrm{P}(X=1) \\approx 0{,}0563 + 0{,}1877 = 0{,}2440.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Trong một trò chơi, mỗi ván người chơi gieo đồng thời $3$ xúc xắc cân đối. Người chơi thắng ván đó nếu có ít nhất $2$ xúc xắc xuất hiện mặt $6$ chấm. Tính xác suất để người chơi thắng trong một ván chơi đơn lẻ.",
            "options": [
                "$\\dfrac{1}{27}$",
                "$\\dfrac{2}{27}$",
                "$\\dfrac{1}{216}$",
                "$\\dfrac{5}{72}$"
            ],
            "ans": 1,
            "explain": "Gọi $A$ là biến cố \"Người chơi thắng một ván\". Số phần tử không gian mẫu khi gieo 3 xúc xắc là $6^3 = 216$.<br> Để thắng, số mặt $6$ chấm phải là $2$ hoặc $3$. <br><b>-</b> Trường hợp có đúng $2$ mặt $6$: Có $\\mathrm{C}_3^2$ cách chọn vị trí cho mặt $6$, xúc xắc còn lại có $5$ khả năng (từ $1$ đến $5$). Số khả năng là $\\mathrm{C}_3^2 \\cdot 1^2 \\cdot 5 = 15$. <br><b>-</b> Trường hợp có $3$ mặt $6$: Có $1$ khả năng ($6,6,6$). Tổng số khả năng thuận lợi là $15 + 1 = 16$.<br> Xác suất thắng một ván là $p = \\dfrac{16}{216} = \\dfrac{2}{27}$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Trong một trò chơi, mỗi ván người chơi gieo $3$ xúc xắc và thắng nếu có ít nhất $2$ mặt $6$ chấm. Bác Hưng tham gia chơi $3$ ván. Tính xác suất để bác Hưng thắng ít nhất $2$ ván (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0012$",
                "$0{,}0113$",
                "$0{,}0156$",
                "$0{,}0201$"
            ],
            "ans": 2,
            "explain": "Xác suất thắng trong một ván là $p = \\dfrac{2}{27}$ (theo bài toán cơ bản).<br> Gọi $Y$ là số ván thắng trong $3$ ván chơi. Ta có $Y \\sim B\\left(3; \\dfrac{2}{27}\\right)$.<br> Xác suất thắng ít nhất $2$ ván là $\\mathrm{P}(Y \\ge 2) = \\mathrm{P}(Y=2) + \\mathrm{P}(Y=3)$. <br><b>-</b> $\\mathrm{P}(Y=2) = \\mathrm{C}_3^2 \\left(\\dfrac{2}{27}\\right)^2 \\left(\\dfrac{25}{27}\\right) = 3 \\cdot \\dfrac{4}{729} \\cdot \\dfrac{25}{27} = \\dfrac{300}{19683}$. <br><b>-</b> $\\mathrm{P}(Y=3) = \\mathrm{C}_3^3 \\left(\\dfrac{2}{27}\\right)^3 = \\dfrac{8}{19683}$. Tổng xác suất là $\\dfrac{300 + 8}{19683} = \\dfrac{308}{19683} \\approx 0{,}0156$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Ở đậu Hà Lan, allele trội $A$ quy định màu vàng, allele lặn $a$ quy định màu xanh. Lai hai cây bố mẹ có kiểu gene $Aa \\times Aa$. Xác suất để một cây con có hạt màu vàng là $0{,}75$. Bốn bạn thực hiện phép lai độc lập. Gọi $X$ là số cây con có hạt màu vàng trong số $4$ cây con thu được. Tính $\\mathrm{P}(X=3)$.",
            "options": [
                "$\\mathrm{C}_4^3(0{,}75)^3(0{,}25)$",
                "$\\mathrm{C}_4^3(0{,}25)^3(0{,}75)$",
                "$(0{,}75)^3(0{,}25)$",
                "$4(0{,}75)(0{,}25)^3$"
            ],
            "ans": 0,
            "explain": "Xác suất thu được cây hạt vàng là $p=0{,}75$. Xác suất thu được cây hạt xanh là $1-p=0{,}25$.<br> Số cây hạt vàng $X$ tuân theo phân phối nhị thức $B(4; 0{,}75)$.<br> Xác suất để có đúng $3$ cây hạt vàng là $$\\mathrm{P}(X=3) = \\mathrm{C}_4^3 p^3 (1-p)^1 = \\mathrm{C}_4^3 (0{,}75)^3 (0{,}25).$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Thực hiện phép lai $4$ cặp cây đậu Hà Lan $Aa \\times Aa$. Gọi $Y$ là số cây con có hạt màu xanh trong số $4$ cây con thu được. Tính giá trị trung bình (kỳ vọng) của số cây con có hạt màu xanh.",
            "options": [
                "$3$",
                "$0{,}25$",
                "$1$",
                "$0{,}75$"
            ],
            "ans": 2,
            "explain": "Xác suất sinh ra cây hạt màu xanh (kiểu gen $aa$) từ phép lai $Aa \\times Aa$ là $\\dfrac{1}{4} = 0{,}25$.<br> Gọi $Y$ là số cây hạt màu xanh trong $4$ cây con. Ta có $Y \\sim B(4; 0{,}25)$.<br> Kỳ vọng của biến ngẫu nhiên $Y$ là $$E(Y) = n \\cdot p = 4 \\cdot 0{,}25 = 1.$$ Vậy trung bình có $1$ cây con có hạt màu xanh.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một lớp học có $6$ bóng đèn hoạt động độc lập. Xác suất mỗi bóng bị hỏng là $0{,}25$. Gọi $X$ là số bóng đèn sáng. Lớp học đủ ánh sáng nếu có ít nhất $4$ bóng đèn sáng. Tính xác suất để lớp học đủ ánh sáng (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}9624$",
                "$0{,}8306$",
                "$0{,}7815$",
                "$0{,}5339$"
            ],
            "ans": 1,
            "explain": "Xác suất bóng đèn hỏng là $0{,}25$ nên xác suất bóng đèn sáng là $p = 1 - 0{,}25 = 0{,}75$.<br> Gọi $X$ là số bóng đèn sáng, $X \\sim B(6; 0{,}75)$.<br> Lớp đủ sáng khi $X \\ge 4$, tức là $X \\in \\{4; 5; 6\\}$. <br><b>-</b> $\\mathrm{P}(X=4) = \\mathrm{C}_6^4 (0{,}75)^4 (0{,}25)^2 \\approx 0{,}2966$. <br><b>-</b> $\\mathrm{P}(X=5) = \\mathrm{C}_6^5 (0{,}75)^5 (0{,}25)^1 \\approx 0{,}3560$. <br><b>-</b> $\\mathrm{P}(X=6) = \\mathrm{C}_6^6 (0{,}75)^6 (0{,}25)^0 \\approx 0{,}1780$. Xác suất cần tìm là $\\mathrm{P}(X \\ge 4) \\approx 0{,}2966 + 0{,}3560 + 0{,}1780 = 0{,}8306$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Một lớp học có $6$ bóng đèn hoạt động độc lập, xác suất mỗi bóng sáng là $0{,}75$. Gọi $X$ là số bóng đèn sáng. Tính độ lệch chuẩn của biến ngẫu nhiên $X$ (làm tròn đến hàng phần trăm).",
            "options": [
                "$1{,}06$",
                "$1{,}13$",
                "$4{,}50$",
                "$1{,}50$"
            ],
            "ans": 0,
            "explain": "Biến ngẫu nhiên $X$ tuân theo phân phối nhị thức $B(n; p)$ với $n=6$ và $p=0{,}75$.<br> Phương sai của $X$ là $V(X) = n \\cdot p \\cdot (1-p) = 6 \\cdot 0{,}75 \\cdot 0{,}25 = 1{,}125$.<br> Độ lệch chuẩn của $X$ là $\\sigma(X) = \\sqrt{V(X)} = \\sqrt{1{,}125} \\approx 1{,}06$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Sơn và Tùng thi đấu bóng bàn gồm $5$ ván độc lập. Xác suất thắng của Sơn trong mỗi ván là $\\dfrac{1}{4}$. Người thắng trận đấu là người thắng ít nhất $3$ ván. Tính xác suất để Sơn thắng Tùng trong trận đấu này (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0156$",
                "$0{,}0879$",
                "$0{,}1035$",
                "$0{,}2373$"
            ],
            "ans": 2,
            "explain": "Gọi $X$ là số ván thắng của Sơn ($0 \\le X \\le 5$). Ta có $X \\sim B\\left(5; \\dfrac{1}{4}\\right)$.<br> Sơn thắng trận đấu khi $X \\ge 3$, tức là $X \\in \\{3; 4; 5\\}$. <br><b>-</b> $\\mathrm{P}(X=3) = \\mathrm{C}_5^3 \\left(\\dfrac{1}{4}\\right)^3 \\left(\\dfrac{3}{4}\\right)^2 = 10 \\cdot \\dfrac{9}{1024} = \\dfrac{90}{1024}$. <br><b>-</b> $\\mathrm{P}(X=4) = \\mathrm{C}_5^4 \\left(\\dfrac{1}{4}\\right)^4 \\left(\\dfrac{3}{4}\\right)^1 = 5 \\cdot \\dfrac{3}{1024} = \\dfrac{15}{1024}$. <br><b>-</b> $\\mathrm{P}(X=5) = \\mathrm{C}_5^5 \\left(\\dfrac{1}{4}\\right)^5 = \\dfrac{1}{1024}$. Xác suất Sơn thắng trận là $\\dfrac{90 + 15 + 1}{1024} = \\dfrac{106}{1024} \\approx 0{,}1035$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Sơn và Tùng thi đấu bóng bàn gồm $5$ ván độc lập. Xác suất thắng của Sơn trong mỗi ván là $0{,}25$. Tính xác suất để Sơn thắng đúng $2$ ván.",
            "options": [
                "$\\mathrm{C}_5^2(0{,}25)^2(0{,}75)^3$",
                "$\\mathrm{C}_5^2(0{,}75)^2(0{,}25)^3$",
                "$2(0{,}25)(0{,}75)$",
                "$(0{,}25)^2(0{,}75)^3$"
            ],
            "ans": 0,
            "explain": "Gọi $X$ là số ván thắng của Sơn. $X \\sim B(5; 0{,}25)$.<br> Xác suất để Sơn thắng đúng $2$ ván là $$\\mathrm{P}(X=2) = \\mathrm{C}_5^2 (0{,}25)^2 (1-0{,}25)^{5-2} = \\mathrm{C}_5^2 (0{,}25)^2 (0{,}75)^3.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xác suất để một quả cam không đạt chất lượng là $0{,}03$. Người ta kiểm tra ngẫu nhiên $20$ lần (có hoàn lại) từ một thùng cam. Thùng được xếp loại I nếu tất cả các quả lấy ra đều đạt chất lượng. Tính tỉ lệ thùng cam loại I (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}5438$",
                "$0{,}9700$",
                "$0{,}6000$",
                "$0{,}0300$"
            ],
            "ans": 0,
            "explain": "Gọi $X$ là số quả cam không đạt chất lượng trong $20$ lần lấy. $X \\sim B(20; 0{,}03)$.<br> Thùng loại I ứng với trường hợp không có quả nào kém chất lượng ($X=0$).<br> Xác suất (tỉ lệ) thùng loại I là $$\\mathrm{P}(X=0) = \\mathrm{C}_{20}^0 (0{,}03)^0 (0{,}97)^{20} = (0{,}97)^{20} \\approx 0{,}5438.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Xác suất để một quả cam không đạt chất lượng là $0{,}03$. Kiểm tra $20$ lần. Thùng được xếp loại III nếu có ít nhất $3$ quả không đạt chất lượng. Tính xác suất để một thùng cam bị xếp loại III (làm tròn đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}0980$",
                "$0{,}4562$",
                "$0{,}0210$",
                "$0{,}8802$"
            ],
            "ans": 2,
            "explain": "Gọi $X$ là số quả cam hỏng. $X \\sim B(20; 0{,}03)$.<br> Thùng loại III khi $X \\ge 3$. Ta tính phần bù là $P(X \\le 2)$. <br><b>-</b> $\\mathrm{P}(X=0) = (0{,}97)^{20} \\approx 0{,}54379$. <br><b>-</b> $\\mathrm{P}(X=1) = \\mathrm{C}_{20}^1 (0{,}03)^1 (0{,}97)^{19} \\approx 0{,}33636$. <br><b>-</b> $\\mathrm{P}(X=2) = \\mathrm{C}_{20}^2 (0{,}03)^2 (0{,}97)^{18} \\approx 0{,}09883$. $\\mathrm{P}(X \\le 2) \\approx 0{,}54379 + 0{,}33636 + 0{,}09883 = 0{,}97898$.<br> Xác suất thùng loại III là $\\mathrm{P}(X \\ge 3) = 1 - \\mathrm{P}(X \\le 2) \\approx 1 - 0{,}9790 = 0{,}0210$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Chọn ngẫu nhiên một ngày thứ Bảy trong các ngày thứ Bảy của năm $2022$ mà một cửa hàng kinh doanh ô tô có mở cửa bán hàng. Gọi $X$ là số ô tô mà cửa hàng bán ra trong ngày thứ Bảy đó. Bảng phân bố xác suất của $X$ như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355588599_428.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Tính xác suất để trong ngày thứ Bảy đó cửa hàng bán được đúng $2$ chiếc ô tô.",
            "options": [
                "$0{,}18$",
                "$0{,}24$",
                "$0{,}39$",
                "$0{,}57$"
            ],
            "ans": 2,
            "explain": "Dựa vào bảng phân bố xác suất, ta thấy xác suất để biến ngẫu nhiên $X$ nhận giá trị bằng $2$ là $0{,}39$.<br> Vậy xác suất để cửa hàng bán được đúng $2$ chiếc ô tô là $\\mathrm{P}(X=2) = 0{,}39$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Chọn ngẫu nhiên một ngày thứ Bảy trong các ngày thứ Bảy của năm $2022$ mà một cửa hàng kinh doanh ô tô có mở cửa bán hàng. Gọi $X$ là số ô tô mà cửa hàng bán ra. Bảng phân bố xác suất của $X$ như sau: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355588599_428.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Tính xác suất để cửa hàng bán được <b>không quá</b> $4$ chiếc ô tô.",
            "options": [
                "$0{,}14$",
                "$0{,}95$",
                "$0{,}81$",
                "$0{,}05$"
            ],
            "ans": 1,
            "explain": "Biến cố \"bán được không quá $4$ chiếc ô tô\" tương ứng với $X \\le 4$, tức là $X \\in \\{1; 2; 3; 4\\}$.<br> Ta có: $$\\mathrm{P}(X \\le 4) = \\mathrm{P}(X=1) + \\mathrm{P}(X=2) + \\mathrm{P}(X=3) + \\mathrm{P}(X=4)$$ $$= 0{,}18 + 0{,}39 + 0{,}24 + 0{,}14 = 0{,}95.$$ \\textit{Cách khác:} Sử dụng biến cố đối \"bán được nhiều hơn $4$ chiếc\" ($X \\in \\{5; 6\\}$). $$\\mathrm{P}(X \\le 4) = 1 - [\\mathrm{P}(X=5) + \\mathrm{P}(X=6)] = 1 - (0{,}04 + 0{,}01) = 1 - 0{,}05 = 0{,}95.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Chọn ngẫu nhiên một ngày thứ Bảy trong các ngày thứ Bảy của năm $2022$ mà một cửa hàng kinh doanh ô tô có mở cửa bán hàng. Gọi $X$ là số ô tô mà cửa hàng bán ra. Bảng phân bố xác suất của $X$ là: <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768355588599_428.png\" style=\"max-width:100%;margin:10px 0;border-radius:5px\"> Tính số ô tô trung bình bán được trong một ngày thứ Bảy (kỳ vọng của $X$).",
            "options": [
                "$2{,}00$",
                "$3{,}50$",
                "$3{,}00$",
                "$2{,}50$"
            ],
            "ans": 3,
            "explain": "Số ô tô trung bình bán được chính là kỳ vọng $\\mathrm{E}(X)$. \\begin{eqnarray*} \\mathrm{E}(X) &=& 1 \\cdot 0{,}18 + 2 \\cdot 0{,}39 + 3 \\cdot 0{,}24 + 4 \\cdot 0{,}14 + 5 \\cdot 0{,}04 + 6 \\cdot 0{,}01<br> &=& 0{,}18 + 0{,}78 + 0{,}72 + 0{,}56 + 0{,}20 + 0{,}06<br> &=& 2{,}50. \\end{eqnarray*} Vậy trung bình mỗi ngày thứ Bảy cửa hàng bán được $2{,}5$ chiếc ô tô.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tỉ lệ người có nhóm máu O trong một cộng đồng là $40\\%$. Chọn ngẫu nhiên một cách độc lập $8$ người từ cộng đồng đó. Tính xác suất để có đúng $3$ người được chọn có nhóm máu O (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}1239$",
                "$0{,}2787$",
                "$0{,}2322$",
                "$0{,}0498$"
            ],
            "ans": 1,
            "explain": "Gọi $X$ là số người có nhóm máu O trong $8$ người được chọn ($0 \\le X \\le 8$). Xác suất người có nhóm máu O là $p = 40\\% = 0{,}4$. Suy ra $X$ tuân theo phân phối nhị thức $B(8; 0{,}4)$.<br> Công thức tính xác suất là $\\mathrm{P}(X=k) = \\mathrm{C}_8^k (0{,}4)^k (0{,}6)^{8-k}$.<br> Xác suất để có đúng $3$ người có nhóm máu O là $$\\mathrm{P}(X=3) = \\mathrm{C}_8^3 \\cdot (0{,}4)^3 \\cdot (0{,}6)^5 = 56 \\cdot 0{,}064 \\cdot 0{,}07776 \\approx 0{,}2787.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tỉ lệ người có nhóm máu O trong một cộng đồng là $40\\%$. Chọn ngẫu nhiên một cách độc lập $8$ người. Tính xác suất để có từ $3$ đến $5$ người được chọn có nhóm máu O (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}5000$",
                "$0{,}3561$",
                "$0{,}6348$",
                "$0{,}2787$"
            ],
            "ans": 2,
            "explain": "Gọi $X$ là số người có nhóm máu O. Ta có $X \\sim B(8; 0{,}4)$.<br> Xác suất cần tìm là $\\mathrm{P}(3 \\le X \\le 5) = \\mathrm{P}(X=3) + \\mathrm{P}(X=4) + \\mathrm{P}(X=5)$. <br><b>-</b> $\\mathrm{P}(X=3) = \\mathrm{C}_8^3 (0{,}4)^3 (0{,}6)^5 \\approx 0{,}27869$. <br><b>-</b> $\\mathrm{P}(X=4) = \\mathrm{C}_8^4 (0{,}4)^4 (0{,}6)^4 = 70 \\cdot (0{,}4)^4 \\cdot (0{,}6)^4 \\approx 0{,}23224$. <br><b>-</b> $\\mathrm{P}(X=5) = \\mathrm{C}_8^5 (0{,}4)^5 (0{,}6)^3 = 56 \\cdot (0{,}4)^5 \\cdot (0{,}6)^3 \\approx 0{,}12386$. Vậy $\\mathrm{P}(3 \\le X \\le 5) \\approx 0{,}27869 + 0{,}23224 + 0{,}12386 = 0{,}63479 \\approx 0{,}6348$.",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Tỉ lệ người có nhóm máu O trong một cộng đồng là $40\\%$. Chọn ngẫu nhiên một cách độc lập $8$ người từ cộng đồng đó. Gọi $X$ là số người có nhóm máu O trong $8$ người được chọn. Tính kì vọng $\\mathrm{E}(X)$ và phương sai $\\mathrm{V}(X)$ của $X$.",
            "options": [
                "$\\mathrm{E}(X)=3{,}2$ và $\\mathrm{V}(X)=1{,}38$",
                "$\\mathrm{E}(X)=4{,}0$ và $\\mathrm{V}(X)=2{,}40$",
                "$\\mathrm{E}(X)=3{,}2$ và $\\mathrm{V}(X)=1{,}28$",
                "$\\mathrm{E}(X)=3{,}2$ và $\\mathrm{V}(X)=1{,}92$"
            ],
            "ans": 3,
            "explain": "Biến ngẫu nhiên $X$ tuân theo phân phối nhị thức với $n=8$ và $p=0{,}4$.<br> Kì vọng của $X$ là: $$\\mathrm{E}(X) = n \\cdot p = 8 \\cdot 0{,}4 = 3{,}2.$$ Phương sai của $X$ là: $$\\mathrm{V}(X) = n \\cdot p \\cdot (1-p) = 8 \\cdot 0{,}4 \\cdot (1-0{,}4) = 3{,}2 \\cdot 0{,}6 = 1{,}92.$$",
            "id": "",
            "point": 0.2
        },
        {
            "type": "mcq",
            "q": "Có $60\\%$ tài xế thường xuyên nghe tin tức giao thông trên đài khi lái xe. Chọn ngẫu nhiên một cách độc lập $6$ tài xế. Tính xác suất để có ít nhất $5$ tài xế thường xuyên nghe tin tức giao thông trên đài (làm tròn kết quả đến $4$ chữ số thập phân).",
            "options": [
                "$0{,}1866$",
                "$0{,}0467$",
                "$0{,}2333$",
                "$0{,}7667$"
            ],
            "ans": 2,
            "explain": "Gọi $X$ là số tài xế thường xuyên nghe tin tức ($X \\sim B(6; 0{,}6)$).<br> Biến cố \"có ít nhất $5$ tài xế\" tương ứng với $X \\ge 5$, tức là $X=5$ hoặc $X=6$.<br> Ta có: <br><b>-</b> $\\mathrm{P}(X=5) = \\mathrm{C}_6^5 (0{,}6)^5 (0{,}4)^1 = 6 \\cdot 0{,}07776 \\cdot 0{,}4 \\approx 0{,}1866$. <br><b>-</b> $\\mathrm{P}(X=6) = \\mathrm{C}_6^6 (0{,}6)^6 (0{,}4)^0 = 1 \\cdot 0{,}046656 \\cdot 1 \\approx 0{,}0467$. Vậy xác suất cần tìm là $$\\mathrm{P}(X \\ge 5) = \\mathrm{P}(X=5) + \\mathrm{P}(X=6) \\approx 0{,}1866 + 0{,}0467 = 0{,}2333.$$",
            "id": "",
            "point": 0.2
        }
    ]
};