import empty from '../../assets/profile_images/manageBusinessEmpty.png';

const ManageBusinessEmpty = () => {
  return (
    <div className='empty_business'>
      <img src={empty} alt='Empty' />

      <p>No business yet!</p>

      <button>+ Create a Business acccount now</button>
    </div>
  );
};

export default ManageBusinessEmpty;
