
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/component/ui/dialog"


function DonateBox(){
  return(
      <>  
      <div className="flex justify-center items-center my-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-4xl font-bold mb-4">13 Unique Donors</h2>
          <Dialog>
              <DialogTrigger>Open</DialogTrigger>
                  <DialogContent>
                      <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                      </DialogDescription>
                      </DialogHeader>
                  </DialogContent>
          </Dialog>
      </div>
      </div>
      </>
  );
};
export default DonateBox;

