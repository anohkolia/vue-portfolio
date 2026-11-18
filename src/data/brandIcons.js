// Logos de marques (simple-icons). Seuls les SVG importés ici sont inclus dans le bundle.
// On n'en garde que le tracé pour les rendre en <svg> inline, colorables via `currentColor`.
import css from 'simple-icons/icons/css.svg?raw'
import git from 'simple-icons/icons/git.svg?raw'
import github from 'simple-icons/icons/github.svg?raw'
import gitlab from 'simple-icons/icons/gitlab.svg?raw'
import html5 from 'simple-icons/icons/html5.svg?raw'
import javascript from 'simple-icons/icons/javascript.svg?raw'
import laravel from 'simple-icons/icons/laravel.svg?raw'
import mysql from 'simple-icons/icons/mysql.svg?raw'
import openjdk from 'simple-icons/icons/openjdk.svg?raw'
import photopea from 'simple-icons/icons/photopea.svg?raw'
import php from 'simple-icons/icons/php.svg?raw'
import python from 'simple-icons/icons/python.svg?raw'
import tailwindcss from 'simple-icons/icons/tailwindcss.svg?raw'
import trello from 'simple-icons/icons/trello.svg?raw'
import vuedotjs from 'simple-icons/icons/vuedotjs.svg?raw'

const pathOf = (svg) => svg.match(/<path d="([^"]+)"/)?.[1] ?? ''

export const brandIcons = Object.fromEntries(
  Object.entries({
    css,
    git,
    github,
    gitlab,
    html5,
    javascript,
    laravel,
    mysql,
    openjdk,
    photopea,
    php,
    python,
    tailwindcss,
    trello,
    vuedotjs,
  }).map(([name, svg]) => [name, pathOf(svg)]),
)
