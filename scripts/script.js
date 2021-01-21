const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// VANTA.CLOUDS2({
//     el: "#your-element-selector",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     texturePath: "./gallery/noise.png"
// })

$(function () {
    const date = new Date();
    const dateString = weekdayNames[date.getDay()] + " "
        + monthNames[date.getMonth()] + " "
        + date.getDate() + " "
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " "
        + date.getFullYear()

    $('#terminal').terminal({
        contact: function () {
            this.echo('\n[[;#8a9cfe;]discord]: kn#4000');
            this.echo('[[;#d64a3a;]mail]: dawkocik@\x00gmail.com');
            this.echo('[[;#269ed1;]telegram]: @knuieiey')
            this.echo('[[;#fff;]github]: github.com/dawkocik/');
            this.echo('[[;#0077b7;]linkedin]: linkedin.com/in/dawid-kocik\n');
        },
        '?': function () {
            this.echo('Available commands:\n'
                + '  contact - reach me\n'
                + '  projects - explore my projects\n'
                + '  about - about me\n'
                + '  skills - my skills\n');
        },
        projects: function () {
            this.echo('[[;#ff66ff;]knotbot] - A Discord bot used mostly for stats and an advanced ranking system including elo counting from voice channel activity');
        },
        about: function () {
            this.echo("\n[[g;white;]Dawid Kocik - a self-taught programmer and graphic amateur.\nDuring my free time I enjoy playing video games.\nMy biggest dream is to visit Tokyo.]\n")
        },
        skills: function () {
            this.echo('\n[[;#336e9e;]python] - very good\n'
                + '[[;#e76f00;;]java] - decent\n'
                + '[[;#2496ed;;]docker] - good\n'
                + '[[;#27ab78;;]django] - decent\n'
                + '[[;#00aaff;;]photoshop] - correct\n'
                + '[[;#f7602a;;]html] & [[;#35a9e2;;]css] - basic\n'
            );
        },
        './sc.sh': function () {
            this.echo('siema')
        }
    }, {
        greetings: 'Welcome to knOS 40.00 LTS (GNU/Linux 4.15.0-72-generic x86_64)\n\n'
            + 'Available commands:\n'
            + '  contact - reach me\n'
            + '  projects - explore my projects\n'
            + '  about - about me\n'
            + '  skills - my skills\n\n'
            + `Last login: ${dateString} from 127.0.0.1\n`,
        name: 'terminal',
        height: 400,
        prompt: '[[;#8dfd36;;]root@dawpc][[;#FFFFFF;;]:][[;#6c9bd0;;]~][[;#FFFFFF;;]$] '
    });
})

