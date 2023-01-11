import Accordion from "../components/Accordion";


function AccordionPage() {

    const items = [
        {
            id: 1,
            label: 'Label 1',
            content: 'Lorem Ipsum Text 1 Lorem Ipsum Text 1 Lorem Ipsum Text 1 Lorem Ipsum Text 1 Lorem Ipsum Text 1 Lorem Ipsum Text 1 Lorem Ipsum Text 1'
        },
        {
            id: 2,
            label: 'Label 2',
            content: 'Lorem Ipsum Text 2 Lorem Ipsum Text 2 Lorem Ipsum Text 2 Lorem Ipsum Text 2 Lorem Ipsum Text 2 Lorem Ipsum Text 2 Lorem Ipsum Text 2'
        },
        {
            id: 3,
            label: 'Label 3',
            content: 'Lorem Ipsum Text 3 Lorem Ipsum Text 3 Lorem Ipsum Text 3 Lorem Ipsum Text 3 Lorem Ipsum Text 3 Lorem Ipsum Text 3 Lorem Ipsum Text 3'
        }
    ]

    return (
        <Accordion items={items}/>
    );
}

export default AccordionPage;