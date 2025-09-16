

const ServicesCard = ({ service }) => {
    const { icon, title, description } = service;
    return (
        <div className="bg-[#ffffff] rounded-2xl card shadow-md hover:bg-[#caeb66] transition duration-300 p-6 w-96 mx-auto">
            <div className="flex justify-center">{icon}</div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {title}
            </h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
};

export default ServicesCard;