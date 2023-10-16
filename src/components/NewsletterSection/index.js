import NewsletterSubscription from "../NewsletterSubscription";
import "./style.css";

function NewsletterSection() {
  return (
    <div className={`design-trends-container1`}>
      <NewsletterSubscription />
      <p className={`newsletter-disclaimer`}>By subscribing to our newsletter you agree to our privacy policy and will get commercial communication.</p>
    </div>
  );
}

export default NewsletterSection;
