package fi.gosu.ika.stats.controller;

import fi.gosu.ika.stats.domain.SpyReport;
import fi.gosu.ika.stats.exceptions.SpyReportDeleteForbiddenException;
import fi.gosu.ika.stats.service.SpyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * SpyReport.jsx Controller
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@RestController
@RequestMapping("/spyreport/")
@CrossOrigin
public class SpyReportController {

    @Autowired
    private SpyService spyService;

    @RequestMapping(method = RequestMethod.GET)
    public List<SpyReport> getAll() {
        return spyService.findAllReports();
    }

    @RequestMapping(method = RequestMethod.POST)
    public SpyReport addSpyReport(@RequestBody SpyReport spyReport) {
        return spyService.addSpyReport(spyReport);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public SpyReport getOne(@PathVariable Long id) {
        return spyService.findOneReport(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public SpyReport delete(@PathVariable Long id) {
        throw new SpyReportDeleteForbiddenException();
    }
}
