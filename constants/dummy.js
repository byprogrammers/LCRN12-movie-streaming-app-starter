export const newSeason = [
    {
        id: 1,
        name: "Barbarians",
        thumbnail: require("../assets/images/series/barbarians/barbarians_cover.jpg"),
        stillWatching: [
            {
                id: 1,
                profile: require("../assets/images/dummy_profile/1.jpg")
            },
            {
                id: 2,
                profile: require("../assets/images/dummy_profile/2.jpg")
            },
            {
                id: 3,
                profile: require("../assets/images/dummy_profile/3.jpg")
            },
            {
                id: 4,
                profile: require("../assets/images/dummy_profile/4.jpg")
            },
            {
                id: 5,
                profile: require("../assets/images/dummy_profile/5.jpg")
            },
            {
                id: 6,
                profile: require("../assets/images/dummy_profile/6.jpg")
            },
        ],
        details: {
            image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 2,
        name: "Bridgerton",
        thumbnail: require("../assets/images/series/bridgerton/bridgerton_cover.jpg"),
        stillWatching: [
            {
                id: 1,
                profile: require("../assets/images/dummy_profile/6.jpg")
            },
            {
                id: 2,
                profile: require("../assets/images/dummy_profile/7.jpg")
            },
            {
                id: 3,
                profile: require("../assets/images/dummy_profile/3.jpg")
            },
            {
                id: 4,
                profile: require("../assets/images/dummy_profile/4.jpg")
            }
        ],
        details: {
            image: require("../assets/images/series/bridgerton/bridgerton.jpg"),
            age: "18+",
            genre: "Romance",
            ratings: 7.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 3,
        name: "Money Heist",
        thumbnail: require("../assets/images/series/money_heist/money_heist_cover.jpg"),
        stillWatching: [],
        details: {
            image: require("../assets/images/series/money_heist/money_heist.jpg"),
            age: "16+",
            genre: "Crime",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 4,
        name: "Salvation",
        thumbnail: require("../assets/images/series/salvation/salvation_cover.jpg"),
        stillWatching: [
            {
                id: 1,
                profile: require("../assets/images/dummy_profile/1.jpg")
            },
            {
                id: 2,
                profile: require("../assets/images/dummy_profile/2.jpg")
            },
            {
                id: 3,
                profile: require("../assets/images/dummy_profile/3.jpg")
            },
        ],
        details: {
            image: require("../assets/images/series/salvation/salvation.jpg"),
            age: "13+",
            genre: "Sci-Fi",
            ratings: 7.0,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Pilot"',
            runningTime: "45m",
            progress: "0%"
        }
    },
]
export const continueWatching = [
    {
        id: 1,
        name: "Prison Break",
        thumbnail: require("../assets/images/series/prison_break/prison_break_cover.jpg"),
        overallProgress: "20%",
        details: {
            image: require("../assets/images/series/prison_break/prison_break.webp"),
            age: "16+",
            genre: "Action",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E8 "Episode 8 : The Old Head"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 2,
        name: "House of Cards",
        thumbnail: require("../assets/images/series/house_of_cards/house_of_cards_cover.jpg"),
        overallProgress: "50%",
        details: {
            image: require("../assets/images/series/house_of_cards/house_of_cards.jpg"),
            age: "16+",
            genre: "Political Drama",
            ratings: 8.7,
            season: "SEASON 1",
            currentEpisode: 'S4 : E1 "Chapter 40"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 3,
        name: "Bridgerton",
        thumbnail: require("../assets/images/series/bridgerton/bridgerton_cover.jpg"),
        overallProgress: "70%",
        details: {
            image: require("../assets/images/series/bridgerton/bridgerton.jpg"),
            age: "18+",
            genre: "Romance",
            ratings: 7.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 4,
        name: "Money Heist",
        thumbnail: require("../assets/images/series/money_heist/money_heist_cover.jpg"),
        overallProgress: "40%",
        details: {
            image: require("../assets/images/series/money_heist/money_heist.jpg"),
            age: "16+",
            genre: "Crime",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
            runningTime: "45m",
            progress: "50%"
        }
    },
]

const dummyData = { newSeason, continueWatching };

export default dummyData;