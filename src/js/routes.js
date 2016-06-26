/**
 * angular routes file
 * Created by chenzhen on 15/12/15.
 */
function config($stateProvider, $urlRouterProvider , $httpProvider){

    //default route
    $urlRouterProvider.otherwise("/home/");

    $stateProvider
        //index page
        .state('home', {
            abstract: true,
            url: '/home',
            templateUrl: "ngviews/common/layout.html"
        })
        .state('home.default', {
            url:'/',
            templateUrl: "ngviews/common/default.html",
            data: {pageTitle: '首页'}
        })
        .state('home.discovery', {
            url:'/discovery',
            templateUrl: "ngviews/home/discovery.html",
            data: {pageTitle: '首页'}
        })
        .state('home.list', {
            url:'/list',
            templateUrl: "ngviews/tournament/list.html",
            data: {pageTitle: 'tournaments'}
        })
        .state('home.create', {
            url:'/create',
            templateUrl: "ngviews/tournament/create.html",
            data: {pageTitle: '创建比赛'}
        })
        .state('home.detail', {
            abstract: true,
            url:'/detail',
            templateUrl: "ngviews/tournament/detail.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.detail.general', {
            url:'/general',
            templateUrl: "ngviews/tournament/detail_general.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.detail.comments', {
            url:'/comments',
            templateUrl: "ngviews/tournament/detail_comments.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.detail.participants', {
            url:'/participants',
            templateUrl: "ngviews/tournament/detail_participants.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.team', {
            url:'/team',
            templateUrl: "ngviews/team/team.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.teamCreate', {
            url:'/teamcreate',
            templateUrl: "ngviews/team/team_create.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.myTeam', {
            url:'/myteam',
            templateUrl: "ngviews/team/my_team.html",
            data: {pageTitle: '详情页'}
        })
        .state('home.teamEdit', {
            url:'/teamEdit',
            templateUrl: "ngviews/team/team_edit.html",
            data: {pageTitle: '详情页'}
        })
        // Club Route
        .state('home.clubList', {
            url: '/clubList',
            templateUrl: "ngviews/club/club_list.html",
            data: {pageTitle: 'Club List'}
        })
        .state('home.clubCreate', {
            url: '/clubCreate',
            templateUrl: "ngviews/club/club_create.html",
            data: {pageTitle: 'Club Create'}
        })
        .state('home.club', {
            abstract: true,
            url: '/club',
            templateUrl: "ngviews/club/detail.html",
            data: {pageTitle: 'Club'}
        })
        .state('home.club.detail', {
            url: '/detail',
            templateUrl: "ngviews/club/detail_general.html",
            data: {pageTitle: 'Club Detail'}
        })
        .state('home.club.members', {
            url: '/members',
            templateUrl: "ngviews/club/detail_members.html",
            data: {pageTitle: 'Club Members'}
        })
        .state('home.club.tournaments', {
            url: '/tournaments',
            templateUrl: "ngviews/club/detail_tournaments.html",
            data: {pageTitle: 'Club Tournaments'}
        })


        // User Route
        .state('home.user', {
            abstract: true,
            url: '/user',
            templateUrl: "ngviews/user/profile.html",
            data: {pageTitle: 'Profile'}
        })
        .state('home.user.profile', {
            url: '/profile',
            templateUrl: "ngviews/user/my_general.html",
            data: {pageTitle: 'Profile'}
        })
        .state('home.user.friends', {
            url: '/myFriends',
            templateUrl: "ngviews/user/my_friends.html",
            data: {pageTitle: 'My Friends'}
        })
        .state('home.user.tournaments', {
            url: '/mytournaments',
            templateUrl: "ngviews/user/my_tournaments.html",
            data: {pageTitle: 'My Tournaments'}
        })
}

angular
    .module('indigo')
    .config(config)
    .run()