<template>
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

                    <li class="nav-item start active">
                        <a href="#" class="nav-link nav-toggle">
                            <i class="material-icons">dashboard</i>
                            <span class="title">Dashboard</span>
                            <span class="selected"></span>
                            <span class="arrow open"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item active">
                                <a href="index.html" class="nav-link ">
                                    <span class="title">Dashboard 1</span>
                                    <span class="selected"></span>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a href="dashboard2.html" class="nav-link ">
                                    <span class="title">Dashboard 2</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- end sidebar menu -->
</template>

<script>

    export default {

    }
</script>

<style scoped>

</style>