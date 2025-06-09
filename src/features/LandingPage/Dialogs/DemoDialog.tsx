import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
const DemoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Schedule your Demo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule your Demo</DialogTitle>
        </DialogHeader>
        <form id="demo-scheduling-form" className="space-y-4">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="demo-name"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Full Name
              </label>
              <Input type="text" id="demo-name" name="demo-name" required />
            </div>

            <div>
              <label
                htmlFor="demo-email"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Work Email
              </label>
              <Input type="email" id="demo-email" name="demo-email" required />
            </div>

            <div>
              <label
                htmlFor="demo-company"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Company
              </label>
              <Input
                type="text"
                id="demo-company"
                name="demo-company"
                required
              />
            </div>

            <div>
              <label
                htmlFor="demo-date"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Preferred Date
              </label>
              <Input
                type="date"
                id="demo-company"
                name="demo-company"
                required
              />
            </div>

            <div>
              <label
                htmlFor="demo-time"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Preferred Time (Your local time)
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="demo-message"
                className="mb-1 block text-sm font-medium text-neutral-700"
              >
                Additional Information
              </label>
              <Textarea id="demo-message" name="demo-message" rows={3} />
            </div>
          </div>

          <div className="mt-5 flex justify-end space-x-3">
            <Button
              size={'sm'}
              type="button"
              id="cancel-demo-modal"
              variant={'ghost'}
            >
              Cancel
            </Button>
            <Button size={'sm'} type="submit">
              Schedule Demo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
