import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";


function ButtonPage() {

    return (
        <div>
            <div>
                <Button success rounded outline className='mb-5'>
                    <GoBell className="mr-1"/>
                    Click Me
                </Button>
            </div>
            <div>
                <Button danger outline className='mb-5'>
                    <GoCloudDownload />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button warning className='mb-5'>
                    <GoDatabase />
                    Add to Cart
                </Button>
            </div>
            <div>
                <Button secondary outline className='mb-5'>Add to Favorites</Button>
            </div>
            <div>
                <Button primary rounded className='mb-5'>Cancel</Button>
            </div>
        </div>
    );
}

export default ButtonPage;