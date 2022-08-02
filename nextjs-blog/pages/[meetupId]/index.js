import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from 'mongodb';

const MeetupDetails = ({meetupData: { title, image, address, description }}) => {
  return (
    <Fragment>
      <MeetupDetail
        image={image}
        address={address}
        title={title}
        description={description}
      />
    </Fragment>

  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://helping083:olehe2103443@cluster0.8mjxj.mongodb.net/Meetups?retryWrites=true&w=majority");
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  
  client.close();
  return {
    paths: meetups.map(({_id}) => ({params: {meetupId: _id.toString()}})),
    fallback: false
  }
}

export async function getStaticProps(ctx) {
  const meetupId = ctx.params.meetupId;
  const client = await MongoClient.connect("mongodb+srv://helping083:olehe2103443@cluster0.8mjxj.mongodb.net/Meetups?retryWrites=true&w=majority");
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    revalidate: 1
  };
}

export default MeetupDetails;