import React from 'React';

class VideoThumb extends React.Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <div class="col-4">
            <img
              class="img-fluid img-responsive rounded"
              src="http://placehold.it/450x300"
              alt=""
            />
          </div>
          <div class="col-4">
            <h2 className="feature-client-headline">About Modern Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              voluptate nihil eum consectetur similique? Consectetur, quod,
              incidunt, harum nisi dolores delectus reprehenderit voluptatem
              perferendis dicta dolorem non blanditiis ex fugiat.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Saepe, magni,
              aperiam vitae illum voluptatum aut sequi impedit non velit ab ea
              pariatur sint quidem corporis eveniet. Odit, temporibus
              reprehenderit dolorum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
              ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
              necessitatibus perspiciatis quis?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoThumb;
