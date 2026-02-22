import StatsCard from '../../components/StatsCard';
import BookingOverview from '../../components/BookingOverview';
import RecentTransactions from '../../components/RecentTransactions';
import CarAvailability from '../../components/CarAvailability';
import RentalDetails from '../../components/RentalDetails';
import TopCarsChart from '../../components/TopCarsChart';
import BookingTable from '../../components/BookingTable';

const Dashboard = () => {
    return (
        <div className="dashboard-content space-y-8">
            <section className="stats-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Revenue"
                    value="78.423"
                    percentage="15.2%"
                    trend="up"
                    icon="/assets/Total-revenue-icon.png"
                />
                <StatsCard
                    title="New Booking"
                    value="32.567"
                    percentage="5.2%"
                    trend="up"
                    icon="/assets/New booking icon.png"
                />
                <StatsCard
                    title="Rented Cars"
                    value="41.411"
                    percentage="21.2%"
                    trend="up"
                    icon="/assets/Rented cars icon.png"
                />
                <StatsCard
                    title="Available Cars"
                    value="28.623"
                    percentage="7.2%"
                    trend="up"
                    icon="/assets/Avalible cars icon.png"
                />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BookingOverview />
                </div>
                <div className="lg:col-span-1">
                    <CarAvailability />
                </div>
            </section>

            <section>
                <BookingTable />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RentalDetails />
                <div className="space-y-6 flex flex-col h-full">
                    <TopCarsChart />
                    <div className="flex-1">
                        <RecentTransactions />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Dashboard;
