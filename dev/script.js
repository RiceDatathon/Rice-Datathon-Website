(() => {

    let w_height;
    let end_time = new Date(2023, 0, 27, 21);
    function size_measure() {
        w_height = window.innerHeight;
    }

    function date_diff() {
        let seconds = Math.floor((end_time - Date.now()) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        return { days, hours, minutes, seconds };
    }
    size_measure();
    const about_elem = document.getElementById("about_scroll");
    about_elem.addEventListener("click", () => {
        window.scrollTo(0, w_height);
    });
    const anim_speed = 200;
    const anim_speed_factor = 4;
    let cur_show = null;
    let start_content = document.getElementById('start_content').offsetTop + (document.getElementById('start_content').scrollHeight / 2) - (w_height / 2);
    let start_sponsor = document.getElementById('start_sponsor').offsetTop + (document.getElementById('start_sponsor').scrollHeight / 2) - w_height;
    let cur_animating = false;
    let rice_bg = new Vivus(`bg-0`, { type: 'delayed', duration: anim_speed, start: 'manual' });
    let lines_dots = new Vivus(`bg-1`, { type: 'delayed', duration: anim_speed, start: 'manual' });
    let blank = new Vivus(`bg-2`, { type: 'delayed', duration: anim_speed, start: 'manual' });
    [...document.querySelectorAll("svg")].forEach(x => { x.style.opacity = 1; })

    let t_bg = document.getElementById('bg-half-transparent');
    let cdown_days = document.getElementById('cdown_days'),
        cdown_hours = document.getElementById('cdown_hours'),
        cdown_minutes = document.getElementById('cdown_minutes'),
        cdown_seconds = document.getElementById('cdown_seconds');

    let c_d = 0,
        c_h = 0,
        c_m = 0,
        c_s = 0;

    function setTime(first = false) {
        let { days, hours, minutes, seconds } = date_diff();
        if (first) {
            c_d = days;
            c_h = hours;
            c_m = minutes;
            c_s = seconds;
            cdown_days.textContent = days;
            cdown_hours.textContent = hours;
            cdown_minutes.textContent = minutes;
            cdown_seconds.textContent = seconds;
            return
        }
        if (c_d != days) {
            c_d = days;
            cdown_days.textContent = days;
        }
        if (c_h != hours) {
            c_h = hours;
            cdown_hours.textContent = hours;
        }
        if (c_m != minutes) {
            c_m = minutes;
            cdown_minutes.textContent = minutes;
        }
        if (c_s != seconds) {
            c_s = seconds;
            cdown_seconds.textContent = seconds;
        }
    }
    setTime(true);
    setInterval(() => {
        setTime();

    }, 1000);
    setInterval(() => {
        let cur_scrollY = scrollY;
        t_bg.style.opacity = cur_scrollY / w_height;
        about_elem.style.opacity = cur_scrollY <= 0 ? 1 : 1 / cur_scrollY * 30;
        if (!cur_animating) {
            if (cur_scrollY < start_content) {
                if (cur_show !== rice_bg) {
                    if (cur_show == null) {
                        rice_bg.play(1, () => { cur_animating = false });
                        cur_show = rice_bg;
                        return;
                    }
                    cur_animating = true;
                    cur_show.play(-anim_speed_factor, () => { cur_animating = false });
                    cur_show = null;
                }
                return;
            }
            if (cur_scrollY > start_sponsor) {
                if (cur_show !== blank) {
                    if (cur_show == null) {
                        blank.play(1, () => { cur_animating = false });
                        cur_show = blank;
                        return;
                    }
                    cur_animating = true;
                    cur_show.play(-anim_speed_factor, () => { cur_animating = false });
                    cur_show = null;
                }
                return;
            }
            if (cur_show !== lines_dots) {
                if (cur_show == null) {
                    lines_dots.play(1, () => { cur_animating = false });
                    cur_show = lines_dots;
                    return;
                }
                cur_animating = true;
                cur_show.play(-anim_speed_factor, () => { cur_animating = false });
                cur_show = null;
            }


        }
    }, 100);
    window.onresize = () => {
        size_measure()
    }
})();