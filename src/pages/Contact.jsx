export default function Contact() {
  return (
    <div class='mycard'>
      <h1 class='title'>Contact Me</h1>
      <form action="" method="get" class="form-example">
        <div class="form">
          <input type="text" name="name" id="name" required  placeholder="Name"/>
        </div>
        <div class="form">
          <input type="email" name="email" id="email" required  placeholder="Email"/>
        </div>
        <div class="form">
        <textarea id="message" name="message" rows="4" cols="50" required placeholder='Leave me a short message about our opportunity to work together.'></textarea>
        </div>
        <div class="form">
          <input type="submit" value="Say Hello!"  class='sub-button'/>
        </div>
      </form>
    </div>
  );
}
