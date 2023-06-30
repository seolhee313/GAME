function start() {
    $(function () {
        $(".icon0").draggable();
        $(".icon1").draggable();
        $(".icon2").draggable();
        $(".icon3").draggable();
        $(".icon4").draggable();
        $(".icon5").draggable();
        $(".music__wrap").draggable();
        $(".search__wrap").draggable();
        $(".memory__wrap").draggable();
        $(".tetris__wrap").draggable();
    });

    //icon1
    //드래그
    $(".icon1").draggable({
        containment: ".icon__box",
        scroll: false,
        //드래그시 마우스 이미지(색) 바꾸기
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse01.png");
        },

        //드래그 할 때 헤더 색 바꾸기
        drag: function () {
            $("header").css("background-color", "#f99191b6");
        },
    });
    //클릭
    $(".icon1").click(function () {
        let music = $(".music");
        if (music.text() == "🎵 현재 뮤직 듣기가 중지되었습니다. 🎵") {
            music.text("🎵 현재 뮤직 듣기가 실행되었습니다. 🎵");
        } else {
            music.text("🎵 현재 뮤직 듣기가 중지되었습니다. 🎵");
        }
    });

    //icon2
    //드래그
    $(".icon2").draggable({
        //드래그시 마우스 이미지(색) 바꾸기
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse02.png");
        },

        //드래그 할 때 헤더 색 바꾸기
        drag: function () {
            $("header").css("background-color", "#919df9b0");
        },
    });
    //클릭
    $(".icon2").click(function () {
        let music = $(".music");
        if (music.text() == "🎵 현재 뮤직 듣기가 중지되었습니다. 🎵") {
            music.text("🎵 현재 뮤직 듣기가 실행되었습니다. 🎵");
        } else {
            music.text("🎵 현재 뮤직 듣기가 중지되었습니다. 🎵");
        }
    });

    //icon3
    //드래그
    $(".icon3").draggable({
        //드래그시 마우스 이미지(색) 바꾸기
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse03.png");
        },

        //드래그 할 때 헤더 색 바꾸기
        drag: function () {
            $("header").css("background-color", "#c3ff98b9");
        },
    });
    //클릭
    $(".icon3").click(function () {
        let music = $(".music");
        if (music.text() == "🎵 현재 뮤직 듣기가 중지되었습니다. 🎵") {
            music.text("🎵 현재 뮤직 듣기가 실행되었습니다. 🎵");
        } else {
            music.text("🎵 현재 뮤직 듣기가 중지되었습니다. 🎵");
        }
    });

    //icon4
    //드래그
    $(".icon4").draggable({
        containment: ".icon__box",
        scroll: false,
        //드래그시 마우스 이미지(색) 바꾸기
        start: function () {
            $(".cursor img").attr("src", "images/game_mouse04.png");
        },

        //드래그 할 때 헤더 색 바꾸기
        drag: function () {
            $("header").css("background-color", "#fbf58bb6");
        },
    });
    //클릭
    $(".icon4").click(function () {
        let music = $(".music");
        if (music.text() == "🎵 현재 뮤직 듣기가 중지되었습니다. 🎵") {
            music.text("🎵 현재 뮤직 듣기가 실행되었습니다. 🎵");
        } else {
            music.text("🎵 현재 뮤직 듣기가 중지되었습니다. 🎵");
        }
    });

    $(".music__wrap").draggable({
        scroll: false,
    });

    $(".icon1").on("click", function () {
        $("#header").animate({ backgroundColor: "#f99191b6" });
        $(".cursor img").attr("src", "images/game_mouse01.png");
        $(".music__wrap").toggle(); // 디스플레이 속성 토글
        $(".tetris__wrap").css("display", "none");
        $(".body").css("background-image", "url('images/gamebg01.jpg')");
        $(".icon1 span").animate({ backgroundColor: "#f99191b6" });

        // 다른 아이콘의 배경색 효과를 제거
        $(".icon2 span").stop().css("background-color", "");
        $(".icon3 span").stop().css("background-color", "");
        $(".icon4 span").stop().css("background-color", "");
    });

    $(".icon2").on("click", function () {
        $("#header").animate({ backgroundColor: "#919df9b0" });
        $(".cursor img").attr("src", "images/game_mouse02.png");
        $(".music__wrap").css("display", "none");
        $(".tetris__wrap").toggle(); // 디스플레이 속성 토글
        $(".body").css("background-image", "url('images/gamebg02.jpg')");
        $(".icon2 span").animate({ backgroundColor: "#919df9b0" });

        // 다른 아이콘의 배경색 효과를 제거
        $(".icon1 span").stop().css("background-color", "");
        $(".icon3 span").stop().css("background-color", "");
        $(".icon4 span").stop().css("background-color", "");
    });

    $(".icon3").on("click", function () {
        $("#header").animate({ backgroundColor: "#c3ff98b9" });
        $(".cursor img").attr("src", "images/game_mouse03.png");
        $(".music__wrap").css("display", "none");
        $(".tetris__wrap").css("display", "none");
        $(".body").css("background-image", "url('images/gamebg03.jpg')");
        $(".icon3 span").animate({ backgroundColor: "#c3ff98b9" });

        // 다른 아이콘의 배경색 효과를 제거
        $(".icon1 span").stop().css("background-color", "");
        $(".icon2 span").stop().css("background-color", "");
        $(".icon4 span").stop().css("background-color", "");
    });

    $(".icon4").on("click", function () {
        $("#header").animate({ backgroundColor: "#fbf58bb6" });
        $(".cursor img").attr("src", "images/game_mouse04.png");
        $(".music__wrap").css("display", "none");
        $(".tetris__wrap").css("display", "none");
        $(".body").css("background-image", "url('images/gamebg01.jpg')");
        $(".icon4 span").animate({ backgroundColor: "#fbf58bb6" });

        // 다른 아이콘의 배경색 효과를 제거
        $(".icon1 span").stop().css("background-color", "");
        $(".icon2 span").stop().css("background-color", "");
        $(".icon3 span").stop().css("background-color", "");
    });

    // 테트리스 게임 열기/닫기
    document.querySelector(".icon2").addEventListener("click", () => {
        document.querySelector(".tetris__wrap").classList.toggle("show");
        tetrisMusic.pause();
        document.querySelector(".music__wrap").classList.remove("show");
        pauseMusic();
        btnStop.style.display = "none";
        btnPlay.style.display = "block";
    });

    window.onload = function () {
        window.addEventListener("mousemove", (e) => {
            gsap.to(".cursor", {
                duration: 0,
                left: e.pageX - 5,
                top: e.pageY - 10,
            });
        });

        printTime(); //오른쪽 상단 시간
        printAgent(); //하단 중앙
    };

    //시간 출력
    function printTime() {
        const clock = document.querySelector(".time");
        const now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        if (hour > 12) hour = hour;
        // if (hour > 12) hour = hour - 12; //시간 -12
        if (hour < 10) hour = `0${hour}`;
        if (minute < 10) minute = `0${minute}`;
        if (second < 10) second = `0${second}`;
        const nowTime =
            now.getFullYear() +
            "년 " +
            (now.getMonth() + 1) +
            "월 " +
            now.getDate() +
            "일 " +
            hour +
            ":" +
            minute +
            ":" +
            second;
        clock.innerText = nowTime;
        setTimeout("printTime()", 1000);
    }

    //os 화면 출력
    function printAgent() {
        const agent = document.querySelector(".info");
        const os = navigator.userAgent.toLocaleLowerCase();

        if (os.indexOf("window") >= 0) {
            agent.innerText =
                "현재 windows를 사용하고 있으며, 화면 크기는 " +
                screen.width +
                " * " +
                screen.height +
                "입니다.";
            document.querySelector(".info").classList.add("window");
        } else if (os.indexOf("macintosh") >= 0) {
            agent.innerText =
                "현재 mac을 사용하고 있으며, 화면 크기는 " +
                screen.width +
                " * " +
                screen.height +
                "입니다.";
            document.querySelector("body").classList.add("mac");
        } else if (os.indexOf("iphone") >= 0) {
            agent.innerText =
                "현재 IPhone을 사용하고 있으며, 화면 크기는 " +
                screen.width +
                " * " +
                screen.height +
                "입니다.";
            document.querySelector("body").classList.add("iphone");
        } else if (os.indexOf("android") >= 0) {
            agent.innerText =
                "현재 Android를 사용하고 있으며, 화면 크기는 " +
                screen.width +
                " * " +
                screen.height +
                "입니다.";
            document.querySelector("body").classList.add("android");
        }
    }
}

export default start;
