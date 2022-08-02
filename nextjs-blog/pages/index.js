import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const MEETUPS = [
  {id: '1', title: 'munich', image: 'https://res.klook.com/image/upload/Mobile/City/xxm5eghz6vaayblixclj.jpg', address: 'some address', description: 'test meetups'},
  {id: '2', title: 'munich', image: 'https://res.klook.com/image/upload/Mobile/City/xxm5eghz6vaayblixclj.jpg', address: 'some address', description: 'test meetups'},
  {id: '3', title: 'munich', image: 'https://res.klook.com/image/upload/Mobile/City/xxm5eghz6vaayblixclj.jpg', address: 'some address', description: 'test meetups'}
]

export default function HomePage({meetups}) {
  return (
    <>
      <MeetupList meetups={meetups}/>
    </>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://helping083:olehe2103443@cluster0.8mjxj.mongodb.net/Meetups?retryWrites=true&w=majority");
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(({title, image, address, _id}) => ({
        title, image, address, id: _id.toString()
      }))
    },
    revalidate: 1
  };
};

// export async function getServerSideProps(context) {
//   console.log(context);
//   return {
//     props: {
//       meetups: MEETUPS
//     },
//   }
// };