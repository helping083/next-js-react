import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
  {id: '1', title: 'munich', image: 'https://res.klook.com/image/upload/Mobile/City/xxm5eghz6vaayblixclj.jpg', address: 'some address', description: 'test meetups'},
  {id: '1', title: 'munich', image: 'https://res.klook.com/image/upload/Mobile/City/xxm5eghz6vaayblixclj.jpg', address: 'some address', description: 'test meetups'},
  {id: '1', title: 'munich', image: 'https://res.klook.com/image/upload/Mobile/City/xxm5eghz6vaayblixclj.jpg', address: 'some address', description: 'test meetups'}
]

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={MEETUPS}/>
    </>
  )
}
