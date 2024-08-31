new Vue({
    el: '#nav-bar',
    data: {
        showmenu: false
    },
    methods: {
        mostrarmenu() {
            this.showmenu = !this.showmenu;
        },
        cerrarmenu() {
            this.showmenu = false;
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target) && this.showmenu) {
                this.showmenu = false;
            }
        },
        setActiveNavLink() {
            const scrollPosition = document.querySelector('.scroller').scrollTop;
            const sections = document.querySelectorAll('.secciones');
            const navLinks = document.querySelectorAll('.item');

            sections.forEach(section => {
                const top = section.offsetTop - document.querySelector('.scroller').offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    const sectionId = section.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('href') === `/#${sectionId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        document.querySelector('.scroller').addEventListener('scroll', this.setActiveNavLink);
        window.onload = this.setActiveNavLink;
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
        document.querySelector('.scroller').removeEventListener('scroll', this.setActiveNavLink);
    }
});