<!-- start sidebar menu -->
<div class="sidebar-container">
    <div class="sidemenu-container navbar-collapse collapse fixed-menu">
        <div id="remove-scroll">
            <ul class="sidemenu page-header-fixed p-t-20" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                <li class="sidebar-toggler-wrapper hide">
                    <div class="sidebar-toggler">
                        <span></span>
                    </div>
                </li>
                <li class="sidebar-user-panel">
                    <div class="user-panel">
                        <div class="row">
                            <div class="sidebar-userpic">
                                <img src="assets/img/dp.jpg" class="img-responsive" alt=""> </div>
                        </div>
                        <div class="profile-usertitle">
                            <div class="sidebar-userpic-name"> John Deo </div>
                            <div class="profile-usertitle-job"> Manager </div>
                        </div>
                        <div class="sidebar-userpic-btn">
                            <a class="tooltips" href="user_profile.html" data-placement="top" data-original-title="Profile">
                                <i class="material-icons">person_outline</i>
                            </a>
                            <a class="tooltips" href="email_inbox.html" data-placement="top" data-original-title="Mail">
                                <i class="material-icons">mail_outline</i>
                            </a>
                            <a class="tooltips" href="chat.html" data-placement="top" data-original-title="Chat">
                                <i class="material-icons">chat</i>
                            </a>
                            <a class="tooltips" href="login.html" data-placement="top" data-original-title="Logout">
                                <i class="material-icons">input</i>
                            </a>
                        </div>
                    </div>
                </li>

                @include('admin.common.sidebar-items', ['items' => $sidebar_menu->roots()])

            </ul>
        </div>
    </div>
</div>
<!-- end sidebar menu -->