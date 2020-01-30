(function (window) {
    let appTemplate = `<div id="github-info-app" style="opacity: 0" >
                      <span>
                        <img id="peppa-img"  
                        :src="peppaImg">
                        <div class="pig-say">
                            <div class="pig-info-arrow" :style="peppaArrowStyle"></div>
                            <div class="pig-info" :style="peppaBgStyle">
                            <p><b>Peppa:</b> Hello world!
                            </p>                            
                            <div class="pig-info-more">
                               
                                </div>
                                </div>                               
                                <div class="action-footer"><p>Thanks Toby Qin bringing me here ^_^</p></div>
                                </div>
                            </div>
                        </div>
                    </span>
                    </div>`;

    let githubApp = new Vue({
        data: {
            message: 'Not on github now.',
            userInfo: null
        },
        methods: {
            getUserId(url) {
                let userId = '';
                let regex = /github.com\/([^\/]*)\//;
                let found = url.match(regex);
                if (found && found.length > 1) {
                    userId = found[1];
                    this.getUserInfo(userId);
                }
            },
            getUserInfo(userId) {
                fetch('https://api.github.com/users/' + userId).then(res => {
                    return res.json();
                }).then(json => {
                        this.userInfo = json;
                        this.message = this.userInfo.name;
                    }
                );
            }
        },
        created: function () {
            this.getUserId(window.location);
        }
    });



    window.githubInfo = {
        isReady(successCallBack) {
            if(window.location.includes('github')){
                successCallBack()
            }
        },
        appendToBody() {
            jq('body').append(appTemplate);
        },
        addStyle(styleUrl) {
            jq('head').append(`<link href="${styleUrl}" type="text/css" rel="stylesheet" />`);
        },
        startApp() {
            this.appendToBody();
            setTimeout(() => {
                githubApp.init();
                githubApp.$mount('#github-info-app');
            }, 3000);
        }
    };
})(window);