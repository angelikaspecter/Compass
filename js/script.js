document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");
    var logoImg = document.querySelector('.logo__img');
    var logo = document.querySelector(".logo");

    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    header.addEventListener('mouseenter', function () {
        // Меняем src изображения на dark версию
        logoImg.src = 'img/logo_dark.svg';
    });

    header.addEventListener('mouseleave', function () {
        // Возвращаем src изображения на light версию, только если не происходит скроллинг
        if (window.scrollY <= 100) {
            logoImg.src = 'img/logo_light.svg';
        }
    });

    logo.addEventListener('mouseenter', function () {
        // Меняем src изображения на dark версию
        logoImg.src = 'img/logo_dark.svg';
    });

    logo.addEventListener('mouseleave', function () {
        // Возвращаем src изображения на light версию, только если не происходит скроллинг
        if (window.scrollY <= 100) {
            logoImg.src = 'img/logo_light.svg';
        }
    });

    window.addEventListener("scroll", function () {
        var navLinks = document.querySelectorAll(".nav__link");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.classList.add("active");
            navLinks.forEach(function (link) {
                link.classList.add("active");
            });
            // При скроллинге страницы оставляем фиксированный src у логотипа
            logoImg.src = 'img/logo_dark.svg';
        } else {
            header.classList.remove("active");
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            // Если не происходит скроллинга и нет события наведения на header или logo, возвращаем src на light версию
            if (!header.matches(':hover') && !logo.matches(':hover')) {
                logoImg.src = 'img/logo_light.svg';
            }
        }
    });

    // При клике на ссылки Contacts происходит плавный скролл к футеру
    var contactsLinks = document.querySelectorAll('a[href="#footer"]');
    contactsLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var footer = document.getElementById("footer");
            window.scrollTo({
                top: footer.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // При клике на ссылки Company происходит плавный скролл к хедеру
    var companyLinks = document.querySelectorAll('a[href="#header"]');
    companyLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var header = document.querySelector(".header");
            window.scrollTo({
                top: header.offsetTop,
                behavior: "smooth"
            });
        });
    });

    var navItems = document.querySelectorAll('.process__nav-item');

    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            // Удаление класса 'active' у всех элементов навигации
            navItems.forEach(item => {
                item.classList.remove('active');
            });

            // Добавление класса 'active' к текущему элементу навигации
            navItem.classList.add('active');

        });
    });

    // Получаем список шагов
    var stepsList = document.querySelector(".process__step");

    // Добавляем обработчик события клика для каждого элемента навигации
    navItems.forEach(function (navItem) {
        navItem.addEventListener("click", function () {
            // Получаем id соответствующего шага
            var stepId = this.id + "_show";
            // Находим соответствующий элемент шага
            var stepToShow = document.getElementById(stepId);
            // Проверяем, существует ли такой элемент
            if (stepToShow) {
                // Получаем позицию элемента шага
                var stepPosition = stepToShow.offsetLeft;
                // Передвигаем список шагов на позицию элемента шага
                stepsList.style.transform = "translateX(-" + stepPosition + "px)";
                // Удаляем класс активности у всех элементов навигации
                navItems.forEach(function (item) {
                    item.classList.remove("active");
                });
                // Добавляем класс активности текущему элементу навигации
                this.classList.add("active");
            }
        });
    });
});