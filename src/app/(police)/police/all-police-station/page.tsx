import dbConnect from '@/lib/dbConnect';
import Police from '@/models/Police';

type srcParams = Promise<{ name: string }>;

const Page = async ({ searchParams }: { searchParams: srcParams }) => {
  const { name } = (await searchParams) || {};
  await dbConnect();

  const query: Partial<Record<string, unknown>> = {};
  if (name) {
    query.name = { $regex: name, $options: 'i' };
  }

  const camps = await Police?.find(query);

  return (
    <div className="my-12 px-2 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">সেনা ক্যাম্প তথ্য</h1>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 md:px-4 py-2">নাম</th>
              <th className="px-2 md:px-4 py-2">বিভাগ</th>
              <th className="px-2 md:px-4 py-2">জেলা</th>
              <th className="px-2 md:px-4 py-2">যোগাযোগ নম্বর</th>
            </tr>
          </thead>
          <tbody>
            {camps.length > 0 ? (
              camps.map((camp, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b">
                  <td className="px-2 md:px-4 py-2">{camp?.name}</td>
                  <td className="px-2 md:px-4 py-2">{camp?.division || 'অন্যান্য'}</td>
                  <td className="px-2 md:px-4 py-2">{camp?.district || 'অন্যান্য'}</td>
                  <td className="px-2 md:px-4 py-2">
                    {camp?.phoneNumbers.length > 0 ? camp?.phoneNumbers.map((num: string) => num.replace(/[০-৯]/g, (d) => '0123456789'['০১২৩৪৫৬৭৮৯'.indexOf(d)])).join(', ') : 'N/A'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 py-4">
                  ❌ কোনো ক্যাম্প পাওয়া যায়নি
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
