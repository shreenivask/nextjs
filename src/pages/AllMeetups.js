import MeetupList from "../components/meetups/MeetupList";
const DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 1, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/6/6c/1650_Grand_Concourse.jpg',
        address: 'Meetupstreet 25, 67890 Meetup City',
        description:
            'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetups() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DATA} />
        </section>
    ); 
};

export default AllMeetups;