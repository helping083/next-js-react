import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  const addMeetupHandler = async (data) => {
    const response = await fetch('/api/new-meetup', {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const datas = await response.json();

    console.log(datas);
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
};

export default NewMeetup;