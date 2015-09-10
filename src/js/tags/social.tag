<social>
    <div class="col-xs-4 col-sm-2 text-center" each={link in opts.data.social}>
        <a href="{link.url}" target="_blank">
            <svg-icon class="icon-{link.icon}" link="icon-{link.icon}"></svg-icon>
            <div>{link.name}</div>
        </a>
    </div>

    <script>
        riot.tag('svg-icon', '<svg></svg>', function (opts) {
            var tag = this;

            tag.on('mount', function () {
                var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                var svg = tag.root.querySelector('svg');

                use.setAttributeNS(
                        'http://www.w3.org/1999/xlink', // xlink NS URI
                        'href',                         // attribute (no 'xlink:')
                        '#' + opts.link);

                if (opts.class) {
                    svg.setAttribute('class', opts.class)
                }

                svg.appendChild(use);
                tag.root.parentNode.replaceChild(svg, tag.root)
            })
        });
    </script>
</social>
