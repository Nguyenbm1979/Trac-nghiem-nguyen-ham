window.EXAM_DATA = {
    "title": "Đề kiểm tra chương 1, Chuyên đề 1, Toán 12, năm 2026",
    "subject": "Toan",
    "grade": "12",
    "time": 30,
    "password": "4bef2b0bc08ba71ef7662b7f5df09171",
    "encrypted": false,
    "shuffle": true,
    "viewDetail": false,
    "music": false,
    "allowPrint": false,
    "minTime": 50,
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
        },
        {
            "type": "mcq",
            "q": "Giả sử số ca cấp cứu ở một bệnh viện vào tối thứ Bảy là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <style>\n  .flex-container {\n    display: flex;\n    justify-content: center; /* Canh giữa theo chiều ngang */\n    align-items: center;     /* Canh giữa theo chiều dọc (nếu có chiều cao) */\n  }\n</style>\n<div class=\"flex-container\">\n  <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768342231549_460.png\">\n</div> Tính xác suất để xảy ra ít nhất một ca cấp cứu ở bệnh viện đó vào tối thứ Bảy.",
            "options": [
                "$0{,}12$",
                "$0{,}28$",
                "$0{,}88$",
                "$0{,}78$"
            ],
            "ans": 2,
            "explain": "Xác suất để xảy ra ít nhất một ca cấp cứu là $\\mathrm{P}(X \\ge 1)$.<br> Ta có: $\\mathrm{P}(X \\ge 1) = 1 - \\mathrm{P}(X < 1) = 1 - \\mathrm{P}(X=0)$.<br> Theo bảng phân bố xác suất, $\\mathrm{P}(X=0) = 0{,}12$.<br> Vậy $\\mathrm{P}(X \\ge 1) = 1 - 0{,}12 = 0{,}88$.",
            "id": "",
            "point": 0.5
        },
        {
            "type": "mcq",
            "q": "Giả sử số ca cấp cứu ở một bệnh viện vào tối thứ Bảy là một biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất như sau: <style>\n  .flex-container {\n    display: flex;\n    justify-content: center; /* Canh giữa theo chiều ngang */\n    align-items: center;     /* Canh giữa theo chiều dọc (nếu có chiều cao) */\n  }\n</style>\n<div class=\"flex-container\">\n  <img src=\"https://raw.githubusercontent.com/Nguyenbm1979/Trac-nghiem-nguyen-ham/main/images/img_1768342231549_460.png\">\n</div> Biết rằng nếu có hơn $3$ ca cấp cứu thì bệnh viện phải tăng cường thêm bác sĩ trực. Tính xác suất phải tăng cường bác sĩ trực vào tối thứ Bảy ở bệnh viện đó.",
            "options": [
                "$0{,}10$",
                "$0{,}19$",
                "$0{,}29$",
                "$0{,}08$"
            ],
            "ans": 0,
            "explain": "Biến cố \"phải tăng cường thêm bác sĩ trực\" tương ứng với $X > 3$.<br> Dựa vào bảng phân bố xác suất, ta có các giá trị của $X$ thỏa mãn là $X=4$ và $X=5$.<br> Vậy xác suất cần tìm là: $$\\mathrm{P}(X > 3) = \\mathrm{P}(X=4) + \\mathrm{P}(X=5) = 0{,}08 + 0{,}02 = 0{,}10.$$",
            "id": "",
            "point": 0.5,
            "img": ""
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
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
            "point": 0.5
        },
        {
            "type": "mcq",
            "q": "Có $60\\%$ tài xế thường xuyên nghe tin tức giao thông trên đài khi lái xe. Chọn ngẫu nhiên một cách độc lập $6$ tài xế. Tính xác suất để có đúng $4$ tài xế thường xuyên nghe tin tức giao thông trên đài.",
            "options": [
                "$\\mathrm{C}_6^4(0{,}6)^4(0{,}4)^2$",
                "$\\mathrm{C}_6^4(0{,}4)^4(0{,}6)^2$",
                "$4(0{,}6)^4(0{,}4)^2$",
                "$(0{,}6)^4(0{,}4)^2$"
            ],
            "ans": 0,
            "explain": "Gọi $X$ là số tài xế thường xuyên nghe tin tức giao thông trong $6$ người.<br> Xác suất thành công là $p = 60\\% = 0{,}6$. Xác suất thất bại là $1-p = 0{,}4$.<br> Số phép thử $n=6$. Ta có $X \\sim B(6; 0{,}6)$.<br> Xác suất để có đúng $4$ tài xế nghe tin tức là $$\\mathrm{P}(X=4) = \\mathrm{C}_6^4 \\cdot (0{,}6)^4 \\cdot (1-0{,}6)^{6-4} = \\mathrm{C}_6^4 (0{,}6)^4 (0{,}4)^2.$$",
            "id": "",
            "point": 0.5
        }
    ]
};