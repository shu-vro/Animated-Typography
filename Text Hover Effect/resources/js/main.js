let w_links = document.querySelectorAll("a");
for (let i = 0; i < w_links.length; i++) {
    const link = w_links[i];
    link.innerHTML = link.textContent.replace(
        /\S/g,
        `<span class="jump-target"><span class="jumped">$&</span><span class="jumping">$&</span></span>`
    );

    let s_e = link.querySelectorAll("span.jumped");
    let s_i = link.querySelectorAll("span.jumping");
    for (let i = 0; i < s_i.length; i++) {
        s_i[i].setAttribute("style", `--come: ${i}`);
    }
    for (let i = 0; i < s_e.length; i++) {
        s_e[i].setAttribute("style", `--come: ${i}`);
    }
}
